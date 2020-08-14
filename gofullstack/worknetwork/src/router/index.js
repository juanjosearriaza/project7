import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')  
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')  
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')  
  },
  {
    path: '/createapost',
    name: 'Createapost',
    component: () => import(/* webpackChunkName: "createpost" */ '../views/Createapost.vue')  
  },
  {
    path: '/singlepost/:id',
    name: 'Singlepost',
    component: () => import(/* webpackChunkName: "singlepost" */ '../views/Singlepost.vue')  
  },
  {
    path: '/modifyapost/:id',
    name: 'Modifyapost',
    component: () => import(/* webpackChunkName: "modifyapost" */ '../views/Modify.vue')  
  },
  {
    path: '/manageyouraccount/',
    name: 'Manageyouraccount',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Manageyouraccount.vue')  
  },
  
  


]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
