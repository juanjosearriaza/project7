<template>
  <div class="card mb-3" style="width:100%">
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar class="mr-2"></b-avatar>

      <span v-if="user" class="mr-auto"
        >{{ user.firstname }} {{ user.lastname }}</span
      >
      <b-badge v-if="createdAt">Posted {{ timeDifference }}</b-badge>
    </b-list-group-item>
    <div class="card-body">
      <h5 class="card-title text-left">{{ title }}</h5>
      <p class="card-text text-left">{{ description }}</p>

      <span
        v-if="
          hasBeenRead && !hasBeenRead.includes(userLoggedIn) && this.showPost
        "
      >
        <b-button @click="onSeePost" pill variant="primary"
          >See Post</b-button
        ></span
      >
      <div v-else>
        <router-link :to="{ name: 'Singlepost', params: { id } }">
          <!--  <b-card-img
            v-if="image"
            :src="image"
            alt="Image"
            class="rounded-0"
            style="width:100%"
          > -->
          <video width="100%" height="fit-content" autoplay loop muted playsinline poster="../assets/icon.png">
            <source :src="image" type="video/mp4" />
          </video>
          <!--           </b-card-img>
 -->
        </router-link>
        <div class="footer">
          <a @click="onLiked" href="#"
            >{{ likesLenght }}<b-icon-hand-thumbs-up></b-icon-hand-thumbs-up></a>
          <a @click="onDisliked" href="#"
            >{{ dislikesLenght }}<b-icon-hand-thumbs-down></b-icon-hand-thumbs-down></a>
          <b-form method="post">
            <b-form-input
              v-model="comment"
              class="rounded-pill"
              type="text"
              required
              placeholder="Write a comment"
            ></b-form-input
          ></b-form>
          <b-button @click="onSendComment" pill variant="primary"
            >Send</b-button
          >
          <b-button @click="onShowComments" pill variant="success">
            {{ rightComment.length
            }}<b-icon-chat></b-icon-chat></b-button>
        </div>
      </div>
    </div>
    <Comment
      v-show="show"
      v-for="comment in rightComment"
      :id="comment.id"
      :userId="comment.userId"
      :postId="comment.postId"
      :comment="comment.comment"
      :createdAt="comment.createdAt"
      :key="comment.id"
    ></Comment>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Comment from "../components/Comment";
import {BIconHandThumbsUp, BIconHandThumbsDown, BIconChat} from 'bootstrap-vue';


export default {
  name: "Card",
  components: {BIconHandThumbsUp, BIconHandThumbsDown, BIconChat, Comment},
  props: [
    "id",
    "title",
    "description",
    "image",
    "userId",
    "createdAt",
    "hasBeenRead",
    "userLiked",
    "userDisliked",
  ],
  data() {
    return {
      comment: "",
      userLoggedIn: localStorage.getItem("userId"),
      show: false,
      showPost: true,
    };
  },
  computed: {
    ...mapGetters(["allComments"]),
    postId() {
      try {
        const posts = this.$store.getters.allPosts;

        return posts.find((post) => this.id == post.id).id;
      } catch (err) {
        return err;
      }
    },
    likesLenght() {
      try {
        const posts = this.$store.getters.allPosts;

        return posts.find((post) => this.id == post.id).userLiked.length;
      } catch (err) {
        return err;
      }
    },
    dislikesLenght() {
      try {
        const posts = this.$store.getters.allPosts;

        return posts.find((post) => this.id == post.id).userDisliked.length;
      } catch (err) {
        return err;
      }
    },
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
    rightComment() {
      try {
        const comments = this.$store.getters.allComments;

        return comments.filter((comment) => this.id == comment.postId);
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
  methods: {
    ...mapActions([
      "addComment",
      "loadComments",
      "viewPost",
      "onUserLiked",
      "onUserDisliked",
    ]),

    onSendComment() {
      try {
        if (this.comment !== "") {
          this.addComment({ comment: this.comment, postId: this.postId, userId: this.userLoggedIn });
          this.comment = "";
        }
      } catch (err) {
        return err;
      }
    },

    onShowComments() {
      this.show = !this.show;
    },

    onSeePost() {
      try {
        (this.showPost = false),
          this.viewPost({ id: this.postId, hasBeenRead: this.userLoggedIn });
      } catch (err) {
        return err;
      }
    },
    onLiked() {
      this.onUserLiked({ id: this.postId, userLiked: this.userLoggedIn });
    },
    onDisliked() {
      this.onUserDisliked({ id: this.postId, userDisliked: this.userLoggedIn });
    },
  },
};


document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, lazyVideoObserver) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});



</script>

<style scoped>
.footer {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
form {
  width: 80%;
}
button {
  margin-left: 10px;
}
.btn-success {
  display: flex;
}
svg {
  display: flex;
  margin: auto 3px;
}
.badge {
  font-size: 11px;
}
a {
  text-decoration: none !important;
  color: #007bff;
}
.btn-primary {
  color: #100a0a !important;
}
</style>
