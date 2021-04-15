<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  
};
</script>

<style lang="css">
* {
  font-family: "Roboto", "Times New Roman", Times, serif;
}

body {
  background-color: lavender !important;
  padding-top: 70px;
}
@media only screen and (min-width: 320px) and (max-width: 479px) {
  body {
    padding-top: 120px;
  }
}
</style>
