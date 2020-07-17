import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../components/NotFound";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile"),
  },
  {
    path: "/profile/tradie",
    name: "ProfileTradie",
    component: () =>
      import(/* webpackChunkName: "profile-tradie" */ "../views/ProfileTradie"),
  },
  {
    path: "/browse-task",
    name: "BrowseTask",
    component: () =>
      import(/* webpackChunkName: "browsetask" */ "../views/BrowseTask"),
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
    path: "/categories-view/:name",
    name: "CategoriesView",
    component: () =>
      import(/* webpackChunkName: "categories-view" */ "../views/CategoryView"),
  },
  {
    path: "/all-categories",
    name: "AllCategoriesView",
    component: () =>
      import(
        /* webpackChunkName: "business-register" */ "../views/AllCategoriesView"
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
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
