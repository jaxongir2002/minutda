<script setup>
import {ref, onMounted} from 'vue';
import Logo from "@/assets/imgs/Logo.vue";
import ButtonMenu from "@/assets/imgs/buttonMenu.vue";
import BlackNavigation from "@/components/BlackNavigation.vue";
import Menu from "@/components/Menu.vue";
import MenuFooter from "@/components/MenuFooter.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const isActive = ref(false);
const selectedLanguage = ref('EN'); // Default language
function closeFn() {
  isActive.value = !isActive.value;
}

function changeLanguage(event) {
  const lang = event.target.value;
  selectedLanguage.value = lang;
  localStorage.setItem('selectedLanguage', lang);
  location.reload(); // Reload the page to apply the language change
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    selectedLanguage.value = savedLanguage;
  }
});


</script>

<template>
  <div class="pb-2 bg-black text-amber-600 mt-4 w-full">
    <header class="transitionClass -mt-4">
      <div class="absolute left-0 right-0 z-40 mt-14 rounded-[100px]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="flex items-center justify-between px-[80px]">
              <a class="w-[10vw]" href="/">
                <img src="@/assets/imgs/Group%2011.png">
              </a>
              <div class="flex gap-4">
                <form class="max-w-sm mx-auto">
                  <select
                      id="countries"
                      class="bg-black border font-semibold border-gray-300 text-white text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-[1.1vh] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 custom-select"
                      v-model="selectedLanguage"
                      @change="changeLanguage"
                  >
                    <option value="EN" class="flag-en font-semibold">ENG</option>
                    <option value="RU" class="flag-ru font-semibold">РУС</option>
                  </select>
                </form>
                <div class="flex items-center gap-x-8">
                  <a class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                     href="/contact">
                <span class="relative top-px">
                  {{t('contactUs')}}
                </span>
                  </a>
                  <ButtonMenu @open-navigation="closeFn"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative z-50 overflow-hidden bg-neutral-950 "
           :class="{'activeClass': isActive, 'inactiveClass': !isActive}">
        <div class="bg-neutral-800">
          <BlackNavigation @close-fn="closeFn"/>
          <Menu @click="isActive = false"/>
          <div class="relative bg-neutral-950 before:absolute before:inset-x-0
        before:top-0 before:h-px before:bg-neutral-800">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <MenuFooter/>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>

</template>


<style scoped lang="scss">
.custom-select option {
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 30px;
}

.flag-en {
  background-image: url('https://flagcdn.com/w40/gb.png'); /* Replace with your English flag image URL */
}

.flag-ru {
  background-image: url('https://flagcdn.com/w40/ru.png'); /* Replace with your Russian flag image URL */
}
.activeClass {
  height: 90%;
  transform: translateY(0%);
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
  transform 0.5s ease-in-out;
  overflow: hidden;
}

.inactiveClass {
  height: 0;
  transform: translateY(-100%);
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
  transform 0.5s ease-in-out;
  overflow: hidden;

}

.transitionClass {
  transition: 0.3s height ease-in-out;
  background-color: #FFFFFF !important;
}
</style>