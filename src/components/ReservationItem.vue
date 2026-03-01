<script setup>
defineProps(['reservation'])
defineEmits(['delete-reservation'])
</script>

<template>
  <div style="border:1px solid #ccc; margin:10px; padding:10px;">
    <p>
      <strong>{{ reservation.player }}</strong> -
      {{ reservation.court }} -
      {{ reservation.date }} -
      {{ reservation.time }}
    </p>

    <button @click="$emit('delete-reservation', reservation.id)">
      Supprimer
    </button>
  </div>
</template>