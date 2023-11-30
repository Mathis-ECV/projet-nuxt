
<script setup>


import CTA_Text from '~/cms/queries/BuyMeLambo.ts';

//const { data: articles, pending: postsPending, error: blogError } = await useLazyAsyncQuery(articles);
const { data: CTA_Text_data, pending: postsPendingArticles, error: blogErrorArticles } = await useLazyAsyncQuery(CTA_Text);
//const { data: AllArticles_data } = await useLazyAsyncQuery(articles);

console.log(CTA_Text_data);


</script>


<template>
    <div v-if=CTA_Text_data>
        <h2>{{ CTA_Text_data.ctaFinancement.textCtaFinancement }}</h2>
        <a :href="CTA_Text_data.ctaFinancement.urlPaypalFinancement" target="_blank">
            <button @click="handleBuyCoffee">{{ CTA_Text_data.ctaFinancement.textButtonCtaFinancement }}</button>
        </a>
    </div>
</template>
  
<script>

</script>