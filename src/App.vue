<script setup>
import {ref} from 'vue'

const clubName = "Tennis Club Vue"
const today = new Date().toISOString().split('T')[0]

// State global simple (à améliorer plus tard)
//const reservations = ref([])

// TODO : passer reservations aux views via props si nécessaire
</script>

<template>
  <div>
    <h1>{{ clubName }}</h1>
    <p>Date du jour : {{ today }}</p>
    <nav>
      <router-link to="/">Réserver</router-link> |
      <router-link to="/reservations">Réservations</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
    <hr />
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
