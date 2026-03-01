import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Reservations from '../views/Reservations.vue'


// const routes = [
//     { path: '/', component: Home },
//     { path: '/', component: Contact }
// ]

const router = createRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/reservations', component: Reservations },
        { path: '/contact', component: Contact }

    ],
    history: createWebHistory()
})

export default router