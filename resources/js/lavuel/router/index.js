import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/sample/Dashboard'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

// Sample route
import sample from './sample'

Vue.use(Router)

export default new Router({
  mode           : 'history',
  linkActiveClass: 'open active',
  scrollBehavior : () => ({ y: 0 }),
  routes         : [
    {
      path     : '/',
      redirect : '/dashboard',
      name     : 'Home',
      component: Full,
      meta     : { requiresAuth: true },
      children : [
        {
          path     : 'dashboard',
          name     : 'Dashboard',
          component: Dashboard,
          meta     : { requiresAuth: true },
        },
        ...sample,
      ],
    },
    {
      path     : '/login',
      name     : 'Login',
      props    : true,
      component: Login,
      meta     : { requiresVisitor: true },
    },
    {
      path     : '/register',
      name     : 'Register',
      component: Register,
      meta     : { requiresVisitor: true },
    },
    {
      path     : '*',
      name     : '404',
      component: Page404,
    },
  ],
})
