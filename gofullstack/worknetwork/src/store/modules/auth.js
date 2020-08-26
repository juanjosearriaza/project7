import axios from "axios";
import router from "../../router"



const state = {
  token: localStorage.getItem("token") || "",
  isLoggedIn: null,
};

const getters = {
    isAuthenticated: state => !!state.token,
    isLoggedIn: state => state.isLoggedIn
    
};

const actions = {
    async onLogin({ commit }, form) {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            form, 
          );
          commit("ON_LOGIN", response.data.token);
          commit("ON_USER_LOGGED_IN", true)
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("userId", response.data.userId)
          router.push("/home");
        } catch (err) {
          console.log(err);
          commit("ON_USER_LOGGED_IN", false)
        }
      },
      onLogout({ commit }) {
      
        localStorage.clear()
        
        router.push("/");
        commit("ON_LOGOUT");
      },
};

const mutations = {
    ON_LOGIN: (state, token) => (state.token = token),
    ON_LOGOUT: (state) => (state.token = ""),
    ON_USER_LOGGED_IN: (state, boolean) => (state.isLoggedIn = boolean)

};

export default {
  state,
  getters,
  actions,
  mutations,
};


