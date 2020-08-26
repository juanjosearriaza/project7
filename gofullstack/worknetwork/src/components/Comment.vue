<template>
  <div style="width:100%">
    <b-list-group-item class="d-flex align-items-left">
      <b-avatar class="mr-2"></b-avatar>
      <div id="comment">
        <h6>{{ user.firstname }} {{ user.lastname }}</h6>
        <div class="card-text text-left">{{ comment }}</div>
      </div>
    </b-list-group-item>
    <p>Posted {{ time }}</p>
  </div>
</template>

<script>
var moment = require("moment");

export default {
  name: "Comment",
  props: ["id", "comment", "userId", "postId", "createdAt"],
  computed: {
    user() {
      try {
        const users = this.$store.getters.allUsers;

        return (
          users.find((user) => this.userId == user.id) || {
            firstname: null,
            lastname: null,
          }
        );
      } catch (err) {
        return err;
      }
    },

    time() {
      try {
        const posted = moment(this.createdAt);

        return posted.fromNow();
      } catch (err) {
        return err;
      }
    },
  },
};
</script>

<style scoped>
.card {
  border-style: none !important;
}
#comment {
  width: 100%;
  text-align: left;
  margin-left: auto;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px 5px;
}
h6 {
  font-weight: bolder;
}
.list-group-item {
  border-style: none !important;
}
p {
  text-align: left;
  margin-left: 65px;
  font-size: 12px;
  margin-top: -3px;
}
</style>
