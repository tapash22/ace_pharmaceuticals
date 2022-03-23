<template>
  <div class="contact">
    <div class="container">
        <div class="image">
            <img src="../../assets/image/contact.jpg"/>
        </div>
      <div class="row">
        <div class="col-md-5">
      
          <address>
            SEL Huq Skypark,(4th Floor),<br>
            23/2 khizi Road, Block-B,<br>
            Shyamoli, Dhaka-1207.
          </address>
        </div>
        <div class="col-md-2">
          <h1>OR</h1>
        </div>
        <div class="col-md-5">
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
            <li><p>acepharma15@gmail.com</p></li>
            <li><p>+880258156958</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Titan+One&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap');

.contact{
    width: 100%;
    height: 100%;
    padding: 0;
    margin:0;
}
.contact .image{
    width: 100%;
    height: 500px;
    padding: 5px;
    margin: 0;
    background: #fff;
}
.contact .image img{
    width: 100%;
    height: 100%;
    background-position: center;
}
.row{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
}
.row .col-md-5{
    width: 40%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display:block;
}
/* .row .col-md-5 h2{
    width: 100%;
    height: auto;
    font-size: 1.5rem;
    font-weight: 600;
     font-family: "Playfair Display", serif;
     text-align: center;
     padding: 10px;
} */
.row .col-md-5 address{
    padding:40px;
    margin: 0;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
     font-family: "Playfair Display", serif;
     text-align: justify;
}
.row .col-md-2{
    width: 20%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
}
.row .col-md-2 h1{
    font-size: 3rem;
    font-weight: 600;
     font-family: "Playfair Display", serif;
     text-align: center;
     margin-top: 20%;
     padding: 0;
     color: #f9a51a;
}
.row .col-md-5 ul{
    width: 100%;
    height: 100%;
    padding: 10px;
    margin:0;
    display: block;
}
.row .col-md-5 ul li{
    width: 100%;
    height: auto;
    padding: 5px;
    margin: 0;
    list-style:none;
    display: flex;
    justify-content: center;
}
.row .col-md-5  ul li a{
    text-decoration: none;
    padding:5px;
    margin: 0;
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
}
.row .col-md-5  ul li a i{
    font-size: 2rem;
    font-weight: 900;
    color: #000;
    padding: 5px;
}
.row .col-md-5  ul li p{
        font-size: 1.2rem;
    font-weight: 600;
     font-family: "Playfair Display", serif;
     padding: 0;
     margin: 0;
}
</style>