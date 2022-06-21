import Vue from "vue";
import Router from "vue-router";
import DashBoard from '../components/DashBoard.vue'
import GaTos from '../components/GaTos.vue'
import CaChorros from '../components/CaChorros.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      { path: "/", redirect: "/dashboard"},
      { path: "/dashboard", component: DashBoard as any},
      { path: "/gatos", component: GaTos as any },
      { path: "/cachorros", component: CaChorros as any },
    ]
  });