import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Resume from '@/views/Resume.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'

const routes: Array<any> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
