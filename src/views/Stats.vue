<script setup>
import { computed } from 'vue'

const props = defineProps(['reservations'])

const totalReservations = computed(() => props.reservations.length)

const statsByCourt = computed(() => {
  const stats = {}

  props.reservations.forEach(r => {
    if (!stats[r.court]) {
      stats[r.court] = 0
    }
    stats[r.court]++
  })

  return stats
})
</script>

<template>
  <div>
    <h2>Statistiques</h2>

    <p>Total réservations : {{ totalReservations }}</p>

    <h3>Par terrain :</h3>
    <ul>
      <li v-for="(count, court) in statsByCourt" :key="court">
        {{ court }} : {{ count }}
      </li>
    </ul>
  </div>
</template>