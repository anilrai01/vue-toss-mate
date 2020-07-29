import Vue from "vue";
import Vuex from "vuex";
import quotes from "./modules/quotes";
import customerTasks from "./modules/customerTasks";
import tradieTasks from "./modules/tradieTasks";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        quotes,
        customerTasks,
        tradieTasks
    }
});

export default store;
