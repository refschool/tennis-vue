<script setup>
import { ref, computed } from 'vue'

const props = defineProps(['reservations'])
const emit = defineEmits(['add-reservation'])

const player = ref('')
const court = ref('Court 1')
const date = ref('')
const time = ref('10:00')

const courts = ['Court 1', 'Court 2', 'Court 3']

const isSlotTaken = computed(() => {
  return props.reservations.some(r =>
    r.court === court.value &&
    r.date === date.value &&
    r.time === time.value
  )
})

function handleSubmit() {
  if (isSlotTaken.value) return

  const newReservation = {
    id: Date.now(),
    player: player.value,
    court: court.value,
    date: date.value,
    time: time.value
  }

  emit('add-reservation', newReservation)

  player.value = ''
  date.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="player" placeholder="Nom du joueur" required />

    <select v-model="court">
      <option v-for="c in courts" :key="c">
        {{ c }}
      </option>
    </select>

    <input type="date" v-model="date" required />
    <input type="time" v-model="time" required />

    <button type="submit" :disabled="isSlotTaken">
      Réserver
    </button>

    <p v-if="isSlotTaken" style="color:red">
      ⚠️ Ce créneau est déjà réservé.
    </p>
  </form>
</template>