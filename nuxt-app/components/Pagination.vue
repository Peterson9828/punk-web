<script setup lang="ts">
import { useBeerStore } from "~/store/beer";
const beerStore = useBeerStore();
const perPage = [
  { value: 5, text: "5" },
  { value: 10, text: "10" },
  { value: 25, text: "25" },
  { value: 50, text: "50" },
];

function previousPagination() {
  beerStore.filters.page > 1
    ? beerStore.filters.page--
    : beerStore.filters.page;
}

function nextPagination() {
  beerStore.filters.page++;
}

watch(
  () => [beerStore.filters.page, beerStore.filters.per_page],
  async () => {
    await beerStore.fetchList();
  }
);
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="flex items-center">
      <span class="text-gray-500 text-sm">
        {{ beerStore.list ? beerStore.list.length : 0 }}
        {{ $t("components.Pagination.totalItems") }}
      </span>
    </div>
    <div class="text-center">
      <button
        class="px-3 shadow-lg rounded py-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
        @click="previousPagination"
      >
        {{ $t("components.Pagination.previous") }}
      </button>

      <span
        class="px-3 mx-3 shadow-lg rounded py-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
      >
        {{ beerStore.filters.page }}
      </span>

      <button
        class="px-3 shadow-lg rounded py-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
        @click="nextPagination"
      >
        {{ $t("components.Pagination.next") }}
      </button>
    </div>

    <div class="flex justify-end">
      <select
        class="text-gray-900 shadow-lg text-sm rounded-lg block p-2.5"
        v-model="beerStore.filters.per_page"
      >
        <option v-for="size in perPage" :key="size.value" :value="size.value">
          {{ size.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped></style>
