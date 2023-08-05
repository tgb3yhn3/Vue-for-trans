<template>
  <div class="card col-lg-6 mt-3" style="margin: auto; border-radius: 3%">
    <div class=" ">
      <div class="container">
        <div id="carouselExampleCaptions2" class="carousel slide w-100">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          </div>

          <div class="carousel-inner mt-3">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-8 fly-img">
                  <img
                    src="../assets/pictures/small_fly.webp"
                    style="
                      border-radius: 20px 0 0 20px;
                      padding-left: 0;
                      margin-right: 0px;
                    "
                    class="d-block w-100"
                    alt="Airpot-image"
                  />
                </div>
                <div class="col-4">
                  <div class="half-section">
                    <a :href="line">
                      <button
                        type="button"
                        class="btn btn-costume btn-lg h-100 w-100 mb-3"
                        style="
                          border-radius: 0px 20px 0px 0px;
                          /* border-radius: ; */
                          background-color: rgb(87, 190, 55);
                        "
                      >
                        <h4>LINE</h4>
                      </button>
                    </a>
                  </div>
                  <div class="half-section">
                    <a :href="phone">
                      <button
                        type="button"
                        class="btn btn-costume btn-lg h-100 w-100 mb-3"
                        style="
                          border-radius: 0 0 20px 0px;
                          background-color: rgb(44, 42, 47);
                        "
                      >
                        <h3>電話聯絡</h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          class="bi bi-telephone-forward-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-caption d-md-block">
                <h5 style="color: white"></h5>
                <!-- <p>專業的機場接送服務，包括全台大小機場皆可接送。</p> -->
              </div>
            </div>
            <!-- 第二個物件 -->
          </div>
        </div>
      </div>

      <div class="card-body">
        <a :href="facebook">
          <button
            type="button"
            class="btn btn-costume btn-lg h-100 w-100 mb-3"
            style="
              border-radius: 20px;
              /* border-radius: ; */
              background-color: rgb(66 103 178);
            "
          >
            <h4>Facebook</h4>
          </button>
        </a>
        <h5 class="card-title">{{ companyName }}</h5>
        <p class="card-text">
          {{ descripton }}
        </p>
        <u class="card-text weak">
          {{ address }}
        </u>
        <p class="card-text">
          <small class="text-muted">Last updated 1 day ago</small>
        </p>
      </div>

      <!-- <div class="row mb-3">
        <div class="col-6">
          <a :href="line">
            <button
              type="button"
              class="btn btn-costume btn-lg h-100 w-100 mb-3"
              style="border-radius: 10px; background-color: rgb(87, 190, 55)"
            >
              <h3>加入<br />LINE</h3>
            </button>
          </a>
        </div>
        <div class="col-6">
          <a :href="phone">
            <button
              type="button"
              class="btn btn-costume btn-lg h-100 w-100 mb-3"
              style="border-radius: 10px; background-color: rgb(44, 42, 47)"
            >
              <h3>電話聯絡</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-telephone-forward-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "mainCard",
  props: {
    companyName: {
      type: String,
    },
    descripton: {
      type: String,
    },
    address: {
      type: String,
    },
    line: {
      type: String,
    },
    phone: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
};
</script>
<style>
.half-section {
  height: 50%; /* 50% 的高度 */
  /* overflow: auto; 添加滚动条以防止内容溢出 */
}
</style>
