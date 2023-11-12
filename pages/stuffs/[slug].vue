<script setup>
import maps from '@/cms/queries/maps';
import stuffs from '@/cms/queries/stuffs';

const route = useRoute();
const slug = ref(route.params.slug);

//const { data: AllMaps_data } = await useLazyAsyncQuery(maps);
//const { data: AllStuffs } = await useLazyAsyncQuery(stuffs);

const { data: AllMaps_data, pending: postsPendingMaps, error: blogErrorMaps } = await useLazyAsyncQuery(maps);
const { data: AllStuffs, pending: postsPendingStuffs, error: blogErrorStuffs } = await useLazyAsyncQuery(stuffs);


// Méthode pour obtenir le nom de la propriété en fonction du slug (pour récuperer seulement les stuffs de la map)
const getStuffPropertyName = () => {
  return `allStuff${slug.value.charAt(0).toUpperCase()}${slug.value.slice(1)}s`;
};

</script>

<template>
    <section class="container">
      <h1>Maps :</h1>
  
      <div v-for="map in AllMaps_data.allMaps" :key="map.id">
        <!-- Vérifie si la carte existe -->
        <div v-if="slug === map.mapSlug">
          <h1>{{ map.mapTitle }}</h1>
  
            <div class="main-content-map">
            <div class="map-top-view" :style="{ 'background-image': `url(${map.mapTopView.url})` }">
                <div v-for="stuffs in AllStuffs[getStuffPropertyName()]" :key="stuffs.id">
                <div v-if="stuffs.stuffLandingPositionX && stuffs.stuffLandingPositionY">
                    <div
                    class="pin pin-landing"
                    ref="pin-landing"
                    :class="{['id-' + stuffs.id]: true}"
                    :style="{ left: `${stuffs.stuffLandingPositionX}%`, top: `${stuffs.stuffLandingPositionY}%`, 'background-image': `url(../assets/img/icon-${stuffs.stuffType}.svg)`}"
                    @click="toggleThrowingVisibility(stuffs.id)"
                    ></div>
                </div>
                <div v-if="stuffs.stuffThrowing && stuffs.stuffThrowing.length > 0">
                    <div v-for="throwing_position in stuffs.stuffThrowing" :key="throwing_position.id">
                    <!-- Vérifie si les données existent avant de les afficher -->
                    <div v-if="throwing_position.stuffThrowingPositionX && throwing_position.stuffThrowingPositionY && throwing_position.stuffThrowingType">
                        <div class="pin pin-throwing" ref="pin-throwing"
                        :class="{['id-' + stuffs.id]: true, 'is-hidden': !throwingVisibility || throwingVisibility !== stuffs.id}"
                        :style="{ left: `${throwing_position.stuffThrowingPositionX}%`, top: `${throwing_position.stuffThrowingPositionY}%`}"
                        @click="showStuffDetails(throwing_position)"
                        ></div>
                        <div v-if="throwing_position.stuffThrowingType">
                        <h2 class="is-hidden">{{ throwing_position.stuffThrowingType }}</h2>
                        <img class="is-hidden" :src="throwing_position.stuffImageThrowingTop" alt="" />
                        <img class="is-hidden" :src="throwing_position.stuffImageThrowingView" alt="" />
                        <img class="is-hidden" :src="throwing_position.stuffImageThrowingViewZoom" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="content-stuff" v-if="selectedStuffDetails">
                <h2>{{ selectedStuffDetails.stuffThrowingType }}</h2>
                <img :src="selectedStuffDetails.stuffImageThrowingTop.url" alt="" />
                <img :src="selectedStuffDetails.stuffImageThrowingView.url" alt="" />
                <img :src="selectedStuffDetails.stuffImageThrowingViewZoom.url" alt="" />
                </div>

            </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  /* Gestion des Affichages des icons et contenus sur la map des stuffs */
  export default {
    data() {
      return {
        selectedStuffDetails: null,
        throwingVisibility: null
      };
    },
    methods: {
      showStuffDetails(throwing_position) {
        this.selectedStuffDetails = throwing_position;
      },
      toggleThrowingVisibility(id) {
        if (this.throwingVisibility === id) {
          // Si la visibilité actuelle correspond à l'id de la landing pin, réinitialise la visibilité
          this.throwingVisibility = null;
        } else {
          // Sinon, active la visibilité avec l'id de la nouvelle landing pin
          this.throwingVisibility = id;
        }
        this.selectedStuffDetails = null;
      }
    }
  };
</script>