<template>
  <b-col class="d-none d-sm-block" md="3" style="background-color:#F2F3F5!important">
    <b-navbar vertical toggleable="lg" type="light" variant="light">
      <div>
        <b-nav vertical class="text-left">
          <b-nav-item href="#">{{ firstname }} {{ lastname }}</b-nav-item>
          <b-nav-item href="#"
            ><router-link to="/createapost"
              >Create a Post</router-link
            ></b-nav-item
          >
          <b-nav-item href="#">Events</b-nav-item>
          <b-nav-item href="#">Jobs</b-nav-item>
          <b-nav-item href="#">Wishlist</b-nav-item>
        </b-nav>
      </div>
    </b-navbar>
  </b-col>
</template>

<script>
export default {
  name: "Sidemenu",
  props: ["firstname", "lastname"],
};
</script>

<style scoped>
a {
  color: #3300ff;
}
@media all and (max-width: 480px) {
  .flex-column {
    display: none;
  }
 
}
@media screen and (orientation: landscape) and (max-width: 740px) {
  .flex-column {
    display: none;
  }
}
</style>
