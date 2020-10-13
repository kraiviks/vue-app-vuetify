import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home'
import Order from '@/components/Orders/Order'
import OrderList from '@/components/Orders/OrderList'
import NewOrder from '@/components/Orders/NewOrder'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/order/:id',
    props: true,
    name: 'order',
    component: Order
  },
  {
    path: '/list',
    name: 'list',
    component: OrderList,
    beforeEnter: AuthGuard
  },
  {
    path: '/new',
    name: 'newOrder',
    component: NewOrder,
    beforeEnter: AuthGuard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    beforeEnter: AuthGuard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
