import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Parallex from '../components/parallex'
import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/signup'
import Forum from '../components/forum/forum'
import Read from '../components/forum/read'
import Create from '../components/forum/create'
import CreateCategory from '../components/category/CreateCategory'
const routes = [
  { path: '/', component: Parallex },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
  { path: '/forum', component: Forum , name:'forum'},
  { path: '/question/:slug', component: Read , name:'read'},
  { path: '/ask', component: Create },
  { path: '/signup', component: Signup },
  { path: '/category', component: CreateCategory },

]


const router = new VueRouter({
  routes, // short for `routes: routes`
  hashbang : false,
  mode :'history'
});

export default router
