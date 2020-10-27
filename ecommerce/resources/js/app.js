require("./bootstrap");

window.Vue = require("vue");
import Vuetify from "../plugins/vuetify";
import Vuerouter from "vue-router";
import swal from "sweetalert";
import { routes } from "./routes";
import gql from "graphql-tag";

Vue.component("app-component", require("./components/App.vue").default);
Vue.component("login-component", require("./components/login.vue").default);

const router = new Vuerouter({
    mode: "history",
    routes: routes
});

Vue.use(Vuerouter);

const app = new Vue({
    vuetify: Vuetify,
    el: "#app",
    router: router
});
