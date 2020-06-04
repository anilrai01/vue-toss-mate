import Vue from "vue";
import Vuex from "vuex";
import quotes from "./modules/quotes";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    quotes,
  },
});

export default store;
