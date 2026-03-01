import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stats from '../views/Stats.vue'
import Reservations from '../views/Reservations.vue'


// const routes = [
//     { path: '/', component: Home },
//     { path: '/', component: Contact }
// ]

const router = createRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/reservations', component: Reservations },
        { path: '/stats', component: Stats }

    ],
    history: createWebHistory()
})

export default router