<template>
  <div style="width:100%">
    <b-list-group-item class="d-flex align-items-left">
      <b-avatar class="mr-2"></b-avatar>
      <div id="comment">
        <h6>{{ user.firstname }} {{ user.lastname }}</h6>
        <div class="card-text text-left">{{ comment }}</div>
      </div>
    </b-list-group-item>
    <p>Posted {{ timeDifference }}</p>
  </div>
</template>

<script>
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

    timeDifference() {
      try {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var now = new Date();
        var myDate = new Date(this.createdAt);

        var difference = now.getTime() - myDate.getTime();

        if (difference < msPerMinute) {
          return Math.round(difference / 1000) + " seconds ago";
        } else if (difference < msPerHour) {
          return Math.round(difference / msPerMinute) + " minutes ago";
        } else if (difference < msPerDay) {
          return Math.round(difference / msPerHour) + " hours ago";
        } else if (difference < msPerMonth) {
          return (
            "approximately " + Math.round(difference / msPerDay) + " days ago"
          );
        } else if (difference < msPerYear) {
          return (
            "approximately " +
            Math.round(difference / msPerMonth) +
            " months ago"
          );
        } else {
          return (
            "approximately " + Math.round(difference / msPerYear) + " years ago"
          );
        }
      } catch (error) {
        return error;
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
