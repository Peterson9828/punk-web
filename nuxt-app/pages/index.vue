<script setup lang="ts">
import { useBeerStore } from "~/store/beer";
const beers = useBeerStore();
beers.fetchList();
</script>

<template>
  <div>
    <List />
  </div>
</template>

<style></style>
