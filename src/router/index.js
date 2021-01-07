import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue"
import Jobs from "../views/Jobs.vue"
import JobDetails from "../views/JobDetails.vue"
import NoFound from "../views/NoFound.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component:Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component:JobDetails,
    props:true
  },
  // 404 page
  {
    path:'/:catchAll(.*)',
    name:'NoFound',
    component:NoFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
