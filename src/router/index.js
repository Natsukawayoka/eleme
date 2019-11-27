import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Msite from '../views/index/Msite.vue'
import Discover from '../views/discover/Discover.vue'
import Order from '../views/order/Order.vue'
import Profile from '../views/profile/Profile.vue'
import Login from '../views/Login.vue'
import Detail from '../views/detail/Detail.vue'
import Search from '../views/search/Search.vue'
import loginInfo from '../views/profile/loginInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '',
    component: Login
  },
  {
    path:"/user",
    component:loginInfo
  },
  {
    path: '/',
    component: Index,
    redirect: '/msite',
    children:[
      {
        path:'/msite',
        component:Msite,
        
      },
      {
        path:'/discover',
        component:Discover
      },
      {
        path:'/order',
        component:Order
      },
      {
        path:'/profile',
        component:Profile
      }
    ]
  },
  {
    path:'/detail',
    name:'detail',
    component:Detail
  },{
    path:'/search',
    name:'search',
    component:Search
  }
]

const router = new VueRouter({
  routes
})

export default router
