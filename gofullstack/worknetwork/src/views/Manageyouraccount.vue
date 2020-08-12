<template>
  <div v-if="user">
    
    <b-card class="mt-3 mx-auto col-12 col-md-4">
      <h2>Manage your account</h2>
      <div class="contactinfo">
        <div class="title">First Name:</div>
        <div>{{ user.firstname }}</div>
        <div class="title">Last Name:</div>
        <div>{{ user.lastname }}</div>
        <div class="title">Email Address:</div>
        <div>{{ user.email }}</div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
          <b-button @click="deleteUser(user.id)" type="submit" class="d-inline-block" variant="danger">Delete Account</b-button>
         
        </div>
    </b-card>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import { mapActions } from "vuex";

//import axios from "axios";

export default {
  name: "Manageyouraccount",
  components: { Footer },
  data() {
    return {
      
      
    };
  },
  
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${currentYear}`;
    },
    user() {
      const users = this.$store.getters.allUsers;

      return users.find((user) => localStorage.getItem("userId") == user.id) || {firstname: null, lastname: null};
    },
  },
  methods: {
    ...mapActions(["deleteUser"])
  }
};
</script>

<style scoped lang="css">
div {
  margin-bottom: 15px;
}
.contactinfo {
  text-align: left;
  margin-top: 20px;
  
}
.title {
  font-weight: bold;
}
.d-flex {
  margin-top: 20px;
}

</style>
