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
          name: " Excential Beta key",
          image: require("../../assets/product/beta-key.png"),
          des: "Betaine is the trimethyl derivate of the amino acid glycine and a widely used additive for animal diets.Very positive effects are reported of betaine on feed digestibility and carcass quality. Betaine is used in diets for several animal species like broilers, turkeys, pigs and aqua feeds.",
        },
        {
          id: 2,
          name: " Excential Energy Plus",
          image: require("../../assets/product/energy.png"),
          des: "A nutritional emulsifier can be used to improve fat digestibility and thus improve the energy efficiency in animal diets. Due to its high energy density, fats and oils are important energy sources in feed formulation, but these raw materials also have a high cost. Improving the energy efficiency is of high interest from an economical point of view. This will result in a lower feed cost and contribute to a more economical and sustainable animal production.",
        },
        {
          id: 3,
          name: " Excential Buty coat",
          image: require("../../assets/product/buty.png"),
          des: "Butyrate is known to be an important energy source for intestinal epithelial cells and has multiple beneficial effects on vital intestinal function. Butyrate is naturally produced in digestive tract of animals. For optimal support, additionally butyrate can be added to the diet. However, unprotected butyrate will be directly absorbed in the first part of the digestive tract before reaching the large intestine. Excential Butycoat is Micro-encapsulation of butyrate, which results in the targeted release of butyrate over the whole digestive tract thereby increasing the mode of action to scope of activities at various gut levels as well as effectiveness per unit active ingredient. Just as importantly, correct coating reduces the typical unpleasant smell of butyrate.",
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