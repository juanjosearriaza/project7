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
      if(localStorage.getItem("token")) {
        const response = await axios.get("http://localhost:3000/api/users/");
        commit("SET_USERS", response.data);
        localStorage.setItem("users", JSON.stringify(response.data))
      }      
    } catch (err) {
      console.log(err);
    }
  },
  async deleteUser({ commit, dispatch }, id) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/users/${id}`,
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      commit("DELETE_USER", response.data);
      dispatch("onLogout")
    } catch (err) {
      console.log(err);
    }
  },
  
};

const mutations = {
  SET_USERS: (state, users) => (state.users = users),
  DELETE_USER: (state, id) =>
    (state.users = state.users.filter((user) => user.id !== id)),  
};

export default {
  state,
  getters,
  actions,
  mutations,
};
