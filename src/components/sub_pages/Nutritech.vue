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
          name: " Aflasorb",
          image: require("../../assets/product/afla.png"),
          des: "AFLASORB® is an all-natural feed additive scientifically proven to adsorb aflatoxins and other mycotoxins. The specially formulated clay-based blend of bentonite/montmorillonite and modified cell wall extract of Saccharomyces cerevisiae creates a synergic effect that makes Aflasorb® a powerful aflatoxin adsorbent.NATURAL. There is no waiting period at slaughter and milking.STABLE TO FEED PROCESSING. Mycotoxin adsorbing capabilities are not affected by high temperatures of pelleting, expander or extruder.PROPERTIES. Availability of minerals, vitamins or medications is not affected by Aflasorb®.AFLASORB® can be used in premixes or complete feeds for poultry, livestock or aquaculture.",
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