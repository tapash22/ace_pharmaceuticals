<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <h2>Login Form</h2>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" v-model="form.email" />
              <span class="text-danger" v-if="errors.email">
                {{ errors.email[0] }}
              </span>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                class="form-control"
                type="password"
                v-model="form.password"
              />
              <span class="text-danger" v-if="errors.email">
                {{ errors.password[0] }}
              </span>
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../../apis/User";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    login() {
      // this.$router.push("/dashboard");
      User.login(this.form)
        .then((response) => {
          this.$root.$emit("login", true);
          localStorage.setItem("token", response.data);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 110px;
}
.login .row {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: rgba(61, 160, 36, 0.363);
}
.login .row .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.login .row .col-md-6 form {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.login .row .col-md-6 form h2 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 10px;
  margin: 0;
}
.login .row .col-md-6 form label {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 5px;
  margin: 0;
}
.login .row .col-md-6 form .btn {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  color: #000;
  background: green;
}

@media only screen and (max-width: 436px) {
  .login {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 100px;
  }
  .login .container {
    padding: 0;
    margin: 0;
  }
  .login .row {
    widows: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
    background: rgba(61, 160, 36, 0.363);
  }
  .login .row .col-md-6 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .login .row .col-md-6 form {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .login .row .col-md-6 form h2 {
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
    padding: 10px;
    margin: 0;
  }
  .login .row .col-md-6 form label {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 5px;
    margin: 0;
  }
  .login .row .col-md-6 form .btn {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    color: #000;
    background: green;
  }
}
</style>