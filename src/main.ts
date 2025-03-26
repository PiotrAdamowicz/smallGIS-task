import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from "@primeuix/themes/aura";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Card from "primevue/card";
import ToggleSwitch from "primevue/toggleswitch";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

const primeVueOptions = {
  theme: {
    preset: Aura
  },
  ripple: true
};

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(PrimeVue, primeVueOptions);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("Textarea", Textarea);
app.component("Card", Card);
app.component("ToggleSwitch", ToggleSwitch);
app.component("Accordion", Accordion);
app.component("AccordionPanel", AccordionPanel);
app.component("AccordionHeader", AccordionHeader);
app.component("AccordionContent", AccordionContent);
app.mount("#app");
