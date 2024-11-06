<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
</script>

<template>
  <div class="navbar bg-base-200 md:hidden">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost text-xl">MeTra</NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/" :class="{ active: route.path === '/' }"
            >Dashboard</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/search" :class="{ active: route.path === '/search' }"
            >Search</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>

  <!-- Medium Screen --->
  <div
    class="hidden md:flex flex-col justify-between bg-base-200 w-56 h-screen pt-4 pb-2"
  >
    <!--- TOP Main Navigation --->
    <div class="flex flex-col">
      <div class="text-center">
        <NuxtLink to="/" class="text-xl font-bold">MeTra</NuxtLink>
      </div>

      <ul class="menu">
        <li>
          <NuxtLink to="/" :class="{ active: route.path === '/' }">
            <Icon name="tabler:layout-dashboard" size="32" />
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search" :class="{ active: route.path === '/search' }">
            <Icon name="tabler:search" size="32" />
            Search
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!--- BOTTOM Version and Icons --->
    <div class="px-2 flex flex-col gap-2 justify-center items-center">
      <NuxtLink to="https://github.com/Aethrexal/MeTra">
        <Icon name="tabler:brand-github" size="28" />
      </NuxtLink>
      <div class="text-center text-xs">
        <CopyrightLicense />
      </div>
      <p class="text-center text-xs">Version: {{ config.public.version }}</p>
    </div>
  </div>
</template>
