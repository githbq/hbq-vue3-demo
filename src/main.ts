import { createApp } from "vue";
import ElementPlus from "element-plus";
import "css-reset-and-normalize/less/reset-and-normalize.less";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
