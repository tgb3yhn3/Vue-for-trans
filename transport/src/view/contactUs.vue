<template>
  <div class="card mb-3" style="max-width: 70%; margin: auto">
    <div class="row g-0">
      <div class="col-sm-5">
        <div class="container">
          <div id="carouselExampleCaptions" class="carousel slide w-100">
            <div class="carousel-inner fly-img">
              <div class="carousel-item active">
                <a href="https://line.me/ti/p/xeApvGrPD7"
                  ><img
                    src="../assets/pictures/new-line.png"
                    class="d-block w-100"
                    alt="Line-image"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card-body">
          <h5 class="card-title">{{ companyName }}</h5>
          <p class="card-text">{{ desc1 }}</p>
          <p class="card-text">
            <small class="text-muted">
              {{ desc2 }}
            </small>
          </p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="row g-1">
      <!-- nav-picture -end-->
      <div id="nav-img-block" class="col-sm-11">
        <img
          id="bg-img"
          src="../assets/pictures/journey-g1475a1904_640.jpg"
          alt="pretty journy"
        />
        <span id="bg-text">期待參與您的每次旅程</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contactUs",
  props: {
    companyName: String,
    desc1: String,
    desc2: String,
  },
};
</script>
