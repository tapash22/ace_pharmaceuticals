<template>
  <div class="gallery">
    <div class="container">
      <h1>Ace Pharmaceuticals Hall</h1>
      <div class="row">
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
export default {
  data() {
    return {
      gallerys: [
        { id: 1, image: require("../../assets/gallery/1.jpg") },
        { id: 2, image: require("../../assets/gallery/3.jpg") },
        { id: 3, image: require("../../assets/gallery/4.jpg") },
        { id: 4, image: require("../../assets/gallery/23.jpg") },
        { id: 5, image: require("../../assets/gallery/11.jpg") },
        { id: 6, image: require("../../assets/gallery/2.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Titan+One&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");

.gallery {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 110px;
}
.gallery h1 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  color: #f9a51a;
  padding: 10px;
  margin: 0;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  background: #fff;
}
.row .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-4 .card {
  width: 320px;
  height: 200px;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.row .col-md-4 .card img {
  width: 100%;
  height: 100%;
  background-position: center;
  transform: scale(1);
  transition: 0.5s transform ease-out;
}
.row .col-md-4 .card:hover img {
  transform: scale(1.09);
  transition: 0.3s transform ease-out;
}

@media only screen and (max-width: 436px) {
  .gallery {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 100px;
  }
  .gallery .container {
    padding: 0;
    margin: 0;
  }
  .gallery h1 {
    font-size: 1.8rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
    color: #f9a51a;
    padding: 10px;
    margin: 0;
  }
  .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
    background: #fff;
  }
  .row .col-md-4 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .row .col-md-4 .card {
    width: 90%;
    height: 200px;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .row .col-md-4 .card img {
    width: 100%;
    height: 100%;
    background-position: center;
    transform: scale(1);
    transition: 0.5s transform ease-out;
  }
  .row .col-md-4 .card:hover img {
    transform: scale(1.09);
    transition: 0.3s transform ease-out;
  }
}
</style>