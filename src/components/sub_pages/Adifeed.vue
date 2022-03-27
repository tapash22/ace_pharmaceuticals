<template>
  <div class="product">
    <div class="container">
      <h2>Products by Icc</h2>
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
          name: "Adicox AP",
          image: require("../../assets/product/adi.png"),
          des: "AdiCox® AP to zestaw składników naturalnych (fitoncydów) wspomagający procesy odporności przeciwko infekcjom bakteryjnym oraz pierwotniakowym u zwierząt. Zapewnia utrzymanie równowagi biologicznej i wzmaga czynności układu trawiennego w przypadku infekcji drobnoustrojami patogennymi.",
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