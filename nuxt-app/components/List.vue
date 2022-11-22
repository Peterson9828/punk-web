<script setup lang="ts">
import { Beer } from "~/types/beer";
defineProps<{
  items: Beer[];
}>();
</script>

<template>
  <div class="my-8">
    <div v-if="items" class="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div
        class="rounded-lg shadow-md p-2 px-4 bg-white"
        v-for="beer of items"
        :key="beer.name"
      >
        <div class="flex flex-col items-center justify-center h-60 border-b-2">
          <img class="h-auto" width="56" :src="beer.image_url" alt="beer" />
        </div>

        <p class="truncate font-medium text-lg mt-1">{{ beer.name }}</p>
      </div>
    </div>
    <div v-else class="flex justify-center">No content</div>
  </div>
</template>

<style scoped></style>
