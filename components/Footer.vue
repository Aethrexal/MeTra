<template>
  <footer
    class="footer bg-neutral text-neutral-content items-center p-4 flex flex-col gap-4"
  >
    <aside class="grid-flow-col items-center">
      <CopyrightLicense />
    </aside>
    <nav class="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
      <NuxtLink to="https://github.com/Aethrexal/MeTra">
        <Icon name="tabler:brand-github" size="28" />
      </NuxtLink>
    </nav>
  </footer>
</template>
