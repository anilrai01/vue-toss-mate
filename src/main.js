import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "./customJSEvents";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
// import ScrollLoader from "vue-scroll-loader";
// Vue.use(ScrollLoader);
import InfiniteLoading from "vue-infinite-loading";
Vue.use(InfiniteLoading);

import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
