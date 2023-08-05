import { createRouter, createWebHistory } from "vue-router";
import mainContent from "../view/mainContent.vue";
import mainCard from "../components/mainCard.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      components: { default: mainContent },
      meta: { transition: "enter" },
    },
    {
      path: "/test",
      components: { default: mainCard },
      meta: { transition: "enter" },
    },
  ],
});
