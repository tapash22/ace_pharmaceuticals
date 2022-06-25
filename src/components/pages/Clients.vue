<template>
  <div class="clients">
    <Navigation />
    <div class="row">
      <div class="col-md-12">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../../services/Navigation.vue";
import Footer from "../../services/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style scoped>
.clients {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-12 {
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  .clients {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .row {
    widows: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
  .col-md-12 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
}
</style>