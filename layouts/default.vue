
<script setup>

import maps from '@/cms/queries/maps';

//const { data: AllMaps_data } = await useLazyAsyncQuery(maps);
const { data: AllMaps_data, pending: postsPendingMaps, error: blogErrorMaps } = await useLazyAsyncQuery(maps);

</script>

<template>
    <section class="header">
        <div class="container">
            <nuxt-link to="/" exact><h3>ChessS2</h3></nuxt-link>
            <nav>
                <ul class="menu-items">
                    <li class="menu-item">
                        <nuxt-link to="/stuffs/maps" exact>Stuffs</nuxt-link>
                        <ul class="menu-sub-items">
                            <li v-for="map in AllMaps_data.allMaps" :key="map.id">
                                <nuxt-link v-if="map.mapSlug" :to="'/stuffs/' + map.mapSlug">
                                    {{map.mapTitle}}
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
    <div>
 
     
    </div>
    <NuxtPage />
    <footer>
        <h2>Footer</h2>
    </footer>
</template>