<template>
  <div id="nav">
    <b-navbar fixed="top" toggleable="md" type="light" variant="primary">
      <img
        src="../assets/icon.png"
        alt="logo groupomania"
        style="height: 3rem; width: 3rem"
      />
      <b-navbar-nav v-show="$route.name != 'Login'" class="my-auto ml-3">
        <b-nav-form>
          <b-input-group size="sm">
            <b-input-group-prepend is-text>
              <b-icon-search></b-icon-search>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              placeholder="Search"
              :value="modelValue"
              @input="$emit('input', $event)"
            ></b-form-input>
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>

      <b-navbar-toggle target="sidebar-right"></b-navbar-toggle>
      <b-sidebar id="sidebar-right" right shadow>
        <div class="px-3 py-2">
          <b-nav vertical class="text-left">
            <b-nav-item class="menu__item menu__item--1" href="#"
              >{{ user.firstname }} {{ user.lastname }}
              <div class="menu__item-accent"></div
            ></b-nav-item>
            <b-nav-item class="menu__item menu__item--2" href="#">
              <router-link to="/createapost">Create a Post</router-link>
              <div class="menu__item-accent"></div
            ></b-nav-item>
            <b-nav-item class="menu__item menu__item--3" href="#"
              >Events
              <div class="menu__item-accent"></div
            ></b-nav-item>
            <b-nav-item class="menu__item menu__item--4" href="#"
              >Jobs
              <div class="menu__item-accent"></div
            ></b-nav-item>
            <b-nav-item class="menu__item menu__item--5" href="#"
              >Wishlist
              <div class="menu__item-accent"></div
            ></b-nav-item>
            </b-nav>
        </div>
      </b-sidebar>

      <!-- <b-dropdown
        v-if="isAuthenticated"
        id="dropdown-left"
        text="Menu"
        variant="light"
        class="m-2"
      >
        <b-dropdown-item href="#">{{ user.firstname }}</b-dropdown-item>
        <b-dropdown-item href="#">{{ user.lastname }}</b-dropdown-item>
        <b-dropdown-item href="#"
          ><router-link to="/createapost"
            >Create a Post</router-link
          ></b-dropdown-item
        >
        <b-dropdown-item href="#">Events</b-dropdown-item>
        <b-dropdown-item href="#">Jobs</b-dropdown-item>
        <b-dropdown-item href="#">Wishlist</b-dropdown-item>
      </b-dropdown> -->

      <!--       <b-collapse id="nav-collapse" is-nav>
 -->
      <b-navbar-nav class="mx-auto" v-if="$route.name !== 'Login'">
        <b-nav-item to="/home">
          <b-button
            type="button"
            :class="$route.name == 'Home' ? 'btn btn-light' : 'btn btn-dark'"
            v-b-tooltip.hover.bottom="'Home'"
            ><b-icon-house></b-icon-house
          ></b-button>
        </b-nav-item>
        <b-nav-item to="/about">
          <b-button
            type="button"
            :class="$route.name == 'About' ? 'btn btn-light' : 'btn btn-dark'"
            v-b-tooltip.hover.bottom="'About'"
            ><b-icon-info-square></b-icon-info-square>
          </b-button>
        </b-nav-item>
        <b-nav-item to="/contact">
          <b-button
            type="button"
            :class="$route.name == 'Contact' ? 'btn btn-light' : 'btn btn-dark'"
            v-b-tooltip.hover.bottom="'Contact'"
            ><b-icon-telephone></b-icon-telephone
          ></b-button>
        </b-nav-item>
      </b-navbar-nav>

      <div v-if="!isAuthenticated" pill class="ml-auto" variant="light">
        <router-link to="/signup"
          ><b-button
            type="button"
            :class="$route.name == 'Signup' ? 'btn btn-light' : 'btn btn-dark'"
            v-b-tooltip.hover.bottom="'Sign up'"
            ><b-icon-box-arrow-in-right></b-icon-box-arrow-in-right></b-button
        ></router-link>
      </div>
      <div v-else class="ml-auto">
        <b-button
          type="button"
          style="margin-right: 0.2rem"
          @click="onLogout"
          v-b-tooltip.hover.bottom="'Log out'"
          :class="$route.name == 'Signout' ? 'btn btn-light' : 'btn btn-dark'"
          ><b-icon-box-arrow-left></b-icon-box-arrow-left
          ><!-- <font-awesome-icon icon="sign-out-alt" /> --></b-button
        >

        <router-link :to="{ name: 'Manageyouraccount' }"
          ><b-button
            type="button"
            :class="
              $route.name == 'Manageyouraccount'
                ? 'btn btn-light'
                : 'btn btn-dark'
            "
            v-b-tooltip.hover.bottom="'Settings'"
          >
            <b-icon-sliders></b-icon-sliders></b-button
        ></router-link>
      </div>
      <!--       </b-collapse>
 -->
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  BIconSearch,
  BIconHouse,
  BIconTelephone,
  BIconInfoSquare,
  BIconBoxArrowLeft,
  BIconBoxArrowInRight,
  BIconSliders,
} from "bootstrap-vue";

export default {
  name: "TheNavigationBar",
  props: ["modelValue"],
  components: {
    BIconSearch,
    BIconHouse,
    BIconTelephone,
    BIconInfoSquare,
    BIconBoxArrowLeft,
    BIconBoxArrowInRight,
    BIconSliders,
  },
  methods: {
    ...mapActions(["onLogout"]),
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),

    user() {
      try {
        const users = this.$store.getters.allUsers;

        return (
          users.find((user) => localStorage.getItem("userId") == user.id) || {
            firstname: null,
            lastname: null,
          }
        );
      } catch (err) {
        return err;
      }
    },
  },
};
</script>

<style scoped lang="scss">
body {
  background-color: #f2f3f5 !important;
}


.menu {
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background-color: #15dea5;
  overflow: hidden;
  transform-origin: top left;
  position: relative;
  animation: menu 661ms both;
  z-index: 1;
  
  &__item {
    padding: 8px!important;
    margin: 5px!important;
    background: #fff;
    animation: menu__item 810ms ease-in-out both;
    position: relative;
    z-index: 4;
    
    > a {
      color: black;      
      > a {
        color: black;
        &:hover {
          text-decoration: none;
        }
      }
    }
    &-accent {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 1%;
      background-color: #153ade;
    }
  }
}


.nav-item {
  margin: 0 0.2rem;
 
}

@media all and (min-width: 768px) {
  #dropdown-left {
    display: none;
  }
  .form-inline {
    display: inline;
  }
  .ml-auto {
    float: right;
  }
  .navbar-nav {
    flex-direction: row;
  }
}

@media all and (max-width: 480px) {
  .form-inline {
    display: inline;
  }
  .ml-auto {
    float: right;
  }
  .navbar {
    padding: 0.3rem!important;
  }
  .navbar-nav {
    flex-direction: row;
  }
}

@media screen and (orientation: landscape) {
  .form-inline {
    display: inline;
    margin-bottom: 10px;
  }
}
</style>
