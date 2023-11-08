<script setup>
// SSR
const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains')
</script>

<template>
    <div>
        <h1>Mountains</h1>
        <p v-if="pending">Loading...</p>
        <p v-else-if="error">{{ error.message }}</p>
        <ul v-else>
            <li v-for="mountain of data" :key="mountain.title">
                <img :src="mountain.image" :alt="mountain.title" width="100" />
                {{ mountain.title }}
                <p>{{ mountain.description }}</p>
            </li>
        </ul>
        <button @click="refresh">Refresh</button>
        <nuxt-link to="/store">Store</nuxt-link>
    </div>
</template>
