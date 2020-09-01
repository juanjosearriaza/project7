<template>
  <div>
    <b-card class="mt-3 mx-auto col-12 col-md-4">
      <h2>Sign up</h2>
      <b-form @submit.stop.prevent="onSignup" enctype="multipart/form-data">
        <b-form-group id="firstname" label="First Name:" label-for="firstname">
          <b-form-input
            id="firstname"
            v-model="$v.form.firstname.$model"
            type="text"
            required
            lazy-formatter
            :formatter="formatter"
            placeholder="Enter your First Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="lastname" label="Last Name:" label-for="lastname">
          <b-form-input
            id="lastname"
            v-model="$v.form.lastname.$model"
            type="text"
            required
            lazy-formatter
            :formatter="formatter"
            placeholder="Enter your Last Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="email" label="Email address:" label-for="email">
          <b-form-input
            id="email"
            v-model="$v.form.email.$model"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Password:" label-for="password">
          <b-form-input
            id="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <p>
          Strong passwords need to have a letter, a number, a special character,
          and be more than 8 characters and less than 12 long.
        </p>
        <b-form-group
          id="confirmPassword"
          label="Confirm Password:"
          label-for="confirmPassword"
        >
          <b-form-input
            id="confirmPassword"
            v-model="$v.form.confirmpassword.$model"
            :state="validateState('confirmpassword')"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
          <p class="error" v-if="!$v.form.confirmpassword.sameAsPassword">
            The passwords do not match.
          </p>
        </b-form-group>
        <div class="d-flex justify-content-center align-items-center">
          <b-button type="submit" class="d-inline-block" variant="primary"
            >Sign up</b-button
          >
          <p class="login">
            Already registered?
            <router-link to="/">Log in</router-link>
          </p>
        </div>
        <b-alert class="mt-3" :show="show"
          >You have successfully sign up, please log in now!</b-alert
        >
      </b-form>
    </b-card>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import axios from "axios";
import { required, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Signup",
  components: { Footer },
  data() {
    return {
      show: false,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
    };
  },
  validations: {
    form: {
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      email: {
        required,
      },

      password: {
        required,
        strongPassword(password) {
          return (
            /[a-z]/.test(password) && // checks for a-z
            /[0-9]/.test(password) && // checks for 0-9
            /\W|_/.test(password) && // checks for special char
            password.length >= 8 &&
            password.length <= 12
          );
        },
      },
      confirmpassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${currentYear}`;
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    formatter(value) {
      return value
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");
    },
    async onSignup() {
      this.$v.form.$touch();
      try {
        if (this.$v.form.$anyError) {
          return;
        } else {
          await axios.post("http://localhost:3000/api/auth/signup", this.form);
          this.show = true;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped lang="css">
form {
  text-align: left;
}
p {
  display: inline-block;
  margin-top: -10px;
  margin-left: 5px;
  font-size: 14px;
}
.error {
  color: red;
}

.login {
  display: inline-block;
  margin-top: 16px;
  margin-left: 10px;
  font-size: 14px;
}
.btn-primary {
  color:#100a0a!important
}
</style>
