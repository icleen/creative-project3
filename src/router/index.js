import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Champions from '@/components/Champions'
import Items from '@/components/Items'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/champs',
      name: 'Champions',
      component: Champions
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    }
  ]
})
