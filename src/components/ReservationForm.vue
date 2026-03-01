<script setup>
import {ref} from 'vue'

</script>

<template>

    <form @submit.prevent="handleSubmit">

        <input v-model="player"  required>

        <button type="submit">Réserver</button>
    </form>
</template>