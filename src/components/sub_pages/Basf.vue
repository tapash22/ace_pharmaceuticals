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
          name: " Balangut LSP",
          image: require("../../assets/product/blan.png"),
          des: "BalanGut® LS provides a unique mixture of naturally occurring monoglycerides of short and medium chain fatty acids.It's main active ingredients of monoglycerides of butyric, caprylic and capric organic acids are delivered via feed and are active throughout the small and large intestine. BalanGut® LS is supporting intestinal health and growth of pultry and swine.Restoration and strengthening of intestinal health Intestinal health resilience Improved livability.Sustained wellbeing.Economic and ecological sustainability",
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