<template>
  <div class="card mb-3" style="width:100%">
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar class="mr-3"></b-avatar>
      <span class="mr-auto">{{ user.firstname }} {{ user.lastname }}</span>
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
      <b-form-input
        v-model="comment"
        class="writeacomment rounded-pill"
        type="text"
        required
        placeholder="Write a comment"
      ></b-form-input>
      <b-button @click="onSendComment" pill variant="primary">Send</b-button>
      <router-link :to="{ name: 'Comments', params: { id } }"
        ><b-button pill variant="success">Comments</b-button></router-link>

      
      
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
      comment:"",      
    };
  },
  computed: {
    user() {
      const users = this.$store.getters.allUsers;

      return users.find((user) => this.userId == user.id);
    },
  },
  methods: {
    ...mapActions(["addComment"]),

    

    onSendComment() {
      const formData = new FormData();
      formData.append("comment", this.comment);
      
      this.addComment(formData);
    },
  },
};
</script>

<style scoped>
.footer{
  margin-top: 15px;
  display: flex;
}
.writeacomment {
  width: 80%
}
button{
  margin-left: 10px;
}

</style>
