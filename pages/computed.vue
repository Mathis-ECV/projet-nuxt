<template>
    <p>{{ publishedBooksMessage }}</p>
</template>
<script setup>
import { reactive, computed } from 'vue'
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
// a computed ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

const x = ref(0)
const y = ref(0)
// single ref
watch(x, (newX) => {
    console.log(`x is ${newX}`)
})
</script>
