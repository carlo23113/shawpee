import home from "./components/homepage/home.vue";
import adminhome from "./components/admin/adminhome";

export const routes = [
    {
        component: home,
        name: "home",
        path: "/home"
    },
    {
        component: adminhome,
        name: "adminhome",
        path: "/adminhome"
    }
];
