import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.scss';
import router from './router/router.js';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import EN from '@/locale/en.json';
import RU from '@/locale/ru.json';

const pinia = createPinia();
const app = createApp(App);

const messages = {
    en: EN,
    ru: RU,
};

const storedLocale = localStorage.getItem('selectedLanguage') === 'EN' ? 'en' : 'ru';

const i18n = createI18n({
    legacy: false,
    locale: storedLocale,
    fallbackLocale: 'en',
    messages,
});


app.use(i18n);
app.use(router);
app.use(pinia);
app.mount('#app');
