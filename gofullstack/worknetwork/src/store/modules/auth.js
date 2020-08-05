import axios from "axios";
import router from "../../router"

const state = {
  token: localStorage.getItem("token") || ""
};

const getters = {
    isAuthenticated: state => !!state.token
};

const actions = {
    async onLogin({ commit }, form) {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            form, 
          );
          commit("ON_LOGIN", response.data.token);
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("userId", response.data.userId)
          router.push("/home");
        } catch (err) {
          console.log(err);
        }
      },
      onLogout({ commit }) {
        localStorage.removeItem("token");
        router.push("/");
        commit("ON_LOGOUT");
      },
};

const mutations = {
    ON_LOGIN: (state, token) => (state.token = token),
    ON_LOGOUT: (state) => (state.token = "")

};

export default {
  state,
  getters,
  actions,
  mutations,
};


