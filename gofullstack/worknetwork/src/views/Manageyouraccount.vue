<template>
  <div v-if="user">
    <b-card class="mt-3 mx-auto col-12 col-md-4">
      <h2>Manage your account</h2>
      <div class="contactinfo">
        <div class="title">First Name:</div>
        <div>{{ user.firstname }}</div>
        <div class="title">Last Name:</div>
        <div>{{ user.lastname }}</div>
        <div class="title">Email Address:</div>
        <div>{{ user.email }}</div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <b-button
          @click="onDelete"
          type="submit"
          class="d-inline-block"
          variant="danger"
          >Delete Account</b-button
        >
      </div>
    </b-card>
    <Footer class="mt-4" :copyright="copyright"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import { mapActions } from "vuex";

export default {
  name: "Manageyouraccount",
  components: { Footer },

  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${currentYear}`;
    },
    user() {
      try {
        let users = JSON.parse(localStorage.users) || [];

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
  methods: {
    ...mapActions(["deleteUser"]),

    onDelete() {
      try {
        this.$swal
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
          .then((result) => {
            if (result.value) {
              this.$swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success",
                this.deleteUser(this.user.id)
              );
            }
          });
      } catch (err) {
        return err;
      }
    },
  },
};
</script>

<style scoped lang="css">
div {
  margin-bottom: 15px;
}
.contactinfo {
  text-align: left;
  margin-top: 20px;
}
.title {
  font-weight: bold;
}
.d-flex {
  margin-top: 20px;
}
</style>
