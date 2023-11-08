<script setup>

import articles from '@/cms/queries/articles';

//const { data: articles, pending: postsPending, error: blogError } = await useLazyAsyncQuery(articles);
// const { data: articlePost } = await useLazyAsyncQuery(articles);
const { data: AllarticlePost } = await useLazyAsyncQuery(articles);

console.log(AllarticlePost);



</script>

<template>
    <div>
       <!-- <div v-if="articlePost">
            <h2>{{ articlePost.article.articleTitle }}</h2>
        </div> -->
        <div v-for="article in AllarticlePost.allArticles" :key="allArticles.id">
            <h2>{{ article.articleTitle }}</h2>
        </div>

    </div>
</template>