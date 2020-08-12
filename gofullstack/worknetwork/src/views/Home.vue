<template>
  <div id="app">
    <b-container fluid class="mt-3">
      <b-row>
        

          
       <Sidemenu v-if="user" :firstname="user.firstname" :lastname="user.lastname"></Sidemenu>
        
       
        <div class="col-md-6">
          <b-row>
            <Card
              v-for="post in allPosts"
              :id="post.id"
              :userId="post.userId"
              :title="post.title"
              :description="post.description"
              :image="post.image"
              :createdAt="post.createdAt"
              :key="post.id"
            ></Card>
          </b-row>
        </div>

        <b-col class="d-none d-sm-block" md="3">
          <img
            src="../assets/icon-above-font.png"
            style="height:300px;widht:300px"
          />
        </b-col>
      </b-row>
    </b-container>
    <Footer :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Sidemenu from "../components/Sidemenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { mapGetters, mapActions } from "vuex";


export default {
  name: "App",
  components: { 
    Sidemenu,
   Card, Footer },
  
  mounted() {
    this.loadPosts(),
    this.loadUsers()
 
  },
  methods: {
    ...mapActions(["loadPosts", "loadUsers"]),
    
  },

  computed: {
    ...mapGetters(["allPosts", "allUsers"]),
    

    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${currentYear}`;
    },
    user() {
      const users = this.$store.getters.allUsers;

      return users.find((user) => localStorage.getItem("userId") == user.id) || {firstname: null, lastname: null}; 
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2f3f5;
}
</style>
