<script setup>
// Import des requêtes pour obtenir les données des cartes (maps) et des équipements (stuffs)
import maps from '@/cms/queries/maps';
import stuffs from '@/cms/queries/stuffs';

// Utilisation de l'utilitaire useRoute pour obtenir les paramètres de l'URL
const route = useRoute();
const slug = ref(route.params.slug);

// Utilisation de useLazyAsyncQuery pour obtenir les données des cartes et des équipements de manière asynchrone
const { data: AllMaps_data, pending: postsPendingMaps, error: blogErrorMaps } = await useLazyAsyncQuery(maps);
const { data: AllStuffs, pending: postsPendingStuffs, error: blogErrorStuffs } = await useLazyAsyncQuery(stuffs);

// Méthode pour obtenir le nom de la propriété des équipements en fonction du slug de la carte
const getStuffPropertyName = () => {
  return `allStuff${slug.value.charAt(0).toUpperCase()}${slug.value.slice(1)}s`;
};

// Gestion des filtres pour les côtés (Terroristes et Contre-Terroristes) et les types d'équipements
const sideFilters = ref(['t']);  // Par défaut, seulement le filtre T est activé
const stuffFilters = ref(['smoke', 'molotov', 'flash', 'grenade']);

// Méthode pour basculer l'état des filtres côté (T/CT)
const toggleSideFilter = (filter) => {
  if (sideFilters.value.length === 1 && sideFilters.value.includes(filter)) {
    // Si un seul filtre est actif et il s'agit du même filtre, ne rien faire
    return;
  }

  // Sinon, basculer l'état du filtre
  sideFilters.value = [filter];
};

// Méthode pour basculer l'état des filtres d'équipements (smoke, molotov, flash, grenade)
const toggleStuffFilter = (filter) => {
  const index = stuffFilters.value.indexOf(filter);
  if (index === -1) {
    stuffFilters.value.push(filter);
  } else {
    stuffFilters.value.splice(index, 1);
  }
};

// Calcul des équipements filtrés en fonction des filtres appliqués
const filteredStuffs = computed(() => {
  return AllStuffs.value[getStuffPropertyName()].filter(stuff => sideFilters.value.includes(stuff.stuffSide) && stuffFilters.value.includes(stuff.stuffType));
});

</script>

<template>
  <!-- Section principale -->
  <section class="container">
    <!-- Boucle sur les cartes -->
    <div v-for="map in AllMaps_data.allMaps" :key="map.id">
      <!-- Vérification du slug pour afficher le contenu de la carte correspondante -->
      <div v-if="slug === map.mapSlug">
        <h1>Maps : {{ map.mapTitle }}</h1>
        <div class="filters-and-maps">
          <!-- Filtres pour les côtés (T/CT) -->
          <div class="filter-side">
            <button @click="toggleSideFilter('t')" :class="{ active: sideFilters.includes('t') }">T</button>
            <button @click="toggleSideFilter('ct')" :class="{ active: sideFilters.includes('ct') }">CT</button>
          </div>

          <!-- Filtres pour les types d'équipements (smoke, molotov, flash, grenade) -->
          <div class="filter-stuff-side">
            <button @click="toggleStuffFilter('smoke')"
              :class="{ active: stuffFilters.includes('smoke') }">Smokes</button>
            <button @click="toggleStuffFilter('molotov')"
              :class="{ active: stuffFilters.includes('molotov') }">Molotoves</button>
            <button @click="toggleStuffFilter('flash')" :class="{ active: stuffFilters.includes('flash') }">Flash</button>
            <button @click="toggleStuffFilter('grenade')"
              :class="{ active: stuffFilters.includes('grenade') }">Grenades</button>
          </div>

          <!-- Affichage de la carte et des équipements filtrés -->
          <div class="main-content-map">
            <div class="map-top-view" :style="{ 'background-image': `url(${map.mapTopView.url})` }">
              <!-- Boucle sur les équipements filtrés -->
              <div v-for="stuffs in filteredStuffs" :key="stuffs.id">
                <!-- Affichage des pins d'atterrissage (pin-landing) -->
                <div v-if="stuffs.stuffLandingPositionX && stuffs.stuffLandingPositionY">
                  <div class="pin pin-landing" ref="pin-landing"
                    :class="{ ['id-' + stuffs.id]: true, 'is-hidden': selectedLandingId !== null && selectedLandingId !== stuffs.id }"
                    :style="{ left: `${stuffs.stuffLandingPositionX}%`, top: `${stuffs.stuffLandingPositionY}%`, 'background-image': `url(../assets/img/icon-${stuffs.stuffType}.svg)` }"
                    @click="toggleThrowingVisibility(stuffs.id)"></div>
                </div>
                <!-- Affichage des pins de lancer (pin-throwing) -->
                <div v-if="stuffs.stuffThrowing && stuffs.stuffThrowing.length > 0">
                  <div v-for="throwing_position in stuffs.stuffThrowing" :key="throwing_position.id">
                    <div
                      v-if="throwing_position.stuffThrowingPositionX && throwing_position.stuffThrowingPositionY && throwing_position.stuffThrowingType">
                      <div class="pin pin-throwing" ref="pin-throwing"
                        :class="{ ['id-' + stuffs.id]: true, 'is-hidden': !throwingVisibility || throwingVisibility !== stuffs.id }"
                        :style="{ left: `${throwing_position.stuffThrowingPositionX}%`, top: `${throwing_position.stuffThrowingPositionY}%` }"
                        @click="showStuffDetails(throwing_position)"></div>
                      <!-- Contenu du pin-throwing (caché par défaut) -->
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
          </div>
        </div>
        <!-- Affichage du contenu de l'équipement sélectionné -->
        <div class="content-stuff" v-if="selectedStuffDetails">

          <figure class="zoom" @mousemove="zoom"
            :style="{ 'background-image': `url(${selectedStuffDetails.stuffImageThrowingView.url})` }">
            <img :src="selectedStuffDetails.stuffImageThrowingView.url" />
          </figure>

          <img class="stuff-throwing-top" :src="selectedStuffDetails.stuffImageThrowingTop.url" alt="" />
          <!-- <h2>{{ selectedStuffDetails.stuffThrowingType }}</h2> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* Gestion des affichages des icônes et du contenu sur la carte des équipements */
export default {
  // Initialisation des données
  data() {
    return {
      selectedLandingId: null, // Nouvelle variable pour l'ID du pin-landing sélectionné
      selectedStuffDetails: null, // Détails de l'équipement sélectionné
      throwingVisibility: null, // Visibilité des pins de lancer (pin-throwing)
      selectedThrowingId: null,
    };
  },
  // Méthodes pour gérer l'affichage des détails et la visibilité des pins de lancer
  methods: {
    showStuffDetails(throwing_position) {
      this.selectedStuffDetails = throwing_position;

      this.updateThrowingWidth(250);
    },
    toggleThrowingVisibility(id) {
      if (this.throwingVisibility === id) {
        // Si la visibilité actuelle correspond à l'id du pin d'atterrissage, réinitialiser la visibilité
        this.throwingVisibility = null;

        this.updateThrowingWidth(500);
      } else {
        // Sinon, activer la visibilité avec l'id du nouveau pin d'atterrissage
        this.throwingVisibility = id;
      }

      // Mettre à jour la variable selectedLandingId
      this.selectedLandingId = this.throwingVisibility;

      this.selectedStuffDetails = null;
    },
    updateThrowingWidth(width) {
      const selectedFiltersAndMaps = document.querySelector(`.filters-and-maps`);
      if (selectedFiltersAndMaps) {
        selectedFiltersAndMaps.style.transition = 'width 0.3s ease-in-out'; // Ajoutez la transition
        selectedFiltersAndMaps.style.width = width ? `${width}px` : 'auto';
        // Ajoutez d'autres styles au besoin

        window.scrollTo({
          top: window.scrollY + 500,
          behavior: 'smooth', // Ajoutez le comportement de défilement en douceur
        });
      }
    },
    zoom(e) {
      var zoomer = e.currentTarget;
      var offsetX = e.offsetX || e.touches.pageX;
      var offsetY = e.offsetY || e.touches.pageY;
      var x = offsetX / zoomer.offsetWidth * 100;
      var y = offsetY / zoomer.offsetHeight * 100;
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }
  }
};
</script>
