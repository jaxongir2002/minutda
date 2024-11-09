<script setup>

</script>

<template>
  <div class="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="flex items-center gap-x-8" style="opacity: 1; transform: none;"><h2
            class="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">We’ve worked
          with hundreds of amazing people</h2>
          <div class="h-px flex-auto bg-neutral-800"></div>
        </div>
        <div>
          <ul role="list" class="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            <li v-for="item in 8">
              <div style="opacity: 1; transform: none;">
                <img alt="Phobia" loading="lazy" width="184" height="36"
                     decoding="async" data-nimg="1" style="color:transparent"
                     src="https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>