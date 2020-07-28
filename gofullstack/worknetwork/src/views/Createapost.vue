<template>
  <div>
    <b-card class="mt-5 mx-auto col-12 col-md-4">
      <h2>Create a Post</h2>
      <b-form
        action="http://localhost:3000/api/posts"
        method="post"
        enctype="multipart/form-data"
      >
        <b-form-group id="title" label="Title:" label-for="title">
          <b-form-input
            id="title"
            v-model="title"
            type="text"
            required
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="description"
          label="Description:"
          label-for="description"
        >
          <b-form-input
            id="description"
            v-model="description"
            type="text"
            required
            placeholder="Enter description"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="file" label="File:" label-for="file">
          <b-form-file
            v-model="image"
            @change="onFileSelected"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-form-group>
        <div class="d-flex justify-content-center align-items-center">
          <b-button @click="onUpload" class="d-inline-block" variant="primary"
            >Submit</b-button
          >
        </div>
        <b-alert class="mt-3" :show="show">Post created successfully!</b-alert>
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
  name: "CreateaPost",
  components: { Footer },
  data() {
    return {
      title: "",
      description: "",
      image: null,
      show: false,
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${currentYear}`;
    },
  },
  methods: {
    ...mapActions(["addPost"]),

    onFileSelected(event) {
      this.image = event.target.files[0];
    },
    /*async onUpload() {
      const fd = new FormData();
      fd.append("image", this.post.image);
      fd.append("title", this.post.title);
      fd.append("description", this.post.description);
      
      try {
        await axios.post("http://localhost:3000/api/posts", fd);
        this.post.title= "",
        this.post.description= "",
        this.post.image= "",
        this.show = true;
      } catch (err) {
        console.log(err);
      }
    }*/
    onUpload(e) {
      e.preventDefault();
      const fd = new FormData();
      fd.append("image", this.image);
      fd.append("title", this.title);
      fd.append("description", this.description);
      this.addPost(fd);
      this.show = true;
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
</style>
