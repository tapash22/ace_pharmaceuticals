<template>
  <div class="about">
    <div class="container">
      <h1>About Us</h1>
      <div class="row2">
        <div class="col-md-6">
          <div class="box">
            <div class="image">
              <img src="../../assets/employe/a.png" />
              <h2>Md. Mostafa Alam</h2>
            </div>
            <div class="details">
              <h4>CEO</h4>
              <h5>drmostafaalam@gmail.com</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi odit quidem in consequuntur neque sequi provident,
                nesciunt ratione magni odio? Velit dignissimos voluptatibus
                recusandae quam odit dolorum assumenda vitae magnam.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="image">
              <img src="../../assets/employe/1.png" />
              <h2>Kbd. Ahmed Tarik Iqbal</h2>
            </div>
            <div class="details">
              <h4>ED</h4>
              <h5>kbdtarik26@yahoo.com</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi odit quidem in consequuntur neque sequi provident,
                nesciunt ratione magni odio? Velit dignissimos voluptatibus
                recusandae quam odit dolorum assumenda vitae magnam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1>Our Goal</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2>Mission</h2>
            </div>
            <div class="card-body">
              <p>
                To be one of the world's leading and most admired pharmaceutical
                companies in the global Generics industry. Our holistic approach
                is to ensure best performing feed products at an affordable
                price. We view ourselves as partners with the feed producers,
                feed nutritionist, farmers, livestock professionals & all other
                customers.To focus on New and Novel Drug Deliveries with an eye
                on patents.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2>Vission</h2>
            </div>
            <div class="card-body">
              <p>
                Our vision is to be established as the best pharmaceutical
                company in Bangladesh, in terms of expertise, innovation and
                responsible entrepreneurship, while returning value to our
                stakeholders to be highly ranked by healthcare professionals for
                our expertise and accountability, as well as for the high
                quality of our products and services.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h2>Core Value</h2>
            </div>
            <div class="card-body">
              <p>
                Our commitment to business ethics, fairness, honesty and
                transparency is equally important to us, as is to achieving
                business success. At the end of each day, we want to be proud
                not only for the goals we have achieved, but also for the way we
                have achieved them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1>Our Team members</h1>
      <div class="row3">
        <div class="col-md-3" v-for="employe in employes" :key="employe.id">
          <div class="card">
            <div class="card-header">
              <img :src="employe.image" />
            </div>
            <div class="card-body">
              <h4>{{ employe.name }}</h4>
              <p>{{ employe.designation }}</p>
              <p>{{ employe.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employes: [
        {
          id: 1,
          name: "Dr. K.M. Ehasanul Islam",
          image: require("../../assets/employe/b.png"),
          designation: "Marketing Manager",
          email: "dr.ehasanul@gmail.com",
        },
        {
          id: 2,
          name: "Md. Tariqul Islam ",
          image: require("../../assets/employe/2.png"),
          designation: "Sr. Executive ",
          email: "mdtariqul300689@gmail.com",
        },
        {
          id: 3,
          name: "Md. Rabiul Awal ",
          image: require("../../assets/employe/3.png"),
          designation: "Assistant Sales Manager ",
          email: "awal.bau11@gmail.com",
        },
        {
          id: 4,
          name: "Md. Tashiqul Alam  ",
          image: require("../../assets/employe/4.png"),
          designation: "Assistant Sales Manager ",
          email: "tashiq87@gmail.com",
        },
      ],
    };
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Titan+One&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");

.about {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 110px;
}
.about h1 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  color: #f9a51a;
  padding: 10px;
  margin: 0;
  background: #fff;
}
.about .row2 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  background: #fff;
}
.about .row2 .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.about .row2 .col-md-6 .box {
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
  display: flex;
}
.about .row2 .col-md-6 .box:hover {
  box-shadow: 0 0 10px #f9a51a;
}
.about .row2 .col-md-6 .box .image {
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid #f9a51a;
}
.about .row2 .col-md-6 .box .image img {
  width: 100%;
  height: 85%;
  /* object-fit: cover; */
  background-position: center;
}
.about .row2 .col-md-6 .box .image h2 {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 10px;
  margin: 0;
  text-align: center;
}
.about .row2 .col-md-6 .box .details {
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
  border: 1px solid #f9a51a;
}
.about .row2 .col-md-6 .box .details h4 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 5px;
  margin: 0;
  text-align: center;
  background: #f9a51a;
}
.about .row2 .col-md-6 .box .details h5 {
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 10px;
  margin: 0;
  text-align: center;
}
.about .row2 .col-md-6 .box .details p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 10px;
  margin: 0;
  text-align: justify;
}
.about .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  margin: 0;
  display: flex;
  justify-content: center;
}
.about .row .col-md-4 {
  width: 32%;
  height: 100%;
  padding: 0;
  margin: 5px;
}
.about .row .col-md-4 .card {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: #fff;
  border-bottom: 5px solid greenyellow;
}
.about .row .col-md-4 .card:hover {
  box-shadow: 0 0 10px greenyellow;
  cursor: pointer;
}
.about .row .col-md-4 .card .card-header {
  width: 100%;
  height: 30%;
  padding: 5px;
  margin: 0;
  background: #fff;
  border: 1px solid #f9a51a;
}
.about .row .col-md-4 .card .card-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
}
.about .row .col-md-4 .card .card-body {
  width: 100%;
  height: 70%;
  padding: 10px;
  margin: 0;
}
.about .row .col-md-4 .card .card-body p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
}
.about .row3 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  background: #fff;
}
.about .row3 .col-md-3 {
  width: 25%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.about .row3 .col-md-3 .card {
  width: 100%;
  height: 320px;
  padding: 5px;
  margin: 0;
  background: #f9a51a;
}
.about .row3 .col-md-3 .card:hover {
  box-shadow: 0 0 10px #f9a51a;
  cursor: pointer;
}
.about .row3 .card .card-header {
  width: 100%;
  height: 60%;
  padding: 0;
  margin: 0;
  background: #fff;
  border: none;
}
.about .row3 .card .card-header img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  /* object-fit: cover; */
}
.about .row3 .card .card-body {
  width: 100%;
  height: 40%;
  padding: 10px;
  margin: 0;
}
.about .row3 .card .card-body h4 {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
}
.about .row3 .card .card-body p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 5px;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  .about {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 100px;
    background: #fff;
  }
  .about h1 {
    font-size: 1.8rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
    color: #f9a51a;
    padding: 10px;
    margin: 0;
  }
  .about .row2 {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
  }
  .about .row2 .col-md-6 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
  }
  .about .row2 .col-md-6 .box {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
  }
  .about .row2 .col-md-6 .box:hover {
    box-shadow: 0 0 10px #f9a51a;
  }
  .about .row2 .col-md-6 .box .image {
    width: 100%;
    height: 50%;
    padding: 0;
    margin: 0;
    border: 1px solid #f9a51a;
  }
  .about .row2 .col-md-6 .box .image img {
    width: 100%;
    height: 50%;
    /* object-fit: cover; */
    background-position: center;
  }
  .about .row2 .col-md-6 .box .image h2 {
    font-size: 1.3rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 10px;
    margin: 0;
    text-align: center;
  }
  .about .row2 .col-md-6 .box .details {
    width: 100%;
    height: 50%;
    padding: 0;
    margin: 0;
    display: block;
    border: 1px solid #f9a51a;
  }
  .about .row2 .col-md-6 .box .details h4 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 5px;
    margin: 0;
    text-align: center;
    background: #f9a51a;
  }
  .about .row2 .col-md-6 .box .details h5 {
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 10px;
    margin: 0;
    text-align: center;
  }
  .about .row2 .col-md-6 .box .details p {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 10px;
    margin: 0;
    text-align: justify;
  }
  .about .row {
    widows: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .about .row .col-md-4 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 5px;
  }
  .about .row .col-md-4 .card {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    background: #fff;
    border-bottom: 5px solid greenyellow;
  }
  .about .row .col-md-4 .card:hover {
    box-shadow: 0 0 10px greenyellow;
    cursor: pointer;
  }
  .about .row .col-md-4 .card .card-header {
    width: 100%;
    height: 30%;
    padding: 5px;
    margin: 0;
    background: #fff;
    border: 1px solid #f9a51a;
  }
  .about .row .col-md-4 .card .card-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
  .about .row .col-md-4 .card .card-body {
    width: 100%;
    height: 70%;
    padding: 10px;
    margin: 0;
  }
  .about .row .col-md-4 .card .card-body p {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: justify;
  }
  .about .row3 {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
  }
  .about .row3 .col-md-3 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
  }
  .about .row3 .col-md-3 .card {
    width: 100%;
    height: 320px;
    padding: 5px;
    margin: 0;
    background: #f9a51a;
  }
  .about .row3 .col-md-3 .card:hover {
    box-shadow: 0 0 10px #f9a51a;
    cursor: pointer;
  }
  .about .row3 .card .card-header {
    width: 100%;
    height: 60%;
    padding: 0;
    margin: 0;
    background: #fff;
    border: none;
  }
  .about .row3 .card .card-header img {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 0;
    /* object-fit: cover; */
  }
  .about .row3 .card .card-body {
    width: 100%;
    height: 40%;
    padding: 10px;
    margin: 0;
  }
  .about .row3 .card .card-body h4 {
    font-size: 1.3rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
  .about .row3 .card .card-body p {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
    padding: 5px;
    margin: 0;
  }
}
</style>