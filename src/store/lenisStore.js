import { defineStore } from "pinia";
import Lenis from "lenis";
import { ref } from "vue";

export const useLenisStore = defineStore("lenis", () => {
    const lenis = ref(null);

    function initLenis() {
        lenis.value = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            infinite: false,
        });

        const raf = (time) => {
            lenis.value.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }

    function stopLenis() {
        if (lenis.value) {
            lenis.value.stop();
        }
    }

    function startLenis() {
        if (lenis.value) {
            lenis.value.start();
        }
    }

    return { lenis, initLenis, stopLenis, startLenis };
});