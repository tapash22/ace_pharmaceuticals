<template>
  <div class="products">
    <div class="container">
      <div class="image">
        <img src="../../assets/image/product.jpg" />
      </div>
      <div class="row">
        <div class="col-md-4" v-for="partner in partners" :key="partner.id">
          <a :href="partner.url">
            <div class="card">
              <div class="image">
                <img :src="partner.image" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          id: 1,
          name: "ICC",
          image: require("../../assets/partner/icc.png"),
          url: "/icc",
        },
        {
          id: 2,
          name: "ADIFEED",
          image: require("../../assets/partner/ad.png"),
          url: "/adifeed",
        },
        {
          id: 3,
          name: "BIOARMOR",
          image: require("../../assets/partner/bio.png"),
          url: "/bioarmor",
        },
        {
          id: 4,
          name: "GLOBAL NUTRITECH",
          image: require("../../assets/partner/glo.png"),
          url: "/nutritech",
        },
        {
          id: 5,
          name: "KILLION COMMUNICATIONS CONSULTENCE INC.",
          image: require("../../assets/partner/killion.png"),
          url: "/killion",
        },
        {
          id: 6,
          name: "ORFFA",
          image: require("../../assets/partner/or.png"),
          url: "/orffa",
        },
                {
          id: 7,
          name: "Sanzyme Biologics",
          image: require("../../assets/partner/syn.png"),
          url:"/sanzyme",
        },
        {
          id: 8,
          name: "Vet-Needs",
          image: require("../../assets/partner/vet.png"),
          url: "/vetneed",
        },
        {
          id: 9,
          name: "basf",
          image: require("../../assets/partner/bs.png"),
          url: "/basf",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Titan+One&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");

.products {
  width: 100%;
  height: 100%;
  padding: 0;
  margin:0;
}
.products .image {
  width: 100%;
  height: 500px;
  padding: 5px;
  margin: 0;
  background: #fff;
}
.products .image img {
  width: 100%;
  height: 100%;
  background-position: center;
}
.products .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.products .row .col-md-4 {
  width: 32%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.products .row .col-md-4 a{
    text-decoration: none;
    color: #fff;
    padding:0;
    margin: 0;
}
.products .row .col-md-4 .card {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.products .row .col-md-4 .card .image {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
    background: #8bc53f;
    overflow: hidden;
}
.products .row .col-md-4 .card .image:hover img{
    transform: scale(1.09);
  transition:0.3s transform ease-out;
}
.products .row .col-md-4 .card .image img {
  width: 90%;
  height: 90%;   
  background-position: center;
  transform: scale(1);
  transition:0.5s transform ease-out;
}
</style>

