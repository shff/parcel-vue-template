import Vue from "vue";
import * as components from "./components/*.vue";

new Vue({ el: "main", components, render: h => h("App") });
