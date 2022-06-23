<template>
  <div class="dashboard">
    <nav>
      <a href="#">
        <img src="../../assets/image/ace_logo.png" />
      </a>
      <ul>
        <li><a href="#">Name</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>

    <div class="row">
      <div class="col-md-2">
        <SideNavbar />
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from "../storage/SideNavbar.vue";

export default {
  components: {
    SideNavbar,
  },
};
</script>

<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.dashboard nav {
  width: 100%;
  height: 120px;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  background: #e87461;
}
nav a {
  width: 30%;
  height: 90px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  text-decoration: none;
}
nav a img {
  width: 200px;
  height: 100%;
  padding: 0;
  margin: 0;
}
nav ul {
  width: 70%;
  height: 100%;
  padding: 20px;
  margin: 0;
  display: flex;
  justify-content: right;
}
nav ul li {
  padding: 10px;
  margin: 5px;
  list-style: none;
}
nav ul li a {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  text-align: center;
  text-decoration: none;
  color: #000;
}
.dashboard .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.dashboard .row .col-md-2 {
  background: #e87461;
  width: 20%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.dashboard .row .col-md-10 {
  width: 80%;
  height: 100%;
  margin: 0;
  padding: 10px;
}
</style>