<template>
  <div class="partners">
    <div class="container">
      <div class="image">
        <img src="../../assets/image/partner.jpg" />
      </div>
      <div class="row">
        <div class="col-md-4" v-for="partner in partners" :key="partner.id">
          <div class="box">
            <div class="image">
              <img :src="partner.image" />
            </div>
            <div class="demo">
              <h3>{{ partner.name }}</h3>
              <p>
                {{ partner.details }}
              </p>
              <a :href="partner.url" target="_blank">Details...</a>
            </div>
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
      partners: [
        {
          id: 1,
          name: "ICC",
          image: require("../../assets/partner/icc.png"),
          url: "https://www.iccbrazil.com/en/",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
        {
          id: 2,
          name: "ADIFEED",
          image: require("../../assets/partner/ad.png"),
          url: "https://adifeed.pl/",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
        {
          id: 3,
          name: "BIOARMOR",
          image: require("../../assets/partner/bio.png"),
          url: "https://bioarmor.com/en/",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
        {
          id: 4,
          name: "GLOBAL NUTRITECH",
          image: require("../../assets/partner/glo.png"),
          url: "http://www.globalnutritech.com/",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
        {
          id: 5,
          name: "Basf Pharma",
          image: require("../../assets/partner/bs.png"),
          url: "https://nutrition.basf.com/global/en/animal-nutrition.html",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
        {
          id: 6,
          name: "KILCO",
          image: require("../../assets/partner/kilion.png"),
          url: "https://www.kersia-group.com/uk",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
        {
          id: 7,
          name: "Sanzyme Biologics",
          image: require("../../assets/partner/syn.png"),
          url: "https://www.sanzymebiologics.com/",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
        {
          id: 8,
          name: "Vet-needs",
          image: require("../../assets/partner/vet.png"),
          url: "http://vetneedsgroup.com/",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
        {
          id: 9,
          name: "ORFFA",
          image: require("../../assets/partner/or.png"),
          url: "https://orffa.com/",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic accusantium excepturi deserunt nam",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Titan+One&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");

.partners {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.partners .image {
  width: 100%;
  height: 500px;
  padding: 5px;
  margin: 0;
  background: #fff;
}
.partners .image img {
  width: 100%;
  height: 100%;
  background-position: center;
  box-shadow: 0 0 5px #f9a51a;
}
.partners .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.partners .row .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.partners .row .col-md-4 .box {
  width: 100%;
  height: 350px;
  padding: 0;
  margin: 10px;
  display: block;
  border: 2px solid #f9a51a;
  /* border: 2px solid none; */
  transition: 0.5s border ease-out;
}
.partners .row .col-md-4 .box:hover {
  box-shadow: 0 0 10px #f9a51a;
  transition: 0.2s border ease-out;
}
.col-md-4 .box .image {
  width: 100%;
  height: 50%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.col-md-4 .box .image img {
  width: 100%;
  height: 100%;
  background-position: center;
}
.col-md-4 .box .demo {
  width: 100%;
  height: 50%;
  padding: 0;
  margin: 0;
  display: block;
}
.col-md-4 .box .demo h3 {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  padding: 5px;
  margin: 0;
}
.col-md-4 .box .demo p {
  width: 100%;
  padding: 10px;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
}
.col-md-4 .box .demo a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #000;
  padding: 5px;
  margin: 0;
}
</style>