<script setup>
import WorksCard from "@/components/OurWorks/WorksCard.vue";
import WorksSvgEffect from "@/ui/WorksSvgEffect.vue";
import TellUs from "@/ui/TellUs.vue";
</script>

<template>
  <main class="w-full flex-auto bg-white rounded-4xl">
    <div class="mx-auto max-w-7xl px-6 z-50 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div style="opacity: 1; transform: none; z-index: 900 !important;">
          <h1>
            <span class="block font-display text-base font-semibold text-neutral-950">
            </span>
            <span class="sr-only"> - </span>
            <span
                class="mt-6 sm:pt-[15vh] block max-w-5xl font-display
                 text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              Proven solutions for real-world problems.
            </span>
          </h1>
          <div class="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>
              We believe in efficiency and maximizing our resources
              to provide the best value to our clients. The primary way we do that is by re-using the same five projects
              we’ve been developing for the past decade.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-40">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div style="opacity: 1; transform: none;">
          <h2 class="font-display text-2xl font-semibold text-neutral-950">
            Case studies
          </h2>
        </div>
        <div class="mt-10 space-y-20 sm:space-y-24 lg:space-y-32 bg">
          <WorksCard/>
        </div>
      </div>
    </div>
    <div class="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40">
      <WorksSvgEffect/>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div style="opacity: 1; transform: none;">
            <figure class="mx-auto max-w-4xl">
              <blockquote
                  class="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                <p class="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                  We approached<em>Studio</em>
                  because we loved their past work. They delivered something remarkably similar in record time.
                </p>
              </blockquote>
              <figcaption class="mt-10">
                <img alt="Mail Smirk" loading="lazy" width="184" height="36" decoding="async"
                     data-nimg="1" src="https://studio.tailwindui.com/_next/static/media/logo-dark.ac5d2e8d.svg"
                     style="color: transparent;">
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div style="opacity: 1; transform: none;"><h2 class="font-display text-2xl font-semibold text-neutral-950">
          You’re in good company</h2></div>
        <div class="mt-10">
          <div
              class="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
              style="opacity: 1; transform: none;"></div>
          <ul role="list" class="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            <li v-for="info in 8" :key="info" class="group">
              <div class="overflow-hidden" style="opacity: 1; transform: none;">
                <div
                    class="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <img alt="Phobia" loading="lazy" width="184" height="36" decoding="async" data-nimg="1"
                       src="https://studio.tailwindui.com/_next/static/media/logo-dark.353d4760.svg" style="color: transparent;"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
<TellUs/>
  </main>
</template>

<style scoped lang="scss">

</style>