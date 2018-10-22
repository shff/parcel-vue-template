import Vue from "vue";
import Buefy from "buefy"
import "buefy/dist/buefy.css"

import App from "./components/application/app.vue";

Vue.use(Buefy)

new Vue({ render: h => h(App) }).$mount("main");
