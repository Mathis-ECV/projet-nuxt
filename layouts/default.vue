
<script setup>

import maps from '@/cms/queries/maps';
import main_content from '@/cms/queries/main_content';

//const { data: AllMaps_data } = await useLazyAsyncQuery(maps);
const { data: AllMaps_data, pending: postsPendingMaps, error: blogErrorMaps } = await useLazyAsyncQuery(maps);

const { data: Main_content_data } = await useLazyAsyncQuery(main_content);

</script>

<template>
    <section class="header">
        <div class="container">
            <nuxt-link to="/" exact>
                <h3>{{ Main_content_data.mainContent.titleSite }}</h3>
            </nuxt-link>
        <nav>
            <ul class="menu-items">
                <li class="menu-item">
                    <nuxt-link to="/stuffs/maps" exact>Stuffs</nuxt-link>
                        <ul class="menu-sub-items">
                            <li v-for="map in AllMaps_data.allMaps" :key="map.id">
                                <nuxt-link v-if="map.mapSlug" :to="'/stuffs/' + map.mapSlug">
                                    {{ map.mapTitle }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <!--
                                                                                                                                    <li>
                                                                                                                                        <nuxt-link to="/strats/maps" exact>Strats</nuxt-link>
                                                                                                                                    </li>
                                                                                                                                    -->
                </ul>
            </nav>
        </div>
    </section>

    <NuxtPage />

    <footer>
        <section>
            <h2 class="is-centered">{{ Main_content_data.mainContent.textCopyright }}</h2>
        </section>
    </footer>
</template>