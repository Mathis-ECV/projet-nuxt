
<script setup>

import nav from '@/cms/queries/nav';

//const { data: articles, pending: postsPending, error: blogError } = await useLazyAsyncQuery(articles);
// const { data: articlePost } = await useLazyAsyncQuery(articles);

const { data: mainContent, pending: postsPending, error: blogError } = await useLazyAsyncQuery(nav);

//const { data: mainContent } = await useLazyAsyncQuery(nav);



console.log( mainContent );



</script>


<template>
    <div>
 
      
        <!-- <h2>{{ mainContent.titleSite }}</h2> -->

    <ul v-if="!pending">
        <li v-for="link in mainContent.mainContent.navLinks" :key="link.id">
            {{ link.title }}
        </li>
    </ul>
    <p v-else-if="pending">Loading...</p>

        <!-- <p>{{mainContent.mainContent.linksMainNav.linksNavMain[0].title }}</p> -->
     
        <nav>
            <nuxt-link to="/"></nuxt-link> |
            <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>
    </div>
    <NuxtPage />
    <footer>
        <h2>Footer</h2>
    </footer>
</template>

