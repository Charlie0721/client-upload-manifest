import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/login/SignUp.vue'; 
import Login from '../components/login/Signin.vue'; 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: SignUp
    },

    {
      path: '/signin',
      name: 'signin',
      component:Login
    }

  ]
})

export default router
