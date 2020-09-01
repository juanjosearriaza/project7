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
            lazy-formatter
            :formatter="formatter"
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
            lazy-formatter
            :formatter="formatter"
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
      </b-form>
    </b-card>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
//import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreateaPost",
  components: { Footer },
  data() {
    return {
      title: "",
      description: "",
      image: null,
      hasBeenRead: [localStorage.getItem("userId")],
     
    };
  },
  computed: {
    ...mapGetters(["addPostStatus"]),

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

    onUpload(e) {
      try {
        e.preventDefault();
        const fd = new FormData();
        fd.append("image", this.image);
        fd.append("title", this.title);
        fd.append("description", this.description);
        fd.append("hasBeenRead", this.hasBeenRead);
       

        this.addPost(fd).then(() => {
          if (this.addPostStatus == true) {
            this.$swal.fire({
              icon: "success",
              title: "Your post has been created!",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        });
      } catch (err) {
        return err;
      }
    },
    formatter(value) {
      const array = value.toLowerCase().split(" ");
      const firstElement = array[0].charAt(0).toUpperCase() + array[0].slice(1);
      const fullSentence = array.slice(1);
      fullSentence.unshift(firstElement);
      return fullSentence.join(" ");
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
.btn-primary {
  color:#100a0a!important
}
</style>
