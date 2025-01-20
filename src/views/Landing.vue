<script setup>
import MainEffectSvg from "@/ui/MainEffectSvg.vue";
import Partners from "@/components/Partners.vue";
import LandingCard from "@/ui/LandingCard.vue";
import Phabia from "@/ui/Phabia.vue";
import Service from "@/components/Service.vue";
import TellUs from "@/ui/TellUs.vue";
</script>

<template>
  <div class="relative flex flex-auto overflow-hidden bg-white pt-14"
       style="border-top-left-radius: 40px; border-top-right-radius: 40px; transform: none; transform-origin: 50% 50% 0;">
    <div class="relative isolate flex w-full flex-col pt-9" style="transform: none; transform-origin: 50% 50% 0;">
      <MainEffectSvg/>
      <main class="w-full flex-auto">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="max-w-3xl" style="opacity: 1; transform: none;">
              <h1 class="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                Our Services is Forever Accurate</h1>
              <p class="mt-6 text-xl text-neutral-600">We provide innovative solutions and reliable support to make
                managing your business not just easier, but more efficient and stress-free, allowing you to focus on
                growth and success.”
              </p>
            </div>
          </div>
        </div>
      </main>
      <Partners/>
    </div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 bg-white">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="max-w-2xl" style="opacity: 1; transform: none;"><h2><span
          class="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">Harnessing technology for a brighter future</span>
      </h2>
        <div class="mt-6 text-xl text-neutral-600"><p>We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a catch 22 situation.</p></div>
      </div>
    </div>
  </div>
  <LandingCard/>
  <Phabia/>
  <Service/>
  <TellUs/>
</template>

<style scoped lang="scss">

</style>