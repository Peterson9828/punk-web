<script setup lang="ts">
import { useBeerStore } from "~/store/beer";
const beerStore = useBeerStore();
watch(
  () => beerStore.filtersName.beer_name,
  async () => {
    await beerStore.fetchList();
  }
);
</script>

<template>
  <div>
    <form>
      <input
        id="search"
        class="w-full shadow-md mb-5 h-10 rounded-lg"
        type="text"
        placeholder="Buscar"
        v-model="beerStore.filtersName.beer_name"
      />
    </form>
  </div>
</template>

<style scoped></style>
