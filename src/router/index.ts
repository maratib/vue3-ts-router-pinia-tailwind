import { createRouter, createWebHashHistory } from "vue-router";

interface RoutesType {
  path: string;
  component: () => {};
  meta?: {
    index?: number;
    layout?: string;
    keepAlive?: boolean;
  };
  children?: RoutesType[];
}

const routes: RoutesType[] = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/About.vue"),
    meta: {
      layout: "AppLayout",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
