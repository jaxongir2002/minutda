import {createRouter, createWebHistory} from 'vue-router';
import Landing from "../views/Landing.vue";
import OurWorks from "@/views/OurWorks.vue";
import About from "@/views/About.vue";
import Register from "@/components/Contact/Register.vue";
import InfoWork from "@/components/OurWorks/InfoWork.vue";

const routes = [
    {path: '/', component: Landing},
    {path: '/work', component: OurWorks},
    {path: '/work/:id', component: InfoWork},
    {path: '/about', component: About},
    {path: '/contact', component: Register},
]

const router = createRouter({
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({left: 0, top: 0})
            }, 500)
        })
    },
    history: createWebHistory(),
    routes,
});
export default router