<script setup>
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

const { t } = useI18n()
const emit = defineEmits(['pageRes'])
const router = useRouter();

function routerPushFn(value) {
  router.push(`/${value}`)
  emit('pageRes')
}
</script>

<template>
  <nav class="mt-px font-display text-5xl font-medium tracking-tight text-white">
    <div class="even:mt-px sm:bg-neutral-950">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="grid grid-cols-1 pl-[4vw] sm:grid-cols-2">
            <a class="group relative  isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0
              sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
               @click="routerPushFn('work')">
              {{ t('ourWork') }}
              <span class="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0
              group-even:left-0 group-hover:opacity-100">
             </span>
            </a>
            <a class="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16
              sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
               @click="routerPushFn('about')">
              {{t('aboutUs')}}
              <span class="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0
              group-even:left-0 group-hover:opacity-100"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="even:mt-px hover:bg-neutral-900 bg-neutral-950 sm:bg-neutral-950">
      <div class="mx-auto flex items-center max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="grid grid-cols-1 sm:grid-cols-1">
            <a class="group relative isolate -mx-6  px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 "
              @click="routerPushFn('blog')">
            {{t('blog')}}
          </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">

</style>