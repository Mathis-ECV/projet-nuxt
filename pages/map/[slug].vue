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

  <section class="container">
    <h1>Maps</h1>

    <div v-for="map in AllMaps_data.allMaps" :key="map.id">
      <!-- Vérifie si la carte existe -->
      <div v-if="slug === map.mapSlug">
        <h1>{{ map.mapTitle }}</h1>
       
        <div v-for="stuffs in AllStuffs[getStuffPropertyName()]" :key="stuffs.id">

            <h2>{{ stuffs.stuffTitle }}</h2>
            <h2>{{ stuffs.stuffType }}</h2>
            <h2>{{ stuffs.stuffSide }}</h2>

            <div class="map-top-view" :style="{ 'background-image': `url(${map.mapTopView.url})` }" >
                <div class="pin pin-landing" ref="pin-landing" :style="{ left: `${stuffs.stuffLandingPositionX}%`, top: `${stuffs.stuffLandingPositionY}%` }"></div>

                <div v-for="throwing_position in stuffs.stuffThrowing" :key="throwing_position .id">
                    <div class="pin pin-throwing" ref="pin-throwing" :style="{ left: `${throwing_position.stuffThrowingPositionX}%`, top: `${throwing_position.stuffThrowingPositionY}%` }"></div>
                    <h2>{{ throwing_position.stuffThrowingType }}</h2>
                </div>
            </div>

            <div class="content-stuff">
                <h2></h2>
            </div>
    
        </div>

      </div>
    </div>
  </section>

</template>