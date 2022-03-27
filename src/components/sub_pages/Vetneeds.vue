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
          name: " Tylophosh FS",
          image: require("../../assets/product/thylo.png"),
          des: "Is active against Mycoplasma and also has activity against wide range of gram +ve Organisms and some gram –ve organisms.For increased rate of weight gain and improved feed efficiency.To aid in control of CRO caused by Mycoplasma gallisepticum.Better hatchability",
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