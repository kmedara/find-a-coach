import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import CoachDetail from '@/pages/coaches/CoachDetail.vue';
import CoachesList from '@/pages/coaches/CoachesList.vue';
import CoachRegistation from '@/pages/coaches/CoachRegistration.vue';
import ContactCoach from '@/pages/requests/ContactCoach.vue';
import RequestsReceived from '@/pages/requests/RequestsReceived.vue';
import NotFound from '@/pages/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    props: true,
    children: [
      { path: 'contact', component: ContactCoach } // /coaches/c1/contact
    ]
  },
  { path: '/register', component: CoachRegistation },
  { path: '/requests', component: RequestsReceived },
  { path: '/:notFound(.*)', component: NotFound }
];

/** 
 * ! 
 * 
 *  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
 */

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;