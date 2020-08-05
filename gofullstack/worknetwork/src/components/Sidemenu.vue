<template>
  <b-col cols="0" md="3" style="background-color:#F2F3F5!important">
    <b-navbar vertical toggleable="lg" type="light" variant="light">
      <b-collapse id="vet-nav-collapse" is-nav>
        <div>
          <b-nav vertical class="text-left">
            <b-nav-item href="#">Welcome {{ user.firstname }} {{ user.lastname }}</b-nav-item>
            <b-nav-item href="#"><router-link to="/createapost">Create a Post</router-link></b-nav-item>
            <b-nav-item href="#">Events</b-nav-item>
            <b-nav-item href="#">Jobs</b-nav-item>
            <b-nav-item href="#">Wishlist</b-nav-item>
          </b-nav>
        </div>
      </b-collapse>
    </b-navbar>
  </b-col>
</template>

<script>
export default {
  name: "Sidemenu",
  computed: {
    user() {
      const users = this.$store.getters.allUsers;

      return users.find((user) => localStorage.getItem("userId") == user.id);
    },
  }

};
</script>

<style scoped>
</style>
