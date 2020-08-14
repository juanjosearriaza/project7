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
        <b-button id="comment" @click="onShowComments" pill variant="success"> {{ rightComment.length }}<i @click="onShowComments" class="far fa-comment-alt"></i></b-button>
        
      </div>
    </div>
    <Comment
              v-show="show"
              v-for="comment in rightComment"
              :id="comment.id"
              :userId="comment.userId"
              :postId="comment.postId"
              :comment="comment.comment"
              :createdAt="comment.createdAt"
              :key="comment.id"
            ></Comment>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Comment from "../components/Comment";

export default {
  name: "Card",
  props: ["id", "title", "description", "image", "userId", "createdAt"],
  components: { Comment },
  data() {
    return {
      comment: "",  
      show: false,    
    };
  },
  computed: {
     ...mapGetters(["allComments"]),

    postId() {
      const posts = this.$store.getters.allPosts;

      return posts.find((post) => this.id == post.id).id
    },
    user() {
      const users = this.$store.getters.allUsers;

      return users.find((user) => this.userId == user.id) || {firstname: null, lastname: null}; 
    },
    rightComment() {
      const comments = this.$store.getters.allComments;

      return comments.filter((comment) => this.id == comment.postId)
    }

  },
  methods: {
    ...mapActions(["addComment", "loadComments"]),

    onSendComment() {
      this.addComment({comment: this.comment, postId: this.postId});
      this.comment = ""
    },

    onShowComments() {
      this.show = !this.show
    }

    
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
#comment {
  display: flex;
}
svg {
  display: flex;
  margin: auto 3px;
}
</style>
