l.<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/icon.png" alt="logo groupomania" style="height:50px;widht:50px;" />
      <b-navbar-toggle target="vet-nav-collapse"></b-navbar-toggle>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item class="active">
            <router-link to="/home">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/contact">Contact</router-link>
          </b-nav-item>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="light">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>

        <b-button v-if="!isAuthenticated" pill class="mx-1" variant="light">
          <router-link to="/signup">Sign up</router-link>
        </b-button>
        <div v-else>
          <b-button @click="onLogout" pill class="mx-1" variant="light">Log out</b-button>
          <b-button pill class="mx-1" variant="light">
            <router-link to="/manageyouraccount">Manage your account</router-link>
          </b-button>
        </div>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["onLogout"])
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>

<style scoped lang="scss">
body {
  background-color: #f2f3f5 !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    color: #212529;
    &.router-link-exact-active {
      font-weight: bold;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
