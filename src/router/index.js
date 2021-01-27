import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/components/Home"),
      children: [
        {
          path: '/',
          name: 'Index',
          component: () => import("@/components/view/Index")
        },
        {
          path: '/Resume',
          name: 'Resume',
          component: () => import("@/components/view/Resume")
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import("@/components/Login")
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = sessionStorage.getItem('Authorization');
 
    if (token === null || token === '' || token === undefined) {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;
