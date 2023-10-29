import { createRouter, createWebHistory } from 'vue-router'
import PopulationGraph from '../views/population_graph.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/population_graph',
      name: 'population-graph',
      component: PopulationGraph
    },
  ]
})

export default router
