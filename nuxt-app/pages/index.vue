<script setup lang="ts">
import { useBeerStore } from "~/store/beer";
import { ref } from "vue";
import { storeToRefs } from "pinia";
const beerStore = useBeerStore();
await beerStore.fetchList();
const { list } = storeToRefs(beerStore);

let lista = ref(beerStore.list);

watch(
  () => beerStore.filters.beer_name,
  async () => {
    await beerStore.fetchList();
  }
);
</script>

<template>
  <div>
    <!--    {{ lista }}-->
    {{ beerStore.filters.beer_name }}
    <Filter />
    <List :items="beerStore.list" />
  </div>
</template>

<style></style>
