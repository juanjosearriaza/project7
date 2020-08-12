<template>
  <div class="card mb-3" style="width:100%">
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar class="mr-3"></b-avatar>

      <span v-if="user" class="mr-auto">{{ user.firstname }} {{ user.lastname }}</span>
      <b-badge>Posted {{ createdAt.split("T")[0] }}</b-badge>
    </b-list-group-item>
    <div class="card-body">
      <h5 class="card-title text-left">{{ title }}</h5>
      <p class="card-text text-left">{{ description }}</p>
      <router-link :to="{ name: 'Singlepost', params: { id } }">
        <b-card-img
          :src="image"
          alt="Image"
          class="rounded-0"
          style="width:100%"
        ></b-card-img>
      </router-link>
      <div class="footer">
        <b-form
          
          method="post"
          
        >
          <b-form-input
            v-model="comment"
            class="rounded-pill"
            type="text"
            required
            placeholder="Write a comment"
          ></b-form-input
        ></b-form>
        <b-button @click="onSendComment" pill variant="primary">Send</b-button>
        <router-link :to="{ name: 'Comments', params: { id } }"
          ><b-button pill variant="success">Comments</b-button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  props: ["id", "title", "description", "image", "userId", "createdAt"],
  data() {
    return {
      comment: "",
      //id:"",
    };
  },
  computed: {
    postId() {
      const posts = this.$store.getters.allPosts;

      return posts.find((post) => this.id == post.id).id
    },
    user() {
      const users = this.$store.getters.allUsers;

      return users.find((user) => this.userId == user.id) || {firstname: null, lastname: null}; 
    },
  },
  methods: {
    ...mapActions(["addComment"]),

    onSendComment() {
      this.addComment({comment: this.comment, postId: this.postId});
    },
  },
};
</script>

<style scoped>
.footer {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
form {
  width: 80%;
}
button {
  margin-left: 10px;
}
</style>
