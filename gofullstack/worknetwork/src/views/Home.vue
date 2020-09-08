<template>
  <div id="app">
    <b-container fluid class="mt-3">
      <b-row>
        <Sidemenu
          v-if="user"
          :firstname="user.firstname"
          :lastname="user.lastname"
        ></Sidemenu>

        <div class="col-md-6 scrollbar scrollbar-primary">
          <b-row>
            <Card
              v-for="post in allPosts"
              :id="post.id"
              :userId="post.userId"
              :title="post.title"
              :description="post.description"
              :image="post.image"
              :createdAt="post.createdAt"
              :hasBeenRead="post.hasBeenRead"
              :userLiked="post.userLiked"
              :userDisliked="post.userDisliked"
              :key="post.id"
            ></Card>
          </b-row>
        </div>

        <b-col class="d-none d-sm-block" md="3">
          <img
            class="logo"
            src="../assets/icon-above-font.png"
            alt="logogroupomania"
            style="height:300px; width: 280px"
          />
        </b-col>
      </b-row>
    <Footer :copyright="copyright"></Footer>
    </b-container>
  </div>
</template>

<script>
import Sidemenu from "../components/Sidemenu";

import Card from "../components/Card";
import Footer from "../components/Footer";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: { Sidemenu, Card, Footer },

  mounted() {
    this.loadPosts(), this.loadUsers(), this.loadComments();
  },
  methods: {
    ...mapActions(["loadPosts", "loadUsers", "loadComments"]),
  },

  computed: {
    ...mapGetters(["allPosts", "allUsers", "allComments"]),

    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${currentYear}`;
    },
    user() {
      try {
        const users = this.$store.getters.allUsers;
        return (
          users.find((user) => localStorage.getItem("userId") == user.id) || {
            firstname: null,
            lastname: null,
          }
        );
      } catch (err) {
        return err;
      }
    },
  },
};
</script>

<style lang="scss">
.scrollbar{
    height: 500px;
    overflow-y: scroll;
}
.scrollbar-primary::-webkit-scrollbar {
    width: 1px;
  }
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2f3f5;
}

@media all and (min-width: 768px) and (max-width: 1024px) {
  .logo {
    width: 180px !important;
  }
  .scrollbar{
    height: 900px;
    overflow-y: scroll;
}
.scrollbar-primary::-webkit-scrollbar {
    width: 1px;
  }
}

@media all and (min-width: 480px) and (max-width: 768px) {
  .logo {
    width: 180px !important;
  }
}

@media all and (max-width: 480px) {
  .logo {
    width: 180px !important;
  }
}

</style>
