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
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          id="search"
          class="block shadow-lg w-full p-4 pl-10 text-sm text-gray-900 rounded-lg font-mono"
          type="text"
          :placeholder="$t('components.Filter.search')"
          v-model="beerStore.filtersName.beer_name"
        />
      </div>
    </form>
    <div v-if="beerStore.loading" class="color"></div>
  </div>
</template>

<style scoped>
.color {
  background-color: #ef4848;
  width: 100%;
  height: 5px;
  border-radius: 15px;
  animation: progres 3s infinite;
}
@keyframes progres {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
