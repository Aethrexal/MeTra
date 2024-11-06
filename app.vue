<template>
  <div>
    <NuxtLayout>
      <div class="h-screen flex flex-col justify-between">
        <div class="flex flex-col md:flex-row">
          <Navigation />
          <NuxtPage />
        </div>
        <div class="block md:hidden">
          <Footer />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
