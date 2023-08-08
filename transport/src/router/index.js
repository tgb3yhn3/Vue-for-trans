import { createRouter, createWebHistory } from "vue-router";
import mainContent from "../view/mainContent.vue";
import zhunan from "../view/zhunan.vue";
import toufen from "../view/toufen.vue";
import houlong from "../view/houlong.vue";
import contactUs from "../view/contactUs.vue";

const companyName = "好望角租車-苗栗機場接送";
const lineURL = "https://line.me/ti/p/xeApvGrPD7";
const phoneURL = "tel:0966237237";
const facebookURL = "http://pili.app/fb/SQCPQUgW";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "mainContent",
      props: {
        line: lineURL,
        phone: phoneURL,
        facebook: facebookURL,
        card: [
          {
            companyName: companyName,
            descripton:
              "機場接送包括，苗機場接、苗栗九人座機場接送，當您抵達機場時，專業的機場接送司機會在指定的地點等候，為您提供安全、快速、準時的機場接送服務，讓您輕鬆往返機場、住家、公司。同時，我們還提供接送行李、提前預訂機場接送等貼心服務，讓您的機場接送更加順利。",
            address:
              "苗栗接送機場服務地區包括：苗栗松山機場接送，苗栗桃園機場接送，苗栗各鄉鎮到機場接送服務",
          },
        ],
      },
      component: mainContent,
    },
    {
      path: "/zhunan",
      components: { default: zhunan },
      meta: { transition: "enter" },
    },
    {
      path: "/toufen",
      components: { default: toufen },
      meta: { transition: "enter" },
    },
    {
      path: "/houlong",
      components: { default: houlong },
      meta: { transition: "enter" },
    },
    {
      path: "/about",
      components: { default: contactUs },
      meta: { transition: "enter" },
    },
  ],
});
