<script setup>
import {ref} from 'vue'

const props = defineProps(['reservations'])
const emit = defineEmits(['add-reservation'])

const player = ref('')
const court = ref('Court 1')
const date = ref('')
const time = ref('10:00')

const courts = ['Court 1', 'Court 2', 'Court 3']
// TODO : empêcher double réservation
function handleSubmit() {
  const newReservation = {
    id: Date.now(),
    player: player.value,
    court: court.value,
    date: date.value,
    time: time.value
  }

  emit('add-reservation', newReservation)

  // reset
  player.value = ''
  date.value = ''
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="player" placeholder="Nom du joueur"  required><br>
            <select v-model="court">
                <option v-for="c in courts" :key="c">{{ c }}</option>
            </select>
<br>
        <input type="date" v-model="date" required /><br>
        <input type="time" v-model="time" required /><br>
        <button type="submit">Réserver</button>
    </form>
</template>