
<script setup>

import nav from '@/cms/queries/nav';

//const { data: articles, pending: postsPending, error: blogError } = await useLazyAsyncQuery(articles);
// const { data: articlePost } = await useLazyAsyncQuery(articles);
const { data: mainContent } = await useLazyAsyncQuery(nav);

console.log( mainContent );



</script>



<template>
    <div>
 
        <h1>{{ mainContent.mainContent.titleSite }}</h1>
        <h2>{{ mainContent.mainContent.linksMainNav }}</h2>

     
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

