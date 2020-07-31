<template>
  <b-container fluid class="mt-0">
    <b-row>
      <div class="col-md-4 mx-auto my-auto">
        <div class="card mx-auto mt-3">
          <div class="card-body">
            <h5 class="card-title text-left">{{ post.title }}</h5>
            <p class="card-text text-left">{{ post.description }}</p>
            <b-card-img :src="post.image" alt="Image" class="rounded-0" style="width:100%"></b-card-img>
            <router-link :to="{ name: 'Modifyapost', params:{ postId }}">
              <a href="#" class="btn btn-primary mt-3 float-left">Modify</a>
            </router-link>
            <b-button @click="deletePost(id)" class="btn btn-danger mt-3 ml-2 float-left">Delete</b-button>
            
          </div>
          
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
//import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Singlepost",
  //props: ["id", "title", "description", "image"],
  data() {
    return {
      postId: this.$route.params.id,
          
    };
  },
  computed: {
    ...mapGetters(["allPosts"]),
    
    post() {
      const posts = this.$store.getters.allPosts

      return posts.find((post) => this.postId == post.id)
    }
    
  },
  methods: {
    ...mapActions(["deletePost"]),

    

    /*DeletePost() {
      this.deletePost(this.postId)
      this.show = true
    }*/

    /*async DeletePost() {
      try {
        const postId = this.$route.params.id;
        const response = await axios.delete(
          "http://localhost:3000/api/posts/" + postId
        );
        return (this.post = response.data);
      } catch (err) {
        console.log(err);
      }
    }*/
  },
  /*async created() {
    console.log(this.posts)
    try {
      const postId = this.$route.params.id;
      const response = await axios.get(
        "http://localhost:3000/api/posts/" + postId
      );
      return (this.post = response.data);
    } catch (err) {
      console.log(err);
    }
  }*/
};
</script>

<style scoped></style>
