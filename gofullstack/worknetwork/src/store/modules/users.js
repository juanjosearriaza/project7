import axios from "axios";


const state = {
  users: [],
};

const getters = {
  allUsers: (state) => state.users,
};

const actions = {
  async loadUsers({ commit }) {
    try {
      const response = await axios.get("http://localhost:3000/api/users/");
      commit("SET_USERS", response.data);
    } catch (err) {
      console.log(err);
    }
  },
  /*async addPost({ commit }, fd) {
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
  async updatePost({ commit }, formData) {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/posts/${formData.get("id")}`, formData, { headers: {
          authorization: "Bearer " + localStorage.getItem("token"), 'Content-Type': 'multipart/form-data' 
        }, }
      );
      commit("UPDATE_POST", response.data);
    } catch (err) {
      console.log(err);
    }
  },*/
};

const mutations = {
  SET_USERS: (state, users) => (state.users = users),
  /*ADD_POST: (state, post) => (state.posts.unshift(post)),
  DELETE_POST: (state, id) =>
    (state.posts = state.posts.filter((post) => post.id !== id)),
  UPDATE_POST: (state, updatedPost) => {
    const index = state.posts.findIndex((post) => post.id === updatedPost.id);

    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost);
    }
  },*/
};

export default {
  state,
  getters,
  actions,
  mutations,
};
