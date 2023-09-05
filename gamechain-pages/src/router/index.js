import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { message } from 'ant-design-vue';


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/library',
      name: 'Library',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LibraryView.vue')
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/uploadGame',
      name: 'Upload Game',
      /* TODO: Pinia */
      beforeEnter:((to, from, next)=>{if(localStorage.developer=="true"){next()}else{message.error({content:()=>"Unauthorized",style:{marginTop:'28px'}})
    }}),
      component: () => import('../views/UploadGameView.vue')
    }
  ]
})


router.afterEach((to) => {
  document.title = to.name
})

export default router
