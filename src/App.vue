<script setup>
import { ref} from 'vue'

const currentPage = ref('liste')

const clubName = "Tennis Club Vue"
const today = new Date().toISOString().split('T')[0]

// TODO : passer reservations aux views via props si nécessaire
</script>

<template>
  <div>
    <h1>{{ clubName }}</h1>
    <p>Date du jour : {{ today }}</p>

  </div>

  <div v-if="currentPage === 'home'">
    Page Home
  </div>

    <div v-if="currentPage === 'liste'">
    Page List
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
