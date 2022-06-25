<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li>
              <a href="https://www.facebook.com/"
                ><i class="fa fa-facebook" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/"
                ><i class="fa fa-linkedin" aria-hidden="true"></i
              ></a>
            </li>
            <li><p>+880258156958</p></li>
            <li><p>acepharma15@gmail.com</p></li>
          </ul>
        </div>
      </div>
      <div class="row3">
        <div class="col-md-4">
          <h2>Address</h2>
          <address>
            SEL Huq Skypark,(4th Floor),<br />
            23/2 khizi Road, Block-B,<br />
            Shyamoli, Dhaka-1207.
          </address>
        </div>
        <div class="col-md-8">
          <h2>Our Partners</h2>
          <ul>
            <li>
              <router-link to="/icc">ICC</router-link>
            </li>
            <li>
              <router-link to="/orffa">Orffa</router-link>
            </li>
            <li>
              <router-link to="/adifeed">AdiFeed</router-link>
            </li>
            <li>
              <router-link to="/nutritech">Global Nutritech</router-link>
            </li>
            <li>
              <router-link to="/vetneed">Vet Needs</router-link>
            </li>
            <li>
              <router-link to="/sanzyme">Sanzyme Biologics</router-link>
            </li>
            <li>
              <router-link to="/bioarmor">Bio Armor</router-link>
            </li>

            <li>
              <router-link to="/killion">kilco</router-link>
            </li>
            <li>
              <router-link to="/basf">Basf</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row2">
        <p>Developed by Ultrawave.Digital</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.footer .row {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 128, 0, 0.356);
}
.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row .col-md-12 ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.row .col-md-12 ul li {
  padding: 10px;
  margin: 0;
  list-style: none;
}
.row .col-md-12 ul li a {
  text-decoration: none;
  color: #000;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
}
.row .col-md-12 ul li a:hover {
  color: #8bc53f;
}
.row .col-md-12 ul li a i {
  font-size: 2.2rem;
  font-weight: 900;
  color: #000;
  padding: 5px;
  margin: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #f9a51a;
  display: flex;
  justify-content: center;
}
.row .col-md-12 ul li p {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 10px;
  margin: 0;
}
.footer .row3 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  background: rgba(0, 128, 0, 0.63);
}
.row3 .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
}
.row3 .col-md-4 h2 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 10px;
  margin: 0;
}
.row3 .col-md-4 address {
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
  margin-left: 20%;
  padding: 0;
}
.row3 .col-md-8 {
  width: 65%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
}
.row3 .col-md-8 h2 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 10px;
  margin: 0;
}
.row3 .col-md-8 ul {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row3 .col-md-8 ul li {
  list-style: none;
  padding: 5px;
  margin: 0;
}
.row3 .col-md-8 ul li a {
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 0;
  margin: 2px;
  line-height: 50px;
}
.footer .row2 {
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  background: green;
  /* box-shadow: 0 0 10px #f9a51a; */
}
.footer .row2 p {
  font-size: 0.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 0;
  margin: 0;
  color: #f9a51a;
  letter-spacing: 1px;
}
.row .col-md-12 ul .login {
  margin-top: 10px;
}
.row .col-md-12 ul .login a {
  font-size: 1.2rem;
  font-weight: 6000;
  font-family: "Playfair Display", serif;
  color: #8bc53f;
}

@media only screen and (max-width: 436px) {
  .footer {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .footer .container {
    padding: 0;
    margin: 0;
  }
  .footer .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: rgba(0, 128, 0, 0.356);
  }
  .row .col-md-12 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .row .col-md-12 ul {
    width: 100%;
    height: 100%;
    display: block;
    padding: 0;
    margin: 0;
  }
  .row .col-md-12 ul li {
    padding: 5px;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
  }
  .row .col-md-12 ul li a {
    text-decoration: none;
    color: #000;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
  }
  .row .col-md-12 ul li a:hover {
    color: #8bc53f;
  }
  .row .col-md-12 ul li a i {
    font-size: 2.2rem;
    font-weight: 900;
    color: #000;
    padding: 5px;
    margin: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #f9a51a;
    display: flex;
    justify-content: center;
  }
  .row .col-md-12 ul li p {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 2px;
    margin: 0;
  }
  .footer .row3 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
    background: rgba(0, 128, 0, 0.63);
  }
  .row3 .col-md-4 {
    width: 100%;
    height: 100%;
    padding: 10;
    margin: 0;
    display: block;
  }
  .row3 .col-md-4 h2 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
    padding: 10px;
    margin: 0;
  }
  .row3 .col-md-4 address {
    padding: 10px;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: justify;
    margin-left: 25%;
    padding: 10px;
  }
  .row3 .col-md-8 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
    background: rgba(0, 128, 0, 0.411);
  }
  .row3 .col-md-8 h2 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
    padding: 10px;
    margin: 0;
  }
  .row3 .col-md-8 ul {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .row3 .col-md-8 ul li {
    width: 100%;
    list-style: none;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .row3 .col-md-8 ul li a {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-decoration: underline;
    color: #000;
    padding: 0;
    margin: 2px;
    line-height: 20px;
  }
  .footer .row2 {
    width: 100%;
    height: auto;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
    background: green;
  }
  .footer .row2 p {
    font-size: 0.8rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 0;
    margin: 0;
    color: #000000;
    letter-spacing: 1px;
  }
  .row .col-md-12 ul .login {
    margin-top: 10px;
  }
  .row .col-md-12 ul .login a {
    font-size: 1.2rem;
    font-weight: 6000;
    font-family: "Playfair Display", serif;
    color: #8bc53f;
  }
}
</style>