import Vue from 'vue'
import Vuex from 'vuex'
import posts from "./modules/posts"
import auth from "./modules/auth"
import users from "./modules/users"
import comments from "./modules/comments"
import Superstore from 'vuex-superstore'

const superstore = new Superstore()


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [superstore.save],
   modules: superstore.load({
    posts,
    users,
    comments,
    auth
  }),
})
