import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Principal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/goto',
        name: 'Goto',
        redirect: '/goto/experience',
      },
      {
        path: '/goto/experience',
        name: 'Experiencia-laboral',
        component: () => import('@/views/goto/Experience.vue'),
      },
      {
        path: '/goto/aboutme',
        name: 'Sobre-mi',
        component: () => import('@/views/goto/Aboutme.vue'),
      },
      {
        path: '/goto/curriculum',
        name: 'Curriculum',
        component: () => import('@/views/goto/Cv.vue'),
      },
      {
        path: '/headerpages/contact',
        name: 'Contacto',
        component: () => import('@/views/headerpages/Contact.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
