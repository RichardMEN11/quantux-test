
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
       {
        path: '/',
        name: 'Screen',
        component: () => import(/* webpackChunkName: "Screen.vue" */ './pages/Screen.vue')
    },   {
        path: '/Screen.html',
        name: 'Screen',
        component: () => import(/* webpackChunkName: "Screen.vue" */ './pages/Screen.vue')
    },   {
        path: '/Screen_1.html',
        name: 'Screen_1',
        component: () => import(/* webpackChunkName: "Screen_1.vue" */ './pages/Screen_1.vue')
    }
  ]
})
