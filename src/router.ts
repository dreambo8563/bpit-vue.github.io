import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  // mode: "history",
  routes: [
    { path: "/", component: () => import("@/views/index.vue") },
    {
      path: "/components",
      component: () => import("@/layout/index.vue"),
      children: [
        {
          path: "flockbutton",
          components: {
            default: () => import("@/views/components/flockbutton/index.vue")
          }
        },
        {
          path: "fab",
          components: {
            default: () => import("@/views/components/fab/index.vue")
          }
        }
      ]
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("@/views/404.vue")
    }
  ]
});

export default router;
