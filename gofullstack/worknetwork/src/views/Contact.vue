<template>
  <div>
    <TheNavigationBar></TheNavigationBar>
    <div class="d-flex flex-column align-items-center mt-5">
      <h2>Contact Us</h2>
      <p>Address: {{ address }}</p>
      <p>Phone: {{ phone }}</p>
      <p>Email: {{ email }}</p>
      <p>Hours:</p>
      <ul>
        <li>M-F: 06:00 to 16:00</li>
        <li>Saturday: 07:00 to 14:00</li>
        <li>Sunday: 07:00 to 12:00</li>
      </ul>
    </div>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import TheNavigationBar from "../components/TheNavigationBar.vue";
import Footer from "../components/Footer";

export default {
  name: "Contact",
  components: { TheNavigationBar, Footer },
  data() {
    return {
      address: "81 Seville Road, Peterborough, UK",
      email: "hello@worknetwork.com",
      phone: "+08 88 88 88 88 88",
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${currentYear}`;
    },
  },
};
</script>

<style scoped></style>
