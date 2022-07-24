import * as VueRouter from 'vue-router';
const Home = () => import('./views/home.vue');
const About = () => import('./views/about.vue');

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      name: 'about',
      path: '/about',
      component: About
    }
  ]
});
