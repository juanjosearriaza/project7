import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);

Vue.use(VueAxios, axios)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 


import router from './router'
import store from './store'

import {  AlertPlugin, FormFilePlugin, BadgePlugin, AvatarPlugin, ListGroupPlugin, InputGroupPlugin, SidebarPlugin, TooltipPlugin, LayoutPlugin, NavbarPlugin, FormInputPlugin, FormGroupPlugin, FormPlugin, CardPlugin, ButtonPlugin, ImagePlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormPlugin)
Vue.use(CardPlugin)
Vue.use(ButtonPlugin)
Vue.use(ImagePlugin)
Vue.use(TooltipPlugin)
Vue.use(SidebarPlugin)
Vue.use(InputGroupPlugin)
Vue.use(ListGroupPlugin)
Vue.use(AvatarPlugin)
Vue.use(BadgePlugin)
Vue.use(FormFilePlugin)
Vue.use(AlertPlugin)












Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


