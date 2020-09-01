<template>
  
    <b-row>
      <div class="col-md-4 mx-auto my-auto">
        <div class="card mx-auto mt-3">
          <div class="card-body">
            <h5 class="card-title text-left">{{ post.title }}</h5>
            <p class="card-text text-left">{{ post.description }}</p>
            <b-card-img
              :src="post.image"
              alt="Image"
              class="rounded-0"
              style="width:100%"
            ></b-card-img>
            <router-link :to="{ name: 'Modifyapost', params: { postId } }">
              <a href="#" class="btn btn-primary mt-3 float-left">Modify</a>
            </router-link>
            <b-button
              @click="onDelete"
              class="btn btn-danger mt-3 ml-2 float-left"
              >Delete</b-button
            >
          </div>
          <b-alert id="alert" class="mt-3" :show="show"
            >Post deleted successfully!</b-alert
          >
        </div>
      </div>
    </b-row>
 
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Singlepost",
  data() {
    return {
      postId: this.$route.params.id,
      show: false,
    };
  },
  computed: {
    ...mapGetters(["allPosts"]),

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
    ...mapActions(["deletePost"]),

    onDelete() {
      try {
        this.$swal
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
          .then((result) => {
            if (result.value) {
              this.$swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success",
                this.deletePost(this.postId)
              );
            }
          });
      } catch (err) {
        return err;
      }
    },
  },
};
</script>

<style scoped>
#alert {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.btn-primary {
  color:#100a0a!important
}
</style>
