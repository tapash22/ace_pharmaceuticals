<template>
  <div class="product">
    <div class="container">
      <h2>Products by Basf</h2>
      <div class="row">
        <Productdetails :products="products" />
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
          name: " BioBron",
          image: require("../../assets/product/bio.png"),
          des: "Helps your animals recover after respiratory stress, thanks to expectorant and fluidizing properties of essential oils.Stimulates their feed consumption and general health thanks to plants extracts and C vitamin",
        },
        {
          id: 2,
          name: " Hotlyte",
          image: require("../../assets/product/hot.png"),
          des: "Mineral salts, soluble sugars organic acids and plants extracts.Decrease of water losses and rehydration.Appetite recovery",
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