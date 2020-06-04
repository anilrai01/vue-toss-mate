import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import Profile from "../views/Profile";
import NotFound from "../components/NotFound";
import GetQuotes from "../views/GetQuotes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/get-quotes",
    name: "GetQuotes",
    component: GetQuotes,
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "*",
    redirect: "/not-found",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
