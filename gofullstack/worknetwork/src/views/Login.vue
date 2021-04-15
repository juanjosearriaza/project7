<template>
  <b-container fluid class="p-0">
    <TheNavigationBar></TheNavigationBar>
    <b-row class="mt-3 mb-3">
      <b-col>
        <b-img
          center
          :src="require(`../assets/icon-above-font.png`)"
          alt="logo groupomania"
        ></b-img>
      </b-col>
    </b-row>

    <b-card class="mx-auto col-12 col-md-4">
      <h2>Log in</h2>
      <b-form
        action="http://localhost:3000/api/auth/login"
        method="post"
        enctype="multipart/form-data"
      >
        <b-form-group id="email" label="Email address:" label-for="email">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Password:" label-for="password">
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-center align-items-center">
          <b-button
            @click="onCheckLogin"
            class="d-inline-block"
            variant="primary"
            >Log in</b-button
          >

          <router-link to="/login">Forgot Password?</router-link>
        </div>
      </b-form>
    </b-card>

    <b-row>
      <b-col>
        <Footer :copyright="copyright"></Footer>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Footer from "../components/Footer";
import TheNavigationBar from "../components/TheNavigationBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  components: { Footer, TheNavigationBar },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "isLoggedIn"]),

    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${currentYear}`;
    },
  },
  methods: {
    ...mapActions(["onLogin"]),

    onCheckLogin() {
      try {
        this.onLogin(this.form).then(() => {
          if (this.isLoggedIn == false) {
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text:
                "Incorrect combination of email and password, please try again!",
            });
          }
        });
      } catch (err) {
        return err;
      }
    },
  },
};
</script>

<style scoped lang="css">
form {
  text-align: left;
}

a {
  margin-left: 10px;
}
.btn-primary {
  color: #100a0a !important;
}
h2 {
  text-align: center;
}
img {
  height: 100px;
  width: 100px;
}
</style>
