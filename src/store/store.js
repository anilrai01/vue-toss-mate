import Vue from "vue";
import Vuex from "vuex";
import quotes from "./modules/quotes";
import profile from "./modules/profile";
import tasks from "./modules/tasks";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    quotes,
    profile,
    tasks,
  },
});

export default store;
