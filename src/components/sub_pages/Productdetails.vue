<template>
  <div class="productdetails">
    <div class="container">
      <div class="row" v-for="product in products" :key="product.id">
        <div class="col-md-4">
          <div class="image">
            <img :src="product.image" />
          </div>
        </div>
        <div class="col-md-8">
          <div class="info">
            <h2>{{ product.name }}</h2>
          </div>
          <div class="des">
            <p>
              {{ product.des }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products"],
};
</script>

<style scoped>
.productdetails {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.productdetails .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.productdetails .row .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.productdetails .row .col-md-4 .image {
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 0;
  display: block;
  overflow: hidden;
  border: 2px solid #f9a51a;
}
.productdetails .row .col-md-4 .image img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  transform: scale(1);
  transition: 0.5s transform ease-out;
}
.productdetails .row .col-md-4 .image:hover img {
  transform: scale(1.09);
  transition: 0.3s transform ease-out;
}
.productdetails .row .col-md-8 {
  width: 65%;
  height: 100%;
  padding: 20px;
  margin: 0;
}
.productdetails .row .col-md-8 .info {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.productdetails .row .col-md-8 .info h2 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
}
.productdetails .row .col-md-8 .des {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.productdetails .row .col-md-8 .des p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 10px;
  margin: 0;
  text-align: justify;
}
</style>