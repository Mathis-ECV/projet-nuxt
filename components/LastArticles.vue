<script setup>


import Last_articles from '~/cms/queries/last_articles.ts';

//const { data: articles, pending: postsPending, error: blogError } = await useLazyAsyncQuery(articles);
const { data: AllArticles_data, pending: postsPendingArticles, error: blogErrorArticles } = await useLazyAsyncQuery(Last_articles);
//const { data: AllArticles_data } = await useLazyAsyncQuery(articles);



</script>

<template>
    <h2>Lasts Articles</h2>
    <div class="container-articles">

        <li v-for="article in AllArticles_data.allArticles" :key="article.id">

            <nuxt-link v-if="article.articleUrl" :to="'/blog/' + article.articleUrl">

                <img :src="article.thumbnailArticle.url" alt="Thumbnail" />

                <!-- Afficher le titre -->
                <h2>{{ article.title }}</h2>

                <!-- Afficher un extrait du contenu -->
                <p>{{ getArticleExcerpt(article) }}</p>

            </nuxt-link>
        </li>

    </div>
</template>

<script>
// Fonction pour obtenir un extrait du contenu de l'article
function getArticleExcerpt(article) {
    if (article.contenuArticle && article.contenuArticle.value && article.contenuArticle.value.document && article.contenuArticle.value.document.children) {
        // Recherchez le premier paragraphe et affichez son contenu
        const firstParagraph = article.contenuArticle.value.document.children.find(child => child.type === 'paragraph');
        return firstParagraph ? firstParagraph.children[0].value : '';
    }
    return '';
}
</script>