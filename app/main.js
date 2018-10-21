import Vue from "vue";
import "element-ui/packages/theme-chalk/lib/reset";
import "element-ui/packages/theme-chalk/lib/index";

import App from "./components/app";

new Vue({ render: h => h(App) }).$mount("main");
