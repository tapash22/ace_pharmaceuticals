<template>
  <div class="side-navbar">
    <nav>
      <ul>
        <li>
          <router-link to="/dashboard">Registration</router-link>
        </li>
        <li><router-link to="/dashboard/productadd">Product</router-link></li>
        <li><router-link to="/dashboard/galleryadd">Gallery</router-link></li>
        <li><router-link to="/dashboard/partneradd">Partner</router-link></li>
        <li>
          <router-link to="/dashboard/storedetails">Upload details</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.side-navbar {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.side-navbar nav {
  width: 15%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: fixed;
  background: #e87461;
}
nav ul {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
nav ul li {
  list-style: none;
  padding: 20px;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
nav ul li:hover {
  background: rgba(0, 0, 0, 0.397);
}
nav ul li a {
  font-size: 1.4rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  text-align: center;
  text-decoration: none;
  color: #000;
}
</style>