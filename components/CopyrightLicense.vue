<script setup lang="ts">
const copyrightYear = ref(new Date().getFullYear());
</script>

<template>
  <div class="flex flex-col gap-1">
    <p>Copyright © 2024-{{ copyrightYear }} Aethrexal</p>
    <p>
      Released under the
      <NuxtLink
        to="https://github.com/Aethrexal/MeTra/blob/main/LICENSE"
        class="hover:underline text-primary"
        >MIT License</NuxtLink
      >
    </p>
  </div>
</template>
