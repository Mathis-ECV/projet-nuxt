
<script setup>
import main_content from '@/cms/queries/main_content';

const { data: Main_content_data } = await useLazyAsyncQuery(main_content);
</script>
<template>
    <section class="container">
        <div>
            <h1 class="is-centered">{{ Main_content_data.mainContent.titleSite }}</h1>
        </div>
        <div>
            <nuxt-link to="/stuffs/maps">
                <h2>Stuffs</h2>
            </nuxt-link>
            <h2>Strats (Comming Soon)</h2>
        </div>
    </section>
    <section class="section-container last_articles">
        <LastArticles />
    </section>
</template>