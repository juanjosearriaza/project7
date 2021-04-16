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
      
    } catch (err) {
      return err;
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
      return err;
    }
  },
  
 
};

const mutations = {
  LOAD_COMMENTS: (state, comments) => (state.comments = comments),
  ADD_COMMENT: (state, comment) => (state.comments.unshift(comment)),
  
};

export default {
  state,
  getters,
  actions,
  mutations,
};