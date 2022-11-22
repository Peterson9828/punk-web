<script setup lang="ts">
import { useBeerStore } from "~/store/beer";
const beerStore = useBeerStore();
await beerStore.fetchList();
</script>

<template>
  <div>
    <Filter />
    <List :items="beerStore.list" />
    <Pagination />
  </div>
</template>

<style></style>
