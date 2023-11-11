<script setup>

    import maps from '@/cms/queries/maps';

    const { data: AllMaps_data } = await useLazyAsyncQuery(maps);

</script>

<template>
    <section class="container">
        <h1>Maps</h1>
        <div class="container-cards-map">
            <div class="card-map" v-for="map in AllMaps_data.allMaps" :key="map.id">
                <h2>{{ map.mapTitle }}</h2>
                <img  :src="map.mapThumbnail.url" alt="Top View" />
                <nuxt-link v-if="map.mapSlug" :to="'/map/' + map.mapSlug">
                    Voir la map
                </nuxt-link>
            </div>
        </div>
    </section>
</template>