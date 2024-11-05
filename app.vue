<script setup lang="ts">
const config = useRuntimeConfig();

console.log(config.public.tvdbUrl);
console.log(config.tvdbApiKey);
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
