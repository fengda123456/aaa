import Vue from 'vue'
import Router from 'vue-router'


import sysLayout from '../components/layout.vue'
import Choice from '../components/choice/index.vue'
import Tvplay from '../components/tvplay/index.vue'
import Moview from '../components/moview/index.vue'

Vue.use(Router)
import 'element-ui/lib/theme-chalk/display.css';

export default new Router({
  mode: 'hash',
  routes: [

    {
      path: '/sys',
      meta: { requireAuth: true },
      component: sysLayout,
      redirect: '/sys/Choice',
      children: [
        {
          path: 'Choice',
          meta: { requireAuth: true },
          component: Choice
        },
        {
          path: 'Tvplay',
          meta: { requireAuth: true },
          component: Tvplay
        },
        {
          path: 'Moview',
          meta: { requireAuth: true },
          component: Moview
        },
      ]
    },
    { path: '/', name: '/', redirect: '/sys/Choice' },
    { path: '/sysLayout', name: 'sysLayout', component: sysLayout },
    { path: '/sys/Choice', name: 'Choice', component: Choice },
  ]
})
