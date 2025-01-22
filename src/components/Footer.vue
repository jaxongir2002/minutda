<script setup>
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>

<template>
  <footer class="mx-auto max-w-7xl px-6 lg:px-8 mt-10 w-full sm:pt-32 lg:pt-40 bg-white">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div style="opacity: 1; transform: none;">
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <nav>
            <ul role="list" class="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <li>
                <div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Work</div>
                <ul role="list" class="mt-4 text-sm text-neutral-700">
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="/work/family-fund">Hybrit</a>
                  </li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="/work/unseal">Pricision</a></li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="/work/phobia">Sham CRM</a></li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="/work">{{t('seeAll')}} <span
                      aria-hidden="true">→</span></a></li>
                </ul>
              </li>
              <li>
                <div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Company</div>
                <ul role="list" class="mt-4 text-sm text-neutral-700">
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="/about">{{t('about')}}</a></li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="/process">{{t('process')}}</a></li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="/blog">{{t('blog')}}</a></li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="/contact">{{t('contactUs')}}</a></li>
                </ul>
              </li>
              <li>
                <div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Connect</div>
                <ul role="list" class="mt-4 text-sm text-neutral-700">
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="https://facebook.com">Facebook</a>
                  </li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="https://www.instagram.com/justmedia_uz?igsh=MTNtbTdleHM4N2kxaw%3D%3D&utm_source=qr">Instagram</a></li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="https://www.linkedin.com/company/minutda-llc/posts/?feedView=all">LinkedIn</a>
                  </li>
                  <li class="mt-4"><a class="transition hover:text-neutral-950" href="https://dribbble.com">Dribbble</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div class="flex lg:justify-end">
            <form class="max-w-sm"><h2 class="font-display text-sm font-semibold tracking-wider text-neutral-950">{{t('signUp')}}</h2>
              <p class="mt-4 text-sm text-neutral-700">{{t('subTextSignUp')}}</p>
              <div class="relative mt-6">
                <input :placeholder="t('emailAddress')" autocomplete="email"
                       class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                       type="email">
                <div class="absolute inset-y-1 right-1 flex justify-end">
                  <button type="submit" aria-label="Submit"
                          class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800">
                    <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                            d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
            class="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <a aria-label="Home" href="/">
            <img class="w-[10vw]" src="@/assets/imgs/Group%2011.png" alt="">
          </a>
          <p class="text-sm text-neutral-700">© Minutda Inc. 2024</p></div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">

</style>