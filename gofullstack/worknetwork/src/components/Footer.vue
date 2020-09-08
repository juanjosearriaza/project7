<template>
<div class="mt-4">
    <b-row>
      <b-col>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter-square mr-3 ml-3"></i>
        <i class="fab fa-instagram"></i>
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
export default {
  name: "Footer",
  props:["copyright"]
  
};
</script>

<style lang="css">

</style>