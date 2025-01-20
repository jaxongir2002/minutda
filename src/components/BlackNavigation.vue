<script setup>
const emit = defineEmits(['closeFn'])
</script>

<template>
  <div class="bg-neutral-950 pb-16 pt-14">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="flex items-center justify-between px-[80px]">
          <a aria-label="Home" href="/" class="w-20">
              <img src="@/assets/imgs/Group%2012.png">
          </a>
          <div class="flex items-center gap-x-8">
            <a class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
               href="/contact">
              <span class="relative top-px">Contact us</span>
            </a>
            <button @click="emit('closeFn')" type="button" aria-expanded="true" aria-controls=":r4t:"
                    class="group -m-2.5 rounded-full p-2.5 transition hover:bg-white/10"
                    aria-label="Toggle navigation">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-white group-hover:fill-neutral-200">
                <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>
                <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>