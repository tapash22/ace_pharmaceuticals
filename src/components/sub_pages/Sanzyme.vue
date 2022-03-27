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
          name: " Hepatoliv Boost",
          //   image: require("../../assets/product/ad.png"),
          des: "",
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