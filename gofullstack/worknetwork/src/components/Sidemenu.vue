<template>
  <b-col class="d-none d-sm-flex menu" md="3">
    <b-nav vertical class="text-left">
      <b-nav-item class="menu__item menu__item--1" href="#"
        >{{ firstname }} {{ lastname }}
        <div class="menu__item-accent"></div
      ></b-nav-item>
      <b-nav-item class="menu__item menu__item--2"  href="#"
        >   <router-link to="/createapost"
              >Create a Post</router-link
            >
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
      <div class="menu__open-accent--1"></div>
      <div class="menu__open-accent--2"></div>
    </b-nav>
    
  </b-col>
</template>

<script>
export default {
  name: "Sidemenu",
  props: ["firstname", "lastname"],
};
</script>

<style scoped lang="scss">
@mixin menu__open-accent($dur, $delay) {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #d0d3ee;
  transform-origin: top left;
  animation: menu $dur $delay both;
  z-index: 3;
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
  &__open-accent--1 {
    @include menu__open-accent(450ms, 275ms);
  }
  &__open-accent--2 {
    @include menu__open-accent(450ms, 150ms);
    background-color: #0e397f;
    z-index: 2;
  }
  &__item {
    padding: 8px;
    margin: 5px;
    background: #fff;
    animation: menu__item 810ms ease-in-out both;
    position: relative;
    z-index: 4;
    &:hover {
      transform: translateX(5px);
    }
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
      animation: menu__accent 400ms both;
    }
    &--1 {
      animation-delay: 475ms;
      > div {
        animation-delay: 712ms;
      }
    }
    &--2 {
      animation-delay: 546ms;
      > div {
        animation-delay: 805ms;
      }
    }
    &--3 {
      animation-delay: 632ms;
      > div {
        animation-delay: 914ms;
      }
    }
     &--4 {
      animation-delay: 752ms;
      > div {
        animation-delay: 1014ms;
      }
    }
     &--5 {
      animation-delay: 838ms;
      > div {
        animation-delay: 1114ms;
      }
    }
  }
}

@keyframes menu {
  0% {
    transform: scale(0, 0.07);
  }
  33% {
    transform: scale(1, 0.07);
    animation-timing-function: cubic-bezier(0.73, 0.01, 0.2, 0.99);
  }
}
@keyframes menu__item {
  0% {
    transform: translateX(-110%);
  }
}

@keyframes menu__accent {
  0% {
    transform: scaleY(0);
  }
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
