<template>
  <navBar :companyName="companyName" :page="page" :pageLink="pageLink">
  </navBar>
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
//import css
import "./assets/css/style.css";
export default {
  name: "App",
  components: {
    navBar,
    bottomBar,
  },
  data() {
    return {
      companyName: "竹南機場接送",
      page: ["竹南機場接送", "竹南九人座機場接送", "聯絡我們"],
      pageLink: [
        "index.html",
        "./pages/airportTrans.html",
        "./pages/contact.html",
      ],
    };
  },
  props: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
