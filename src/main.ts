import {createApp} from "vue";
import router from "@/routes/router";
import "@/assets/css/style.css";
import App from "./App.vue";
import {createPinia} from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
