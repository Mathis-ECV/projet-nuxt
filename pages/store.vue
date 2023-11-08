<template>
    <h2>Store pinia</h2>
    <button @click="increment">increment</button>
    <p>{{ count }}</p>
    <nuxt-link to="/fetching">Fetching</nuxt-link>
</template>

<script setup>
import { useCounterStore } from
    '@/store/counter'
import { storeToRefs } from 'pinia'
const inputVal = ref('')
const counterStore =
    useCounterStore()
const { increment } = counterStore
const { count } =
    storeToRefs(counterStore)
</script>