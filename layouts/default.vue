
<script setup>

import nav from '@/cms/queries/nav';

//const { data: articles, pending: postsPending, error: blogError } = await useLazyAsyncQuery(articles);
// const { data: articlePost } = await useLazyAsyncQuery(articles);
/*
const { data: mainContent, pending: postsPending, error: blogError } = await useLazyAsyncQuery(nav);

//const { data: mainContent } = await useLazyAsyncQuery(nav);



console.log( mainContent );


*/
</script>

<template>
    <section class="header">
        <div class="container">
            <nuxt-link to="/" exact><h3>ChessS2</h3></nuxt-link>
            <nav>
                <ul>
                    <!--
                    <li>
                        <nuxt-link to="/stuffs/maps" exact>Stuffs</nuxt-link>
                    </li>
                    -->
                    <li>
                        <nuxt-link to="/strats/maps" exact>Strats</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
    <div>
 
      
        <!-- <h2>{{ mainContent.titleSite }}</h2> 

    <ul v-if="!pending">
        <li v-for="link in mainContent.mainContent.navLinks" :key="link.id">
            {{ link.title }}
        </li>
    </ul>
    <p v-else-if="pending">Loading...</p>
-->
        <!-- <p>{{mainContent.mainContent.linksMainNav.linksNavMain[0].title }}</p> -->
     
    </div>
    <NuxtPage />
    <footer>
        <h2>Footer</h2>
    </footer>
</template>

