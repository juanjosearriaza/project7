<template>
  <div>
    <b-card class="mt-3 mx-auto col-12 col-md-4">
      <h2>Sign up</h2>
      <b-form action="http://localhost:3000/api/auth/signup" method="post" enctype="multipart/form-data">
        <b-form-group id="firstname" label="First Name:" label-for="firstname">
          <b-form-input
            id="firstname"
            v-model="form.firstname"
            type="text"
            required
            placeholder="Enter your First Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="lastname" label="Last Name:" label-for="lastname">
          <b-form-input
            id="lastname"
            v-model="form.lastname"
            type="text"
            required
            placeholder="Enter your Last Name"
          ></b-form-input>
        </b-form-group>
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
          <b-button @click="onSignup" class="d-inline-block" variant="primary">Sign up</b-button>
          <p>
            Already registered?
            <router-link to="/">Log in</router-link>
          </p>
        </div>
      </b-form>
    </b-card>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import axios from "axios"

export default {
  name: "Signup",
  components: {Footer},
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${currentYear}`;
    }
  },
  methods: {

    async onSignup() {
      
      
      try {
        const response = await axios.post("http://localhost:3000/api/auth/signup", this.form);
        console.log(response)

        /*this.form.firstname= "",
        this.form.lastname= "",
        this.form.email= "",
        this.form.password="";*/
      } catch (err) {
        console.log(err);
      }
    },
  }
  };
</script>

<style scoped lang="css">
form {
  text-align: left;
}
p {
  display: inline-block;
  margin-top: 12px;
  margin-left: 8px;
}
</style>