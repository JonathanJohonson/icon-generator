import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import '@root/src/assets/styles/style.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
