import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Products from "./components/pages/Products.vue";
import Partners from "./components/pages/Partners.vue";
import Contact from "./components/pages/Contact.vue";
import Gallery from "./components/pages/Gallery.vue";
import Login from "./components/pages/Login.vue";

import Orffa from "./components/sub_pages/Orffa.vue";
import Adifeed from "./components/sub_pages/Adifeed.vue";
import Bioarmor from "./components/sub_pages/Bioarmor.vue";
import Icc from "./components/sub_pages/Icc.vue";
import Nutritech from "./components/sub_pages/Nutritech.vue";
import Killion from "./components/sub_pages/Killion.vue";
import Basf from "./components/sub_pages/Basf.vue";
import Sanzyme from "./components/sub_pages/Sanzyme.vue";
import Vetneeds from "./components/sub_pages/Vetneeds.vue";

const routes =[
    {path:'/',component: Home },
    {path:'/about',component: About },
    {path:'/products',component: Products },
    {path:'/partners',component: Partners },
    {path:'/contact',component: Contact },
    {path:'/gallery',component: Gallery },
    {path:'/login',component: Login },


    {path:'/orffa',component: Orffa },
    {path:'/adifeed',component: Adifeed },
    {path:'/bioarmor',component: Bioarmor },
    {path:'/icc',component: Icc },
    {path:'/nutritech',component: Nutritech },
    {path:'/killion',component: Killion },
    { path:'/basf', component: Basf},
    { path:'/sanzyme', component: Sanzyme},
    { path:'/vetneed', component: Vetneeds},
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router;