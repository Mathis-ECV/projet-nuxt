<!-- <script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
    <button @click="count++">You clicked me {{ count }} times.</button>
</template> -->

<script setup>


import { ref } from 'vue'



const count = ref(0)
const items = ref([
    { id: 1, text: 'Learn JavaScript' },
    { id: 2, text: 'Learn Vue' },
    { id: 3, text: 'Build something awesome' }
]);
const imageSrc = ref('https://picsum.photos/200');
const username = ref();
const isActive = ref(true)
const hasError = ref(false)
let rand = Math.random();
function increment() {
    count.value++
}
</script>

<template>
    <div v-if="rand > 0.5">
        <span>Rand was {{ rand }}</span><br>
        <button @click="count++">You clicked me {{ count }} times.</button>
    </div>
    <div v-else>
        <span>Rand was {{ rand }}</span><br>
        <button @click="increment">
            {{ count }} <!-- no .value needed -->
        </button>
    </div>
    <br><br>
    <div v-for="item in items" :key="item.id">
        {{ item.text }}
    </div>
    <br><br>
    <div>
        <img v-bind:src="imageSrc" />
    </div>
    <div>
        <input type="text" v-model="username" />
        <p>rendu: {{ username }}</p>
    </div>
    <div class="static" :class="{
        active: isActive,
        'text-danger': hasError
    }"></div>
</template>

<style scoped> /* Scoped atribute allowed style to work only on this component */
 .image img {
     width: 100px;
 }
</style>