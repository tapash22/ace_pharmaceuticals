<template>
  <div class="navigation">
    <div class="full">
      <nav>
        <a class="brand">
          <img src="../assets/image/ace_logo.png" />
        </a>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li>
            <router-link to="/products">Products</router-link>

            <ul class="ul">
              <li>
                <router-link to="/icc">ICC</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="https://www.iccbrazil.com/en/produtos/immunowall/"
                      target="_blank"
                      >Immunowall
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.iccbrazil.com/en/produtos/rumenyeast/"
                      target="_blank"
                      >Rumen Yeast
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.iccbrazil.com/en/produtos/hilyses/"
                      target="_blank"
                      >Hilyses
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/orffa">Orffa</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="https://orffa.com/products/excential-betakey/"
                      target="_blank"
                      >Excential Beta key
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://orffa.com/products/excential-energy-plus/"
                      target="_blank"
                      >Excential Energy Plus
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://orffa.com/products/excential-butycoat/"
                      target="_blank"
                      >Excential Buty coat
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/adifeed">AdiFeed</router-link>
                <ul class="two">
                  <li>
                    <a href="https://adifeed.pl/fitobiotyki/" target="_blank"
                      >Adicox AP
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/nutritech">Global Nutritech</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="http://www.globalnutritech.com/aflasorb.php"
                      target="_blank"
                      >Aflasorb
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/vetneed">Vet Needs</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="http://vetneedsgroup.com/products/poultry-feed-supplements/thylophos-fs/"
                      target="_blank"
                      >Tylophosh FS
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/sanzyme">SanzymeBiologics</router-link>
                <ul class="two">
                  <li><a href="">Hepatoliv Boost </a></li>
                </ul>
              </li>
              <li>
                <router-link to="/bioarmor">Bio Armor</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="https://bioarmor.com/en/http%3A//bioarmor.com/pig/nutrition/poultry/nutrition/7842-biobron.html"
                      target="_blank"
                      >Biobron Air
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bioarmor.com/en/http%3A//bioarmor.com/pig/nutrition/poultry/nutrition/7859-hot-lyte.html"
                      target="_blank"
                    >
                      Hotlyte
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/killion">Kilco</router-link>
                <ul class="two">
                  <li><a href="">Viroshield </a></li>
                </ul>
              </li>
              <li>
                <router-link to="/basf">BASF</router-link>
                <ul class="two">
                  <li><a href="">Balangut LSP </a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/partners">Partners</router-link>
          </li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li class="login"><router-link to="/login">Login</router-link></li>
        </ul>
      </nav>
    </div>

    <div class="mini">
      <nav>
        <div class="first">
          <a class="brand">
            <img src="../assets/image/ace_logo.png" />
          </a>
          <div class="btn" @click="onClick()">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li>
            <router-link to="/products">Products</router-link>

            <ul class="ul">
              <li>
                <router-link to="/icc">ICC</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="https://www.iccbrazil.com/en/produtos/immunowall/"
                      target="_blank"
                      >Immunowall
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.iccbrazil.com/en/produtos/rumenyeast/"
                      target="_blank"
                      >Rumen Yeast
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.iccbrazil.com/en/produtos/hilyses/"
                      target="_blank"
                      >Hilyses
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/orffa">Orffa</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="https://orffa.com/products/excential-betakey/"
                      target="_blank"
                      >Excential Beta key
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://orffa.com/products/excential-energy-plus/"
                      target="_blank"
                      >Excential Energy Plus
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://orffa.com/products/excential-butycoat/"
                      target="_blank"
                      >Excential Buty coat
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/adifeed">AdiFeed</router-link>
                <ul class="two">
                  <li>
                    <a href="https://adifeed.pl/fitobiotyki/" target="_blank"
                      >Adicox AP
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/nutritech">Global Nutritech</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="http://www.globalnutritech.com/aflasorb.php"
                      target="_blank"
                      >Aflasorb
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/vetneed">Vet Needs</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="http://vetneedsgroup.com/products/poultry-feed-supplements/thylophos-fs/"
                      target="_blank"
                      >Tylophosh FS
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/sanzyme">SanzymeBiologics</router-link>
                <ul class="two">
                  <li><a href="">Hepatoliv Boost </a></li>
                </ul>
              </li>
              <li>
                <router-link to="/bioarmor">Bio Armor</router-link>
                <ul class="two">
                  <li>
                    <a
                      href="https://bioarmor.com/en/http%3A//bioarmor.com/pig/nutrition/poultry/nutrition/7842-biobron.html"
                      target="_blank"
                      >Biobron Air
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bioarmor.com/en/http%3A//bioarmor.com/pig/nutrition/poultry/nutrition/7859-hot-lyte.html"
                      target="_blank"
                    >
                      Hotlyte
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/killion">Kilco</router-link>
                <ul class="two">
                  <li><a href="">Viroshield </a></li>
                </ul>
              </li>
              <li>
                <router-link to="/basf">BASF</router-link>
                <ul class="two">
                  <li><a href="">Balangut LSP </a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/partners">Partners</router-link>
          </li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li class="login"><router-link to="/login">Login</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");

.navigation {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: fixed;
  display: flex;
  z-index: 99;
}
.navigation .full {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
}
.navigation .mini {
  display: none;
}
.full nav {
  background: rgb(253, 253, 253);
  width: 100%;
  height: 110px;
  padding: 0;
  margin: 0;
  z-index: 99;
  box-shadow: 0 0 5px #f9a51a;
  display: flex;
}
.brand {
  width: 30%;
  height: 100px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: left;
}
nav .brand img {
  width: 200px;
  height: 90%;
  padding: 5px;
  margin: 0;
}
nav ul {
  width: 70%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: right;
}
nav ul li {
  list-style: none;
  padding: 5px;
  margin: 10px;
}
nav ul li a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  margin: 0;
  padding: 0;
  line-height: 60px;
  color: #000;
}
nav ul li a:hover,
nav ul li a.router-link-exact-active {
  border-bottom: 2px solid #000;
}
nav ul li:hover .ul {
  display: flex;
}
nav ul .ul {
  width: 68%;
  height: 200px;
  display: none;
  position: absolute;
  background: #fffffffa;
  margin: 0;
  padding: 0;
  z-index: 1;
  box-shadow: 0 0 5px #f9a51a;
  left: 16%;
  right: 0;
  top: 90px;
}
nav ul .ul li {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
nav ul .ul li:hover {
  background: rgba(0, 0, 0, 0.418);
}
nav ul .ul li a {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #000;
  border-bottom: none;
}
nav ul .ul li a:hover {
  border-bottom: none;
}
nav ul li:hover .ul li:hover .two {
  display: block;
}

nav ul li .ul li .two {
  width: 180px;
  height: 150px;
  display: none;
  position: absolute;
  background: #fffefef8;
  margin: 0;
  padding: 0;
  z-index: 1;
  top: 50px;
}
nav ul li .ul li .two li {
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  list-style: none;
}
nav ul li .ul li .two li a {
  text-decoration: none;
  border-bottom: none;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  .navigation {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: fixed;
    display: flex;
    z-index: 99;
  }
  .navigation .full {
    display: none;
  }
  .navigation .mini {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
  }
  .navigation .mini nav {
    widows: 100%;
    height: 100px;
    padding: 0;
    margin: 0;
    z-index: 99;
    display: flex;
    background: rgb(97, 150, 80);
  }
  .mini nav .first {
    width: 100%;
    height: 100px;
    padding: 0;
    margin: 0;
    display: flex;
  }
  .mini nav .first .brand {
    width: 60%;
    height: 100%;
    padding: 10px;
    margin: 0;
    text-decoration: none;
  }
  .mini nav .first .brand img {
    width: 150px;
    height: 90%;
  }
  .mini nav .first .btn {
    width: 40%;
    height: 100%;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: left;
  }
  .mini nav .first .btn i {
    font-size: 1.8rem;
    font-weight: 900;
    padding: 10px;
    margin: 0;
  }
  .mini nav ul {
    display: none;
  }
}
</style>