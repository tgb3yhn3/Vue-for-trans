<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 footer-navigation">
      <h3>
        <a href="index.html">{{ companyName }}<span></span></a>
      </h3>

      <div class="links" v-for="(item, index) in page" :key="index">
        <strong> · </strong>
        <a :href="pageLink[index]">{{ item }}</a>
      </div>

      <p class="company-name">{{ companyName }} © 2023</p>
    </div>
    <div class="col-sm-6 col-md-4 footer-contacts">
      <a :href="'tel:' + phone">
        <div>
          <i class="fa fa-phone footer-contacts-icon"></i>
          {{ phone }}
        </div>
      </a>
      <a href="http://pili.app/fb/SQCPQUgW">
        <div>
          <i class="fa fa-facebook footer-contacts-icon"></i>
          {{ companyName }}
        </div>
      </a>
    </div>
    <div class="col-md-4 footer-about">
      <h4>關於公司</h4>
      <p>
        {{ about }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "bottomBar",
  props: {
    companyName: String,
    // phone: String,
    // facebook: String,
    page: Array,
    pageLink: Array,
    // about: String,
  },
  data() {
    return {
      // companyName: "竹南接送租車",
      phone: "0966237237",
      facebook: "竹南機場接送",
      //page: ["機場接送", "九人座機場接送包車旅遊", "聯絡我們"],
      about:
        "好望角租車-機場接送服務！我們提供車型與服務，包括：豪華轎車機場接送、休旅車機場接送，九人座機場接送。服務地區：苗栗機場接送、竹南機場接送、頭份機場接送、後龍機場接送、通宵機場接送，造橋機場接送，苑裡機場接送等等，苗栗縣，苗栗市，往返桃園機場接送、松山機場接送、包車旅遊接送、商務洽公接送。",
    };
  },
};
</script>
