<template>
  <b-card class="mt-5 mx-auto col-12 col-md-6">
    <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">user.firstname   user.lastname </span>
        <b-badge>Posted </b-badge>
      </b-list-group-item>
    <div class="card-body">
      <p class="card-text text-left">comment </p>
      

  
      
    </div>
  </b-card>
</template>

<script>



export default {
  name: "Comments",
  computed: {
    user() {
      const users = this.$store.getters.allUsers;

      return users.find((user) => this.userId == user.id);
    },
  }
};
</script>

<style scoped>
</style>