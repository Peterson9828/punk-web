<script setup lang="ts">
import { useBeerStore } from "~/store/beer";

const beers = useBeerStore();
</script>

<template>
  <div>
    <div v-for="beer of beers.list" :key="beer.name">
      {{ beer.name }}
    </div>
  </div>
</template>

<style></style>
