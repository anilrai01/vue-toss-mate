import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "./customJSEvents";
import "v-infinite-scroll/dist/v-infinite-scroll.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

import InfiniteScroll from "v-infinite-scroll";
Vue.use(InfiniteScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
