<template>
    <div>
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
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            address: '81 Seville Road, Peterborough, UK',
            email: 'hello@worknetwork.com',
            phone: '+08 88 88 88 88 88'
        }
    }
}
</script>

<style scoped>

</style>