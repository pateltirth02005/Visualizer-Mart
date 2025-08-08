import { createApp } from "vue";
import App from "./App.vue";
import './bootstrap';


const app = createApp(App);
// Router
import router from "./router";
app.use(router);
router.beforeEach(async (to, from, next) => {
  if (to.path.startsWith('/admin')) {
    // await import('./admin/assets/css/tailwind.css');
    await import('../src/admin/assets/css/tailwind.css');
  }
  next();
});
// Pinia store
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);



// App CSS
import "@/admin/assets/css/app.css";

// Perfect Scrollbar
import { PerfectScrollbarPlugin } from "vue3-perfect-scrollbar";
app.use(PerfectScrollbarPlugin);

// Vue Meta
import { createHead } from "@vueuse/head";
const head = createHead();
app.use(head);

// Default settings
import appSetting from "./app-setting";
appSetting.init();

// Vue I18n
import i18n from "./i18n";
app.use(i18n);

// Tippy tooltips
import { TippyPlugin } from "tippy.vue";
app.use(TippyPlugin);

// Input mask
import { vMaska } from "maska/vue";
app.directive("maska", vMaska);

// Markdown editor
import VueEasymde from "vue3-easymde";
import "easymde/dist/easymde.min.css";
app.use(VueEasymde);

// Popper
import Popper from "vue3-popper";
app.component("Popper", Popper);

// JSON to Excel
import vue3JsonExcel from "vue3-json-excel";
app.use(vue3JsonExcel);

// ✅ Global CSS imports
import 'swiper/css/bundle';
import './front/assets/css/spacing.css';
import './front/assets/css/nice-select.css';
import './front/assets/css/animate.css';
import './front/assets/css/custom-animation.css';
import './front/assets/css/flaticon.css';
import './front/assets/css/font-awesome-pro.css';
import './front/assets/css/meanmenu.css';

import 'bootstrap/scss/bootstrap.scss';



// ✅ Main SCSS
import './front/assets/scss/main.scss';

app.mount("#app");
