import {createRouter, createWebHistory} from 'vue-router';
import Landing from "../views/Landing.vue";
import OurWorks from "@/views/OurWorks.vue";
import About from "@/views/About.vue";

const routes = [
    {path: '/', component: Landing},
    {path: '/work', component: OurWorks},
    {path: '/about', component: About},
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