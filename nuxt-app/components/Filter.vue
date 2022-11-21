<script setup lang="ts">
import { useBeerStore } from "~/store/beer";
const beerStore = useBeerStore();
</script>

<template>
  <div>
    <form>
      <input
        id="search"
        type="text"
        placeholder="Buscar"
        v-model="beerStore.filters.beer_name"
      />
    </form>
  </div>
</template>

<style scoped></style>
