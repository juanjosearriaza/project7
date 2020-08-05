<template>
  <div class="card mb-3" style="width:100%">
    <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">{{ user.firstname }} {{  user.lastname }}</span>
        <b-badge>{{ user.createdAt }}</b-badge>
      </b-list-group-item>
    <div class="card-body">
      <h5 class="card-title text-left">{{ title }}</h5>
      <p class="card-text text-left">{{ description }}</p>
      <router-link :to="{ name: 'Singlepost', params:{ id }}">
        <b-card-img :src="image" alt="Image" class="rounded-0" style="width:100%"></b-card-img>
      </router-link>

  
      <a href="#" class="card-link float-right mt-3 ml-2">Comments</a>
    </div>
  </div>
</template>

<script>



export default {
  name: "Card",
  props: ["id", "title", "description", "image", "userId"],  
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