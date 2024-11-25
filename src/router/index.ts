import { useAppStore } from "@/stores/app";
import type { DoorNumbers } from "@/types";
import DoorView from "@/views/DoorView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/door/:door",
      name: "door",
      component: DoorView,
      beforeEnter: (to, _from, next) => {
        const appStore = useAppStore();

        if (!appStore.canOpenDoor(to.params.door as DoorNumbers[number])) {
          next({ name: "home" });
        } else {
          next();
        }
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: HomeView,
      beforeEnter: (_to, _from, next) => next({ name: "home" }),
    },
  ],
});

export default router;
