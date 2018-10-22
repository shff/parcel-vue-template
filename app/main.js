import Vue from "vue";
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

import App from "./components/app.vue";

Vue.use(KeenUI);

new Vue({ render: h => h(App) }).$mount("main");
