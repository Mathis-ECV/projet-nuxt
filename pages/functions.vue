<script setup>
// classic function
const showName = () => 'John Doe'
const consoleName = () => console.log('John doe')
</script>
<template>
    <p>{{ showName() }}</p>
    <button @click="consoleName()">Console name</button>
</template>