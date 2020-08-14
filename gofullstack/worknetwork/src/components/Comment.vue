<template>
  <div class="card mb-3" style="width:100%">
    <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">{{ user.firstname }}   {{ user.lastname }} </span>
        <b-badge>Posted {{ createdAt }}</b-badge>
      </b-list-group-item>
    <div class="card-body">
      <p class="card-text text-left">{{ comment }} </p>
      

  
      
    </div>
  </div>
</template>

<script>



export default {
  name: "Comment",
  props: ["id", "comment", "userId", "postId", "createdAt"],
  computed: {
    user() {
      const users = this.$store.getters.allUsers;

      return users.find((user) => this.userId == user.id) || {firstname: null, lastname: null};
    },
    
  }
};
</script>

<style scoped>
</style>