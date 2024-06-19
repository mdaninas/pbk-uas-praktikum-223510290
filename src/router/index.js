import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/tugas1',
      name: 'tugas1',
      beforeEnter() {
        window.location.href = 'https://dani-project-cv.netlify.app/';
      }
    
    },{
      path: '/tugas2',
      name: 'tugas2',
      beforeEnter() {
        window.location.href = 'https://223510290-dani-tugas2-praktikum-pbk.netlify.app/';
      }
    
    },{
      path: '/tugas3',
      name: 'tugas3',
      beforeEnter() {
        window.location.href = 'https://223510290-dani-tugas3-praktikum-pbk.netlify.app/';
      }
    
    },{
      path: '/tugas4',
      name: 'tugas4',
      beforeEnter() {
        window.location.href = 'https://dani-223510290-tugas4praktikum-pbk.netlify.app/';
      }
    
    },{
      path: '/tugas5',
      name: 'tugas5',
      beforeEnter() {
        window.location.href = 'https://dani-223510290-tugas5-praktikumpbk.netlify.app/';
      }
    
    },{
      path: '/tugas6',
      name: 'tugas6',
      beforeEnter() {
        window.location.href = 'https://dani-223510290-tugas6-praktikumpbk.netlify.app/';
      }
    
    },{
      path: '/tugas7',
      name: 'tugas7',
      beforeEnter() {
        window.location.href = 'https://dani-223510290-tugas7-praktikumpbk.netlify.app/';
      }
    
    }
  ]
})

export default router
