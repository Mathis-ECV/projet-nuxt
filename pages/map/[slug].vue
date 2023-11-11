<script setup>
import maps from '@/cms/queries/maps';
import stuffs from '@/cms/queries/stuffs';

const route = useRoute();
const slug = ref(route.params.slug);

const { data: AllMaps_data } = await useLazyAsyncQuery(maps);
const { data: AllStuffs } = await useLazyAsyncQuery(stuffs);

// Méthode pour obtenir le nom de la propriété en fonction du slug (pour récuperer seulement les stuffs de la map)
const getStuffPropertyName = () => {
  return `allStuff${slug.value.charAt(0).toUpperCase()}${slug.value.slice(1)}s`;
};

</script>

<template>
  <div>
    <h1>Maps</h1>

    <div v-for="map in AllMaps_data.allMaps" :key="map.id">
      <!-- Vérifie si la carte existe -->
      <div v-if="slug === map.mapSlug">
        <h1>La map existe :</h1>
        <h2>{{ map.mapTitle }}</h2>
        <img :src="map.mapThumbnail.url" alt="Top View" />
        <img :src="map.mapTopView.url" alt="Top View" />

        <div v-for="stuffs in AllStuffs[getStuffPropertyName()]" :key="stuffs.id">
          <h2>{{ stuffs.stuffTitle }}</h2>
          <h2>{{ stuffs.stuffType }}</h2>
          <h2>{{ stuffs.stuffSide }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>