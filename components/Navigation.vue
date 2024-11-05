<script setup lang="ts">
const route = useRoute();
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
  <div class="hidden md:block bg-base-200 w-56 h-screen pt-4">
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
</template>
