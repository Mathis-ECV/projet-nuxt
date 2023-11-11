
<script setup>

    import maps from '@/cms/queries/maps';

    const { data: AllMaps_data } = await useLazyAsyncQuery(maps);
    const route = useRoute();

    // Récupérer le slug à partir de l'URL
    const slug = ref(route.params.slug);
</script>

<template>
 
    <div>
        <h1>Maps</h1>
        <div v-for="map in AllMaps_data.allMaps" :key="map.id">
            <!-- Vérifie si la carte existe -->
            <div v-if="slug === map.mapSlug ">
                <h1>La map existe :</h1>  
                <h2>{{ map.mapTitle }}</h2>
                <img  :src="map.mapThumbnail.url" alt="Top View" />
                <img  :src="map.mapTopView.url" alt="Top View" />
            </div>

            <div v-else>
                <h1>La map existe pas</h1>  
            </div>
        </div>
    </div>


</template>