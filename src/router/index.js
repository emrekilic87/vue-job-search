import Vue from "vue";
import VueRouter from "vue-router";
import Joblist from "@/views/Joblist.vue";
import JobDetail from "@/views/JobDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/joblist'
  },

  {
    path: "/joblist",
    name: "Joblist",
    component: Joblist,
  },

  {
    path: "/jobdetail/:id/",
    name: "JobDetail",
    component: JobDetail,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
