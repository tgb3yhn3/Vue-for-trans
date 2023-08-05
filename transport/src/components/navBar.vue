<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #292c2f"
  >
    <div class="container-fluid">
      <!-- <a class="navbar-brand" style="color: #7db345; font-weight: bold">{{
        companyName
      }}</a> -->
      <router-link
        to="/"
        class="navbar-brand"
        style="color: #7db345; font-weight: bold"
      >
        {{ companyName }}
      </router-link>
      <!-- <router-link
        to="/test"
        class="navbar-brand"
        style="color: #7db345; font-weight: bold"
      >
        {{ companyName }}
      </router-link> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(item, index) in page" :key="index">
            <router-link
              class="nav-link"
              style="color: #fff"
              :to="pageLink[index]"
            >
              {{ item }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  props: {
    companyName: String,
    page: Array,
    pageLink: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
