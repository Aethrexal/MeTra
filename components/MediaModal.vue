<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const mediaData = ref(props.data);
</script>

<template>
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
    </form>
    <h3 class="text-lg font-bold">{{ mediaData?.name }}</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</template>
