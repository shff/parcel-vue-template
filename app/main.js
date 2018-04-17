import Vue from "vue";
import * as components from "./*.vue";

new Vue({ render: h => h("App"), components }).$mount("main");
