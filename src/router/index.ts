import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/login/SignUp.vue'; 
import Login from '../components/login/Signin.vue'; 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/signup',
      name: 'signin',
      component:SignUp
    }

  ]
})

export default router
