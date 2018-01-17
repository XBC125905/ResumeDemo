import Vue from 'vue'
import Router from 'vue-router'
import general from '../plugin/general'
import HelloWorld from '@/components/Index'

Vue.use(Router)
Vue.use(general)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
