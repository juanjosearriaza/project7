import axios from "axios";


const state = {
  comments: [],
};

const getters = {
  allComments: (state) => state.comments,
};

const actions = {
  async addComment({ commit }, comment) {
    try {
      const response = await axios.post("http://localhost:3000/api/comments/", comment, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }});
      commit("ADD_COMMENT", response.data);
      /*let comments = JSON.parse(localStorage.getItem("comments"))
      comments.unshift(response.data)
      localStorage.setItem("comments", JSON.stringify(comments))*/
    } catch (err) {
      console.log(err);
    }
  },
  async loadComments({ commit }) {
    try {
      const response = await axios.get("http://localhost:3000/api/comments/", { headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }});
      commit("LOAD_COMMENTS", response.data);
      localStorage.setItem("comments", JSON.stringify(response.data))
    } catch (err) {
      console.log(err);
    }
  },
  
  /*async deletePost({ commit }, id) {
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
  LOAD_COMMENTS: (state, comments) => (state.comments = comments),
  ADD_COMMENT: (state, comment) => (state.comments.unshift(comment)),
  /*DELETE_POST: (state, id) =>
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