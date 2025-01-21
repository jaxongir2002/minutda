<script setup>
import MainEffectSvg from "@/ui/MainEffectSvg.vue";
import Partners from "@/components/Partners.vue";
import LandingCard from "@/ui/LandingCard.vue";
import Phabia from "@/ui/Phabia.vue";
import Service from "@/components/Service.vue";
import TellUs from "@/ui/TellUs.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
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
                {{t('ourService')}}
              </h1>
              <p class="mt-6 text-xl text-neutral-600">
               {{t('subMenuText')}}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Partners/>
    </div>
  </div>

  <Phabia/>
  <Service/>
  <TellUs/>
</template>

<style scoped lang="scss">

</style>