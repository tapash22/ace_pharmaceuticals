<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="image">
            <img src="../../assets/image/1.jpg" />
          </div>
        </div>
      </div>
      <!-- welcome -->
      <div class="row1">
        <div class="col-md-4">
          <Carousel />
        </div>
        <div class="col-md-8">
          <div class="intro">
            <h2>Welcome to Ace Pharmaceuticals</h2>
          </div>
          <div class="box">
            <div class="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam fuga similique, eligendi possimus voluptate dignissimos
                exercitationem itaque libero molestias quia soluta ipsam,
                pariatur velit unde et obcaecati voluptatum modi iure.
              </p>
            </div>
            <div class="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam fuga similique, eligendi possimus voluptate dignissimos
                exercitationem itaque libero molestias quia soluta ipsam,
                pariatur velit unde et obcaecati voluptatum modi iure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- goal -->
      <h1>Our Goal</h1>
      <div class="row3">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2>History</h2>
            </div>
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                quae harum quibusdam quasi pariatur culpa repudiandae at nulla
                laborum. Voluptates iusto sequi odit pariatur, expedita omnis
                voluptas laboriosam architecto repellat.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2>Mission</h2>
            </div>
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                quae harum quibusdam quasi pariatur culpa repudiandae at nulla
                laborum. Voluptates iusto sequi odit pariatur, expedita omnis
                voluptas laboriosam architecto repellat.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2>Vision</h2>
            </div>
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                quae harum quibusdam quasi pariatur culpa repudiandae at nulla
                laborum. Voluptates iusto sequi odit pariatur, expedita omnis
                voluptas laboriosam architecto repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- gallery -->
      <h1>Gallery</h1>
      <div class="row2">
        <div class="col-md-4" v-for="gallery in gallerys" :key="gallery.id">
          <div class="card">
            <img :src="gallery.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../../services/Carousel.vue";

export default {
  data() {
    return {
      gallerys: [
        { id: 1, image: require("../../assets/gallery/23.jpg") },
        { id: 2, image: require("../../assets/gallery/11.jpg") },
        { id: 5, image: require("../../assets/gallery/2.jpg") },
      ],
    };
  },
  components: {
    Carousel,
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Titan+One&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");

.home {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.home h1 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  color: #000;
  padding: 5px;
  margin: 0;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row .col-md-12 {
  padding: 0;
  margin: 0;
}
.row .col-md-12 .image {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
}
.row .col-md-12 .image img {
  width: 100%;
  height: 100%;
}
.home .row1 {
  width: 100%;
  margin: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.home .row1 .col-md-4 {
  width: 33%;
  height: 300px;
  padding: 5px;
  margin: 0;
}
.home .row1 .col-md-8 {
  width: 65%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.home .row1 .col-md-8 .intro {
  width: 100%;
  height: 50px;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.home .row1 .col-md-8 .intro h2 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
}
.home .row1 .col-md-8 .box {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.home .row1 .col-md-8 .box .card {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 0;
  border: none;
}
.home .row1 .col-md-8 .box .card p {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
  padding: 10px;
}
.home .row2 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
}
.home .row2 h2 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
  text-align: center;
}
.home .row2 .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row2 .col-md-4 .card {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.row2 .col-md-4 .card img {
  width: 100%;
  height: 100%;
  background-position: center;
  transform: scale(1);
  transition: 0.5s transform ease-out;
}
.row2 .col-md-4 .card:hover img {
  transform: scale(1.09);
  transition: 0.3s transform ease-out;
}
.home .row3 {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.home .row3 .col-md-4 {
  width: 32%;
  height: 100%;
  padding: 0;
  margin: 5px;
}
.home .row3 .col-md-4 .card {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: #fff;
  border: none;
}
.home .row3 .col-md-4 .card:hover {
  box-shadow: 0 0 10px greenyellow;
  cursor: pointer;
}
.home .row3 .col-md-4 .card .card-header {
  width: 100%;
  height: 30%;
  padding: 5px;
  margin: 0;
  background: #fff;
  border: 1px solid #f9a51a;
}
.home .row3 .col-md-4 .card .card-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
}
.home .row3 .col-md-4 .card .card-body {
  width: 100%;
  height: 70%;
  padding: 10px;
  margin: 0;
}
.home .row3 .col-md-4 .card .card-body p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
}
</style>