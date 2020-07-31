<template>
  <div>
    <b-card class="mt-2 mx-auto col-12 col-md-4">
      <h2>Modify Post</h2>
      <b-form enctype="multipart/form-data">
        <b-form-group id="title" label="Title:" label-for="title">
          <b-form-input
            id="title"
            v-model="post.title"
            type="text"
            required
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="description" label="Description:" label-for="description">
          <b-form-input
            id="description"
            v-model="post.description"
            type="text"
            required
            placeholder="Enter description"
          ></b-form-input>
        </b-form-group>
        <b-card-img :src="post.image" alt="Image" class="rounded-0" style="width:100%"></b-card-img>

        <b-form-group class="mt-3" id="file" label="Image:" label-for="file">
          <b-form-file
            @change="onFileSelected"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-form-group>
        <div class="d-flex justify-content-center align-items-center">
          <b-button @click="onUpdate(post)" class="d-inline-block" variant="primary">Update</b-button>
        </div>
      </b-form>
    </b-card>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
//import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "ModifyaPost",
  components: { Footer },
  data() {
    return {
      postId: this.$route.params.id,
      //file: "",
      //post: {}
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${currentYear}`;
    },

    post() {
      const posts = this.$store.getters.allPosts;

      return posts.find((post) => this.postId == post.id);
    },
  },
  /*async mounted() {
    try {
      const postId = this.$route.params.id;
      const response = await axios.get(
        "http://localhost:3000/api/posts/" + postId
      );
      return (this.post = response.data);
    } catch (err) {
      console.log(err);
    }
  },*/
  methods: {
    ...mapActions(["updatePost"]),

    onFileSelected(event) {
      this.post.image = event.target.files[0];

      //this.post.image = event.target.files[0];
      console.log(this.post);
    },

    onUpdate() {
      const updatedPost = new FormData();
      updatedPost.append("id", this.post.id);
      updatedPost.append("image", this.post.image);
      updatedPost.append("title", this.post.title);
      updatedPost.append("description", this.post.description);
      this.updatePost(updatedPost);
    },
    /*onUpdate() {
      const updatedPost = new FormData();
      updatedPost.append("image", this.post.image);
      updatedPost.append("title", this.post.title);
      updatedPost.append("description", this.post.description);
      this.updatePost(updatedPost);
    }*/
    /*async onUpload() {
      const fd = new FormData();
      fd.append("image", this.post.image);
      fd.append("title", this.post.title);
      fd.append("description", this.post.description);
      
      try {
        const postId = this.$route.params.id
        await axios.put("http://localhost:3000/api/posts/" + postId, fd);
      } catch (err) {
        console.log(err);
      }
    }*/
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