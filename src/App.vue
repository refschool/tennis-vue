<script setup>
import { ref, watch } from 'vue'

const clubName = "Tennis Club Vue"
const today = new Date().toISOString().split('T')[0]

// Chargement localStorage
const saved = localStorage.getItem('reservations')
const reservations = ref(saved ? JSON.parse(saved) : [])

// Persistance automatique
watch(reservations, (newVal) => {
  localStorage.setItem('reservations', JSON.stringify(newVal))
}, { deep: true })

function addReservation(reservation) {
  reservations.value.push(reservation)
}

function deleteReservation(id) {
  reservations.value = reservations.value.filter(r => r.id !== id)
}
</script>

<template>
  <div style="max-width:800px;margin:auto">
    <h1>{{ clubName }}</h1>
    <p>Date du jour : {{ today }}</p>

    <nav>
      <router-link to="/">Réserver</router-link> |
      <router-link to="/reservations">Réservations</router-link> |
      <router-link to="/stats">Statistiques</router-link>
    </nav>

    <hr />

    <router-view
      :reservations="reservations"
      @add-reservation="addReservation"
      @delete-reservation="deleteReservation"
    />
  </div>
</template>