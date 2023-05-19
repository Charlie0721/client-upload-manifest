import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import SignUp from '../components/login/SignUp.vue';
import Login from '../components/login/Signin.vue';
import Manifest from '../components/Manifest/GetManifest.vue';
import AllManifest from '../components/Manifest/GetAllManifest.vue';

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'login',
    component: Login
  },

  {
    path: '/signup',
    name: 'signin',
    component: SignUp
  },
  {
    path: '/all-manifest/:manifestPosId',
    name: 'manifest',
    component: Manifest
  },
  {
    path: '/all-manifest',
    name: 'all-manifest',
    component: AllManifest
  }


]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router