import { createRouter, createWebHistory } from "vue-router";
import mainContent from "../view/mainContent.vue";
// import zhunan from "../view/zhunan.vue";
// import toufen from "../view/toufen.vue";
// import houlong from "../view/houlong.vue";
import contactUs from "../view/contactUs.vue";
import img1 from "../assets/pictures/small_fly.webp"
import img2 from "../assets/pictures/small_car.webp"
import img3 from "../assets/pictures/car (1).webp"
import img4 from "../assets/pictures/car (2).webp"
const companyName = "好望角租車-苗栗機場接送";
const lineURL = "https://line.me/ti/p/xeApvGrPD7";
const phoneURL = "tel:0966237237";
const facebookURL = "http://pili.app/fb/SQCPQUgW";
const imgPath = "../assets/pictures/";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "mainContent",
      props: {
        srcPath: img1,
        line: lineURL,
        phone: phoneURL,
        facebook: facebookURL,
        card: [
          {
            companyName: companyName,
            descripton:
              "機場接送包括，苗栗機場接送、苗栗九人座機場接送，當您抵達機場時，專業的機場接送司機會在指定的地點等候，為您提供安全、快速、準時的機場接送服務，讓您輕鬆往返機場、住家、公司。同時，我們還提供接送行李、提前預訂機場接送等貼心服務，讓您的機場接送更加順利。",
            address:
              "苗栗接送機場服務地區包括：苗栗松山機場接送、苗栗桃園機場接送、苗栗各鄉鎮到機場接送服務",
          },
        ],
      },
      component: mainContent,
      // meta: { transition: "enter" },
    },
    {
      path: "/zhunan",
      // name: "zhunan",
      props: {
        srcPath: img2,
        line: lineURL,
        phone: phoneURL,
        facebook: facebookURL,
        card: [
          {
            companyName: companyName,
            descripton:
              "機場接送包括，竹南機場接送、竹南九人座機場接送，當您抵達機場時，專業的機場接送司機會在指定的地點等候，為您提供安全、快速、準時的機場接送服務，讓您輕鬆往返機場、住家、公司。同時，我們還提供接送行李、提前預訂機場接送等貼心服務，讓您的機場接送更加順利。",
            address:
              "竹南接送機場服務地區包括：竹南松山機場接送、竹南桃園機場接送、竹南各鄉鎮到機場接送服務",
          },
        ],
      },
      component: mainContent,
      // meta: { transition: "enter" },
    },
    {
      path: "/toufen",
      name: "toufen",
      props: {
        srcPath: img3,
        line: lineURL,
        phone: phoneURL,
        facebook: facebookURL,
        card: [
          {
            companyName: companyName,
            descripton:
              "機場接送包括，頭份機場接送、頭份九人座機場接送，當您抵達機場時，專業的機場接送司機會在指定的地點等候，為您提供安全、快速、準時的機場接送服務，讓您輕鬆往返機場、住家、公司。同時，我們還提供接送行李、提前預訂機場接送等貼心服務，讓您的機場接送更加順利。",
            address:
              "頭份接送機場服務地區包括：頭份松山機場接送、頭份桃園機場接送、頭份各鄉鎮到機場接送服務",
          },
        ],
      },
      component: mainContent,
      // meta: { transition: "enter" },
    },
    {
      path: "/houlong",
      name: "houlong",
      props: {
        srcPath: img4,
        line: lineURL,
        phone: phoneURL,
        facebook: facebookURL,
        card: [
          {
            companyName: companyName,
            descripton:
              "機場接送包括，後龍機場接送、後龍九人座機場接送，當您抵達機場時，專業的機場接送司機會在指定的地點等候，為您提供安全、快速、準時的機場接送服務，讓您輕鬆往返機場、住家、公司。同時，我們還提供接送行李、提前預訂機場接送等貼心服務，讓您的機場接送更加順利。",
            address:
              "後龍接送機場服務地區包括：後龍松山機場接送、後龍桃園機場接送、後龍各鄉鎮到機場接送服務",
          },
        ],
      },
      component: mainContent,
      // meta: { transition: "enter" },
    },
    {
      path: "/about",
      name: "about",
      props: {
        companyName: "好望角租車",
        desc1: "好望角租車，提供優質載客服務及實惠的價格。",
        desc2:
          "好望角租車-機場接送服務！我們提供車型與服務，包括：豪華轎車機場接送、休旅車機場接送，九人座機場接送。服務地區：苗栗機場接送、竹南機場接送、頭份機場接送、後龍機場接送、通宵機場接送，造橋機場接送，苑裡機場接送等等，苗栗縣，苗栗市，往返桃園機場接送、松山機場接送、包車旅遊接送、商務洽公接送。",
      },
      component: contactUs,
      meta: { transition: "enter" },
    },
  ],
});
