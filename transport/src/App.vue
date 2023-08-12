<template>
  <navBar :companyName="companyName" :page="page" :pageLink="pageLink">
  </navBar>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'enter'">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <sideCard></sideCard>
  <footer>
    <bottomBar
      :companyName="companyName"
      :page="page"
      :pageLink="pageLink"
    ></bottomBar>
  </footer>
</template>

<script>
import navBar from "./components/navBar.vue";
import bottomBar from "./components/bottomBar.vue";
import sideCard from "./components/sideCard.vue";
//import css
import "./assets/css/style.css";
import "./assets/fonts/font-awesome.min.css";
export default {
  name: "App",
  components: {
    navBar,
    bottomBar,
    sideCard,
  },
  data() {
    return {
      companyName: "好望角租車-苗栗機場接送",
      page: ["竹南機場接送", "頭份機場接送", "後龍機場接送", "聯絡我們"],
      pageLink: ["/zhunan", "/toufen", "/houlong", "/about"],
    };
  },
  props: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* mainContent 轉場動畫 */
.enter-enter-active {
  transition: all 2s ease;
}
.enter-leave-active {
  transition: all 0.5s ease;
}
.enter-enter-to,
.enter-leave-from {
  opacity: 1;
  transform: translateY(0%);
}
.enter-leave-to,
.enter-enter-from {
  opacity: 0;
  transform: translateY(100%);
}
</style>
