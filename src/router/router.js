import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home";
// import Register from "../views/Register";
// import Login from "../views/Login";
// import Profile from "../views/Profile";
import NotFound from "../components/NotFound";
// import GetQuotes from "../views/GetQuotes";
// import BusinessRegister from "../views/BusinessRegister";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile"),
  },
  {
    path: "/get-quotes",
    name: "GetQuotes",
    component: () =>
      import(/* webpackChunkName: "getQuotes" */ "../views/GetQuotes"),
  },
  {
    path: "/business-register",
    name: "BusinessRegister",
    component: () =>
      import(
        /* webpackChunkName: "business-register" */ "../views/BusinessRegister"
      ),
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
