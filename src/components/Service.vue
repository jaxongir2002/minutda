<script setup>
import ServiceImg from "@/ui/ServiceImg.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n();
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8  bg-white">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="max-w-2xl" style="opacity: 1; transform: none;"><h2>
        <span class="mb-6 block font-display text-base font-semibold text-neutral-950">
          {{t('services')}}
        </span>
        <span class="sr-only"> - </span>
        <span class="block font-display tracking-tight
          [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
         {{t('transformBusiness')}}
      </span>
      </h2>
        <div class="mt-6 text-xl text-neutral-600">
          <p>
            {{t('ourBrand')}}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-16 bg-white">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="lg:flex lg:items-center lg:justify-end">
        <div class="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
          <div class="w-[33.75rem] flex-none lg:w-[45rem]" style="opacity: 1; transform: none;">
            <div class="justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale">
              <ServiceImg/>
            </div>
          </div>
        </div>
        <div>
          <ul role="list" class="text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <li class="group mt-10 first:mt-0">
              <div style="opacity: 1; transform: none;">
                <div
                    class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <strong class="font-semibold text-neutral-950">{{t('webSiteDevelopment')}}</strong>
                   {{t('subTextWebSiteDevelopment')}}
                </div>
              </div>
            </li>
            <li class="group mt-10 first:mt-0">
              <div style="opacity: 1; transform: none;">
                <div
                    class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <strong class="font-semibold text-neutral-950">{{t('telegramBot')}}</strong>
                   {{t('subTextTelegramBot')}}
                </div>
              </div>
            </li>
            <li class="group mt-10 first:mt-0">
              <div style="opacity: 1; transform: none;">
                <div
                    class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <strong class="font-semibold text-neutral-950">{{t('brandingServices')}}</strong>
                   {{t('subTextBranding')}}
                </div>
              </div>
            </li>
            <li class="group mt-10 first:mt-0">
              <div style="opacity: 1; transform: none;">
                <div
                    class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <strong class="font-semibold text-neutral-950">{{t('customContent')}}</strong>
                  {{t('subTextCustom')}}
                </div>
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