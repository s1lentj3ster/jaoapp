import { createRouter, createWebHistory } from '@ionic/vue-router';

import TabBar from '../components/TabBar.vue';

const routes= [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: TabBar,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('../views/HomePage.vue'),
      },
      {
        path: 'reviews',
        component: () => import('../views/ReviewsPage.vue'),
      },
      {
        path: 'menu',
        component: () => import('../views/MenuPage.vue'),
      },
      {
        path: 'schedule',
        component: () => import('../views/SchedulePage.vue'),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;