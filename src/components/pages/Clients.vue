<template>
  <div id="app">
    <TheNavbar />
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../../services/Navigation.vue";
import Footer from "../../services/Footer.vue";
export default {
  name: "App",
  components: {
    TheNavbar,
    Footer,
  },
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: rgb(238, 234, 234);
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: left;
}
.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row .col-md-10 .box {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 436px) {
  #app {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: rgb(255, 255, 255);
  }
  .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: left;
  }
  .row .col-md-12 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .row .col-md-10 .box {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
  }
}
</style>


