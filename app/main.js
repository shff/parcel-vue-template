import Vue from "vue";
import AtUI from "at-ui";
import "at-ui-style";

import App from "./components/app";

Vue.use(AtUI);

new Vue({ render: h => h(App) }).$mount("main");
