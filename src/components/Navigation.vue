<script setup>
import {ref} from 'vue';
import Logo from "@/assets/imgs/Logo.vue";
import ButtonMenu from "@/assets/imgs/buttonMenu.vue";
import BlackNavigation from "@/components/BlackNavigation.vue";
import Menu from "@/components/Menu.vue";
import MenuFooter from "@/components/MenuFooter.vue";

const isActive = ref(false);

function closeFn() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <header class="transitionClass">
    <div class="absolute left-0 right-0 top-2 z-40 pt-14 ">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="flex items-center justify-between">
            <a href="/">
              <Logo/>
            </a>
            <div class="flex items-center gap-x-8">
              <a class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                 href="/contact"><span class="relative top-px">Contact us</span></a>
              <ButtonMenu @open-navigation="closeFn"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative z-50 overflow-hidden bg-neutral-950 pt-2"
         :class="{'activeClass': isActive, 'inactiveClass': !isActive}">
      <div class="bg-neutral-800">
        <BlackNavigation @close-fn="closeFn"/>
        <Menu/>
        <div class="relative bg-neutral-950 before:absolute before:inset-x-0
        before:top-0 before:h-px before:bg-neutral-800">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <MenuFooter/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.activeClass {
  height: 90%;
  transform: translateY(0%);
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  overflow: hidden;
}

.inactiveClass {
  height: 0; /* Collapse to zero */
  transform: translateY(-100%); /* Move down slightly */
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  overflow: hidden;
}

.transitionClass {
  transition: 0.3s height ease-in-out;
}
</style>