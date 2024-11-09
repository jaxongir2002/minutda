<script setup>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import {useLenisStore} from "@/store/lenisStore.js";
import {onMounted} from "vue";
import MainEffectSvg from "@/ui/MainEffectSvg.vue";

const storeLenis = useLenisStore();
onMounted(()=>{
  storeLenis.initLenis();
})
</script>

<template>
  <Navigation/>
  <MainEffectSvg/>
  <router-view/>
  <Footer/>
</template>

<style scoped lang="scss">
</style>
