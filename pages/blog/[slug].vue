<script setup>

import All_articles from '~/cms/queries/all_articles.ts';

const route = useRoute()
if (route.params.slug === 'admin') {
    console.log('This is admin page')
}

const { data: AllArticles_data, pending: postsPendingArticles, error: blogErrorArticles } = await useLazyAsyncQuery(All_articles);

// Fonction pour vérifier si l'utilisateur est sur la page de l'article
function isUserOnArticlePage(article) {
    return route.params.slug === article.articleUrl;
}

// Fonction pour obtenir tout le contenu de l'article
function getArticleContent(article) {
    if (article.contenuArticle && article.contenuArticle.value && article.contenuArticle.value.document && article.contenuArticle.value.document.children) {
        // Concaténer tous les éléments du document
        return article.contenuArticle.value.document.children.map(child => child.children.map(subChild => subChild.value).join('')).join('');
    }
    return '';
}
</script>

<template>
    <section class="container">
        <div v-for="article in AllArticles_data.allArticles" :key="article.id">
            <!-- Vérifier si l'article a une URL et si l'utilisateur est sur la page correspondante -->
            <template v-if="article.articleUrl && isUserOnArticlePage(article)">
                <!-- Afficher le titre de l'article -->
                <h2>{{ article.title }}</h2>

                <!-- Afficher l'image de l'article -->
                <img :src="article.thumbnailArticle.url" alt="Thumbnail" />

                <p>{{ getArticleContent(article) }}</p>
            </template>
        </div>
    </section>
</template>