import { createApp } from "vue";
import "./style.css";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from "@primeuix/themes/aura";
import Button from "primevue/button";

const primeVueOptions = {
  theme: {
    preset: Aura
  },
  ripple: true
};

const app = createApp(App);
app.use(PrimeVue, primeVueOptions);
app.component("Button", Button);
app.mount("#app");
