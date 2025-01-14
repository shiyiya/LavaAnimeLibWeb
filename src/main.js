import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router"; // src/router/index.js
import VueLazyLoad from "vue3-lazyload";
import "animate.css";
import "./index.css"; // tailwind directives
import "./transition.css"; // 自定义的切换动画

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// 在 Tailwind 后插入 NaiveUI 的 css
const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

export const app = createApp(App).use(pinia).use(router).use(VueLazyLoad);
app.mount("#app");
