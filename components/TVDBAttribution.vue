<template>
  <NuxtLink
    to="https://thetvdb.com/"
    class="flex hover:underline bg-blue-950 p-3 rounded-lg md:gap-4"
  >
    <img
      src="/public/tvdbLogo.png"
      alt="tvdb Logo"
      class="w-12 h-8 self-center md:w-16 md:h-10"
    />
    <p class="text-center text-xs text-primary md:text-sm md:self-center">
      Metadata provided by TheTVDB. Please consider adding missing information
      or subscrubing.
    </p>
  </NuxtLink>
</template>
