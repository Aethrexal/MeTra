<script setup lang="ts">
const searchResults = [
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
  {
    name: "MeTra",
    description: "A simple, lightweight, and fast tray app for Windows.",
    url: "https://placehold.co/400x600",
  },
];
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <div>
      <TVDBAttribution />
    </div>

    <div class="md:grid grid-cols-3">
      <div></div>
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="Search" />
        <Icon name="tabler:search" class="w-5 h-5" />
      </label>
      <div></div>
    </div>

    <div class="flex flex-col gap-4">
      <h1 class="text-xl font-bold text-center">Search Results:</h1>

      <div class="flex flex-wrap gap-2 justify-center md:gap-4">
        <div
          v-for="result in searchResults"
          class="md:hover:scale-105 md:hover:cursor-pointer"
        >
          <img :src="result.url" class="w-28 rounded-lg md:w-36" />
        </div>
      </div>
    </div>
  </div>
</template>
