import Vue from "vue";
import * as components from "./*.vue";

new Vue({ components, render: h => h("App") }).$mount("main");
