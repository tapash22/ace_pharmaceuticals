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
                ACE PHARMACEUTICALS is a agro based additives company, we are
                focusing on natural products (Prebiotics, Essential oil,
                Phytogenic, coccidiostat etc) and hygenic products for
                Poultry,Fish and Cattle.
              </p>
            </div>
            <div class="card">
              <p>
                ACE PHARMACEUTICALS is a agro based additives company, we are
                focusing on natural products (Prebiotics, Essential oil,
                Phytogenic, coccidiostat etc) and hygenic products for
                Poultry,Fish and Cattle.
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
              <h2>Mission</h2>
            </div>
            <div class="card-body">
              <p>
                To be one of the world's leading and most admired pharmaceutical
                companies in the global Generics industry. Our holistic approach
                is to ensure best performing feed products at an affordable
                price. We view ourselves as partners with the feed producers,
                feed nutritionist, farmers, livestock professionals & all other
                customers.To focus on New and Novel Drug Deliveries with an eye
                on patents.
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
                Our vision is to be established as the best pharmaceutical
                company in Bangladesh, in terms of expertise, innovation and
                responsible entrepreneurship, while returning value to our
                stakeholders to be highly ranked by healthcare professionals for
                our expertise and accountability, as well as for the high
                quality of our products and services.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2>Core Value</h2>
            </div>
            <div class="card-body">
              <p>
                Our commitment to business ethics, fairness, honesty and
                transparency is equally important to us, as is to achieving
                business success. At the end of each day, we want to be proud
                not only for the goals we have achieved, but also for the way we
                have achieved them.
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
  margin-top: 110px;
}
.home h1 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  color: #000;
  padding: 15px;
  margin: 0;
  background: #fff;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #fff;
}
.row .col-md-12 {
  width: 100%;
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
  padding: 0;
  margin: 0;
}
.home .row1 {
  width: 100%;
  margin: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  background: #fff;
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
  margin: 0;
  display: flex;
  background: #fff;
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
  padding: 0;
  margin: 0;
  display: flex;
  background: #fff;
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
  border-bottom: 10px solid greenyellow;
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

@media only screen and (max-width: 436px) {
  .home {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 100px;
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
  .home .container {
    padding: 0;
    margin: 0;
    background: #fff;
  }
  .home .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .row .col-md-12 {
    width: 100%;
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
    padding: 0;
    margin: 0;
  }
  .home .row1 {
    widows: 100%;
    margin: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .home .row1 .col-md-4 {
    width: 100%;
    height: 300px;
    padding: 10px;
    margin: 0;
  }
  .home .row1 .col-md-8 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .home .row1 .col-md-8 .intro {
    width: 100%;
    height: 100px;
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
    padding: 10px;
    margin: 0;
  }
  .home .row1 .col-md-8 .box {
    width: 100%;
    height: auto;
    padding: 20px;
    margin: 0;
    display: block;
  }
  .home .row1 .col-md-8 .box .card {
    width: 100%;
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
    widows: 100%;
    height: 100%;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
  }
  .home .row2 h2 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: justify;
    text-align: center;
  }
  .home .row2 .col-md-4 {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .home .row2 .col-md-4 .card {
    width: 90%;
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
    widows: 100%;
    height: 100%;
    padding: 5px;
    margin: 0;
    display: block;
  }
  .home .row3 .col-md-4 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 5px;
  }
  .home .row3 .col-md-4 .card {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    background: #fff;
    border-bottom: 10px solid greenyellow;
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
}
</style>