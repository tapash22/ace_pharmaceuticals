<template>
  <div class="product">
    <div class="container">
      <h2>Products by Icc</h2>
      <div class="row">
        <Productdetails :products="products" />
        <!-- <div class="col-md-3" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="image">
              <img :src="product.image" />
              <h4>{{ product.name }}</h4>
            </div>
            <router-link
              :to="{ name: 'Productdetails', params: { id: product.id } }"
              >Show Details</router-link
            >
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Productdetails from "./Productdetails.vue";
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: " Immuno wall",
          image: require("../../assets/product/immu.png"),
          des: "ImmunoWall® prevents the colonization of the intestinal tract by pathogens, stimulates the immune activity of phagocytic cells, and enhances the action of beneficial bacteria such as lactobacillus and bifidobacterium, creating an immunological wall against diseases. ImmunoWall® also has powerful mycotoxin adsorption properties. It is a premium yeast cell wall fraction, the richest source of gut resistant β-glucans and mannan-oligosaccharides (MOS).",
        },
        {
          id: 2,
          name: " Rumenyeast",
          image: require("../../assets/product/rumi.png"),
          des: "RumenYeast ® is the ideal nutrition for the rumen flora. It stimulates the cellulolytic bacteria activity boosting the rumen’s microflora condition, which will lead to significantly higher milk yield and the improvement on cattle’s general health and welfare. It contains the thickest β-glucans and MOS fractions which will resist the rumen conditions reaching the hindgut with a direct effect on E. Coli and mycotoxin mitigation.",
        },
        {
          id: 3,
          name: " Hilyses",
          image: require("../../assets/product/hil.png"),
          des: "Hilyses®  ​boost the cell multiplication via supplementation of free nucleotides. Therefore it is an essential ingredient for young animals and breeding stock nutrition. Dietary nucleotides have been reportedly beneficial for young animals since they positively influence lipid metabolism, immunity, tissue growth, and overall development. Hilyses® is also a valuable source of yeast functional carbohydrates, β-Glucans​, ​mannan-oligosaccharides, short chain polypeptides, and free amino acids.",
        },
      ],
    };
  },
  components: { Productdetails },
};
</script>

<style scoped>
@import "../../assets/css/Product.css";
</style>