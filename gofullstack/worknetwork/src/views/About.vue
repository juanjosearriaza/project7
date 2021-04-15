<template>
  <div class="about">
    <TheNavigationBar></TheNavigationBar>
    <p class="d-flex flex-column align-items-center mt-5">This is an about page</p>
    <Footer :copyright="copyright"></Footer>

    
  </div>
</template>

<script>
import TheNavigationBar from "../components/TheNavigationBar.vue";
import Footer from "../components/Footer";

export default {
  name: "About",
  components: { TheNavigationBar, Footer },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${currentYear}`;
    },
  },
};
</script>
