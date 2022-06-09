import VueRouter from 'vue-router';
import MainControl from "./components/MainControl.vue";
import RegisterPage from "./components/RegisterPage.vue";

const routes = [
    {path:"/", component:RegisterPage},
    {path:"/control", component:MainControl}
]

const router = new VueRouter({
    mode:'history',
    routes
});

export default router;
