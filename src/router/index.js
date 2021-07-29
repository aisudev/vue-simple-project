import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Passenger from '@/views/passenger/Passenger.vue'
import Airline from '@/views/passenger/Airline.vue'
import Detail from '@/views/passenger/Detail.vue'
import Layout from '@/views/passenger/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      size: parseInt(route.query.size) || 4
    })
  },
  {
    path: '/passenger/:id',
    name: 'Layout',
    component: Layout,
    props: true,
    children: [
      {
        path: '',
        name: 'Passenger',
        component: Passenger
      },
      {
        path: 'airline',
        name: 'Airline',
        component: Airline
      },
      {
        path: 'detail',
        name: 'Detail',
        component: Detail
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
