import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  // mode: "history",
  routes: [
    { path: "/", component: () => import("@/views/index.vue") },
    { path: "/install", component: () => import("@/views/install/index.vue") },
    { path: "/author", component: () => import("@/views/author/index.vue") },
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
        },
        {
          path: "gradientbutton",
          components: {
            default: () => import("@/views/components/gradientbutton/index.vue")
          }
        },
        {
          path: "hoveranimation",
          components: {
            default: () => import("@/views/directives/hoveranimation/index.vue")
          }
        },
        {
          path: "transformcontainer",
          components: {
            default: () =>
              import("@/views/components/transformcontainer/index.vue")
          }
        },
        {
          path: "hovermagicunderline",
          components: {
            default: () =>
              import("@/views/directives/hovermagicunderline/index.vue")
          }
        },
        {
          path: "bouncingloader",
          components: {
            default: () => import("@/views/components/bouncingloader/index.vue")
          }
        },
        {
          path: "donutspinner",
          components: {
            default: () => import("@/views/components/donutspinner/index.vue")
          }
        },
        {
          path: "borderinput",
          components: {
            default: () => import("@/views/components/borderinput/index.vue")
          }
        },
        {
          path: "labelinput",
          components: {
            default: () => import("@/views/components/labelinput/index.vue")
          }
        },
        {
          path: "radiobutton",
          components: {
            default: () => import("@/views/components/radiobutton/index.vue")
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
