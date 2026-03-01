<script setup>
import ReservationItem from './ReservationItem.vue'

defineProps(['reservations'])
defineEmits(['delete-reservation'])
</script>

<template>
  <div>
    <ReservationItem
      v-for="r in reservations"
      :key="r.id"
      :reservation="r"
      @delete-reservation="$emit('delete-reservation', $event)"
    />
  </div>
</template>