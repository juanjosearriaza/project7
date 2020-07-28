import axios from "axios";


const state = {
  posts: [],
};

const getters = {
  allPosts: (state) => state.posts,
};

const actions = {
  async loadPosts({ commit }) {
    try {
      const response = await axios.get("http://localhost:3000/api/posts/", { headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }});
      commit("SET_POSTS", response.data);
    } catch (err) {
      console.log(err);
    }
  },
  async addPost({ commit }, fd) {
    try {
      const response = await axios.post("http://localhost:3000/api/posts/", fd, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }});
      commit("ADD_POST", response.data);
      
    } catch (err) {
      console.log(err);
    }
  },
  async deletePost({ commit }, id) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/posts/${id}`, { headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }}
      );
      commit("DELETE_POST", response.data);
    } catch (err) {
      console.log(err);
    }
  },
  async updatePost({ commit }, updatedPost) {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/posts/${updatedPost.postId}`, updatedPost, { headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }}
      );
      commit("UPDATE_POST", response.data);
    } catch (err) {
      console.log(err);
    }
  },
};

const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts),
  ADD_POST: (state, post) => (state.posts.unshift(post)),
  DELETE_POST: (state, id) =>
    (state.posts = state.posts.filter((post) => post.id !== id)),
  UPDATE_POST: (state, updatedPost) => {
    const index = state.posts.findIndex((post) => post.id === updatedPost.id);

    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
