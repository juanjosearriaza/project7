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
            v-model="post.description"
            type="text"
            required
            lazy-formatter
            :formatter="formatter"
            placeholder="Enter description"
          ></b-form-input>
        </b-form-group>
        <div id="preview">
          <b-card-img
            v-if="image"
            :src="image"
            alt="Image"
            class="rounded-0"
            style="width:100%"
          ></b-card-img>
          <b-card-img
            v-else
            :src="post.image"
            alt="Image"
            class="rounded-0"
            style="width:100%"
          ></b-card-img>
        </div>

        <b-form-group class="mt-3" id="file" label="Image:" label-for="file">
          <b-form-file
            @change="onFileSelected"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-form-group>
        <div class="d-flex justify-content-center align-items-center">
          <b-button @click="onUpdate()" class="d-inline-block" variant="primary"
            >Update</b-button
          >
        </div>
      </b-form>
    </b-card>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ModifyaPost",
  components: { Footer },
  data() {
    return {
      postId: this.$route.params.id,
      image: null,
    };
  },
  computed: {
    ...mapGetters(["updatePostStatus"]),

    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${currentYear}`;
    },

    post() {
      try {
        let posts = JSON.parse(localStorage.posts) || [];

        return posts.find((post) => this.postId == post.id);
      } catch (err) {
        return err;
      }
    },
  },

  methods: {
    ...mapActions(["updatePost"]),

    onFileSelected(event) {
      try {
        let file = event.target.files[0];
        this.post.image = file;
        this.image = URL.createObjectURL(file);
      } catch (err) {
        return err;
      }
    },

    onUpdate() {
      try {
        const formData = new FormData();
        formData.set("id", this.post.id);
        formData.append("image", this.post.image);
        formData.set("title", this.post.title);
        formData.set("description", this.post.description);
        this.updatePost(formData).then(() => {
          if (this.updatePostStatus == true) {
            this.$swal.fire({
              icon: "success",
              title: "Your post has been updated!",
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
      try {
        const array = value.toLowerCase().split(" ");
        const firstElement =
          array[0].charAt(0).toUpperCase() + array[0].slice(1);
        const fullSentence = array.slice(1);
        fullSentence.unshift(firstElement);
        return fullSentence.join(" ");
      } catch (err) {
        return err;
      }
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
