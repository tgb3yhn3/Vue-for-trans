<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 footer-navigation">
      <h3>
        <a href="index.html">{{ companyName }}<span></span></a>
      </h3>
      <p class="links">
        <div v-for="(item, index) in page" :key="index">
          <strong> · </strong>
          <a :href= "pageLink[index]" >{{item}}</a>
        </div>
      </p>
      <p class="company-name">{{companyName}} © 2023</p>
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
        "竹南接送租車機場接送服務！我們提供車型與服務，包括五人轎車，機場接送、九人座機場接送。服務地區：苗栗機場接送、竹北機場接送、頭份機場接送、新竹機場接送、竹南機場接送，竹東到機場接送等等，往返桃園機場、松山機場、台中機場清泉崗機場等等接送服務。",
    };
  },
};
</script>
