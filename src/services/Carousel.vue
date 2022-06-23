<template>
  <div class="row">
    <div class="col-md-12 caro">
      <Carousel :items-to-show="1" :autoplay="4000" :wrap-around="true">
        <Slide v-for="slide in products" :key="slide.id">
          <!-- <router-link :to="slide.url"> -->
          <div class="card">
            <img :src="slide.img" />

            <p>{{ slide.title }}</p>
          </div>
          <!-- </router-link> -->
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Aqua",
          img: require("../assets/image/a1.png"),
        },
        {
          id: 2,
          title: "Cattle",
          img: require("../assets/image/c1.png"),
        },
        {
          id: 3,
          title: "Poultry",
          img: require("../assets/image/p1.png"),
        },
      ],
    };
  },

  components: {
    Carousel,
    Slide,
    // Navigation,
  },
};
</script>

<style scoped>
.row {
  widows: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row .car {
  display: none;
}
.row .caro {
  width: 100%;
  height: 250px;
  padding: 5px;
  margin: 0;
  display: block;
}
.row .caro a {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
.row .caro a .card {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
}
.row .caro a .card img {
  widows: 100%;
  height: 90%;
  padding: 0;
  margin: 0;
}
.row .caro .card p {
  width: 100%;
  height: 10%;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  color: #000;
}
</style>