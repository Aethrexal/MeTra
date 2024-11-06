<script setup lang="ts">
const router = useRouter();
const searchResults = ref([]);
const query = ref("");
const previousQuery = ref("");
const isLoading = ref(false);
const isFieldEmpty = ref(false);
const modalResult = ref(null);
const loadingModalResult = ref(false);
const searchError = ref("");
const firstSearch = ref(true);

const search = async () => {
  // TODO: Get from the database first then replace the tvdb results with the local ones if any
  // TODO: Seasons are returning double amount of what they should be (It's because it's doing absolute order, dvd order and aired order)
  // TODO: Add genres to the modal
  // TODO: Some cooldown for the search

  isLoading.value = true;
  isFieldEmpty.value = false;
  searchError.value = "";

  if (!query.value.trim()) {
    isFieldEmpty.value = true;
    isLoading.value = false;
    return;
  }

  if (query.value === previousQuery.value) {
    isLoading.value = false;
    return;
  }

  previousQuery.value = query.value;

  try {
    const res = await useFetch("/api/tvdb/search", {
      params: { term: query.value },
    });
    searchResults.value = res.data.value;
  } catch (error) {
    console.error("Error while searching TVDB", error);
    searchError.value = error.message;
  }

  firstSearch.value = false;
  isLoading.value = false;
};

const getMediaData = async (mediaId: string, mediaType: string) => {
  loadingModalResult.value = true;
  if (mediaType === "series") {
    try {
      const res = await useFetch("/api/tvdb/getSerie", {
        params: { id: mediaId },
      });

      modalResult.value = res.data.value;
      console.log(res.data.value);
    } catch (error) {
      console.error("Error while fetching TVDB series", error);
      searchError.value = error.message;
    }
  } else {
    try {
      const res = await useFetch("/api/tvdb/getMovie", {
        params: { id: mediaId },
      });

      modalResult.value = res.data.value;
      console.log(res.data.value);
    } catch (error) {
      console.error("Error while fetching TVDB movie", error);
      searchError.value = error.message;
    }
  }
  loadingModalResult.value = false;
};

const mediaStatusColor = (status: string) => {
  switch (status) {
    case "Ended":
      return "badge-error";
    case "Continuing":
      return "badge-warning";
    case "Planned":
      return "badge-info";
    case "Released":
      return "badge-success";
    default:
      return "";
  }
};

const addToLibrary = async (mediaData: any) => {
  console.log("addToLibrary");
  router.push("/");
};
</script>

<template>
  <div class="p-4 flex flex-col items-center gap-4">
    <div>
      <TVDBAttribution />
    </div>

    <div class="md:grid grid-cols-3">
      <div></div>
      <form @submit.prevent="search">
        <label
          :class="{ 'input-error': isFieldEmpty }"
          class="input w-fit input-bordered flex items-center gap-2"
        >
          <input
            type="text"
            class="grow"
            placeholder="Search"
            v-model="query"
          />
          <button @submit.prevent="search" class="flex">
            <Icon name="tabler:search" class="w-5 h-5" />
          </button>
        </label>
      </form>
      <div></div>
    </div>

    <div class="flex flex-col items-center gap-4">
      <h1 v-if="searchResults.length > 0" class="text-3xl font-bold">
        {{ searchResults.length }} Result{{
          searchResults.length > 1 ? "s" : ""
        }}
      </h1>

      <span class="loading loading-bars loading-lg" v-if="isLoading"></span>

      <p class="text-error" v-if="searchError">{{ searchError }}</p>
      <p v-if="searchResults.length === 0 && !firstSearch" class="text-warning">
        No results found
      </p>

      <div
        class="flex flex-wrap gap-x-8 gap-y-10 justify-center md:gap-x-5 md:gap-y-12"
      >
        <button
          v-for="result in searchResults"
          class="md:hover:scale-105 md:hover:cursor-pointer w-28 md:w-36"
          onclick="my_modal_5.showModal()"
          @click="getMediaData(result.tvdb_id, result.type)"
        >
          <img :src="result.image_url" class="rounded-lg" />
          <p class="text-center truncate font-bold">{{ result.name }}</p>
        </button>
      </div>
    </div>

    <!-- Modal --->
    <dialog id="my_modal_5" class="modal modal-bottom md:modal-middle">
      <div class="modal-box pt-8" v-if="!loadingModalResult">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>

        <div class="flex flex-row gap-2">
          <img
            :src="modalResult?.image"
            class="rounded-lg w-28 max-h-56 md:w-36"
          />

          <div class="flex flex-col gap-4">
            <h3 class="text-lg font-bold">{{ modalResult?.name }}</h3>
            <span
              :class="mediaStatusColor(modalResult?.status.name)"
              class="badge badge-outline"
            >
              {{ modalResult?.status.name }}
            </span>

            <p v-if="modalResult?.seasons?.length">
              <span class="font-bold">Seasons</span>:
              {{ modalResult?.seasons.length }}
            </p>

            <div class="collapse bg-base-300">
              <input type="checkbox" />
              <div class="collapse-title text-md font-medium">
                Read description
              </div>
              <div class="collapse-content">
                <p>{{ modalResult?.overview }}</p>
              </div>
            </div>

            <button
              v-if="!modalResult?.user_status"
              class="btn btn-secondary"
              @click="addToLibrary(modalResult)"
            >
              Add to library
            </button>
          </div>
        </div>
      </div>

      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>
