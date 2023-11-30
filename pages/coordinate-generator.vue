<script setup>

import maps from '@/cms/queries/maps';

import * as mapGenerator from '@/public/assets/js/mapGenerator.js';

const { data: AllMaps_data } = await useLazyAsyncQuery(maps);

const pinX = ref(0);
const pinY = ref(0);
const isDragging = ref(false);

const startDragging = (event) => {
  mapGenerator.startDragging(event, pinX, pinY, isDragging);
};

const handleDragging = (event) => {
  mapGenerator.handleDragging(event, pinX, pinY, isDragging);
};

const stopDragging = () => {
  mapGenerator.stopDragging(isDragging);
};

</script>

<template>
  <section class="container">
    <h1>Generateur de coordonnées</h1>

    <div v-for="map in AllMaps_data.allMaps" :key="map.id">
      <h2>{{ map.mapTitle }}</h2>
      <div class="map-top-view map-generator" :style="{ 'background-image': `url(${map.mapTopView.url})` }"
        @mousedown="startDragging($event)" @mousemove="handleDragging($event)" @mouseup="stopDragging"
        @mouseleave="stopDragging">
        <div class="pin" ref="pin" :style="{ left: `${pinX}%`, top: `${pinY}%` }"></div>
      </div>
      <div>
        <p class="pin-position-x">Position X : {{ pinX }}%</p>
        <p class="pin-position-y">Position Y : {{ pinY }}%</p>
      </div>
    </div>
  </section>
</template>