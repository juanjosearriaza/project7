<template>
  <div class="footer">
    <b-row>
      <b-col>
        <b-icon-facebook></b-icon-facebook>
        <b-icon-twitter class="mr-3 ml-3"></b-icon-twitter>
        <b-icon-instagram></b-icon-instagram>        
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{ copyright }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {BIconFacebook, BIconTwitter, BIconInstagram} from 'bootstrap-vue';


export default {
  name: "Footer",
  props: ["copyright"],
  components: {BIconFacebook, BIconTwitter, BIconInstagram},
};
</script>

<style scoped lang="css">
* {
  color: black;
}

.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
svg:hover {
  transform: scale(1.15) translateY(-2px);
  transition: transform ease-in-out 100ms;
}
</style>