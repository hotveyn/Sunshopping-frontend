import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CatalogPage from "@/pages/CatalogPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import AuthPage from "@/pages/AuthPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/catalog",
        name: "catalog",
        component: CatalogPage,
    },
    {
        path: "/product:id",
        name: "product",
        component: ProductPage,
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfilePage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("token")) next();
            else next("/auth");
        },
    },
    {
        path: "/auth",
        name: "auth",
        component: AuthPage,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});