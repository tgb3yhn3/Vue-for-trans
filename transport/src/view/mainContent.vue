<template>
  <div class="row">
    <div v-for="(item, index) in card" v-bind:key="index">
      <mainCard
        :companyName="item.companyName"
        :descripton="item.descripton"
        :address="item.address"
        :line="line"
        :phone="phone"
        :facebook="facebook"
      ></mainCard>
    </div>
  </div>
  <!-- <mainCard :companyName="companyName" :descripton="descripton"></mainCard> -->
</template>
<script>
import mainCard from "../components/mainCard.vue";
export default {
  name: "mainContent",
  components: {
    mainCard,
  },
  data() {
    return {
      line: "https://line.me/ti/p/xeApvGrPD7",
      phone: "tel:0966237237",
      facebook: "http://pili.app/fb/SQCPQUgW",
      card: [
        {
          companyName: "竹南機場接送",
          descripton:
            "機場接送包括，竹南機場接、竹南九人座機場接送，當您抵達機場時，專業的機場接送司機會在指定的地點等候，為您提供安全、快速、準時的機場接送服務，讓您輕鬆往返機場、住家、公司。同時，我們還提供接送行李、提前預訂機場接送等貼心服務，讓您的旅程更加順利。",
          address:
            "竹南接送機場服務地區包括：竹南松山機場接送，竹南桃園機場接送，苗栗機場接送，包車旅遊",
        },
      ],
    };
  },
};
</script>
