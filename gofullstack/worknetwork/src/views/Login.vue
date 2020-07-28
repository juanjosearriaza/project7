<template>
  <div>
    <b-card class="mt-5 mx-auto col-12 col-md-4">
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
          <b-button @click="onLogin(form)" class="d-inline-block" variant="primary"
            >Log in</b-button
          >

          <router-link to="/login">Forgot Password?</router-link>
        </div>
      </b-form>
    </b-card>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
//import axios from "axios";
import { mapGetters, mapActions } from "vuex";


export default {
  name: "Login",
  components: { Footer },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),


    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${currentYear}`;
    },
  },
  methods: {


    ...mapActions(["onLogin"]),

        

    /*async onLogin() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          this.form
        );
        console.log(response);
        localStorage.setItem("token", response.data.token)
        this.$router.push("/home");
      } catch (err) {
        console.log(err);
      }
    },*/
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
</style>
