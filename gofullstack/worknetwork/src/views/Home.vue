<template>
    <b-container fluid class="mt-0 text-center">
      <TheNavigationBar v-model="searchQuery"></TheNavigationBar>
      <b-row class="mt-3 mx-0">
        <Sidemenu
          v-if="user"
          :firstname="user.firstname"
          :lastname="user.lastname"
        ></Sidemenu>


        <div class="col-md-6 scrollbar scrollbar-primary">
          <!-- <b-row> -->
            <Card
              v-for="post in resultQuery"
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
          <!-- </b-row> -->
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
      <Footer class="mt-4" :copyright="copyright"></Footer>
    </b-container>
</template>

<script>
import Sidemenu from "../components/Sidemenu";
const Card = () => import("../components/Card");
import { mapGetters, mapActions } from "vuex";
import TheNavigationBar from '../components/TheNavigationBar.vue';
import Footer from "../components/Footer";


export default {
  name: "Home",
  components: { Sidemenu, Card, Footer, TheNavigationBar },
  
  data() {
    return {
      searchQuery: null,
    }
  },

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

    resultQuery() {
      if ( this.searchQuery ) {
        return this.allPosts.filter(( post ) => {
          return this.searchQuery.toLowerCase().split(" ").every( word => post.title.toLowerCase().includes(word))
        })
      } else {
        return this.allPosts
      }
    }
  },
};




</script>

<style scoped lang="scss">
.footer {
  position: static;
}
.scrollbar{
    overflow-y: scroll;
}
.scrollbar-primary::-webkit-scrollbar {
    width: 1px;
  }
  
b-container {
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
  .row {
    margin-right: -15px!important;
    margin-left: -15px!important;
  }
  .scrollbar {
    padding-left: 0!important;
    padding-right: 0!important;

  }
}

</style>
