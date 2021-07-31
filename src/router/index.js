import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/products/Home.vue'
import Createproducts from '../views/products/Createproducts.vue'
import Editproducts from '../views/products/Editproducts.vue'
import Detailproducts from '../views/products/Detailproducts.vue'
import Kategoris from '../views/kategoris/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createproducts',
    name: 'Createproducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createproducts 
  },
  {
    path: '/editproducts/:id',
    name: 'Editproducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editproducts
  },
  {
    path: '/detailproducts/:id',
    name: 'Detailproducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailproducts
  },
  {
    path: '/kategoris/:id',
    name: 'kategoris.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Kategoris
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
