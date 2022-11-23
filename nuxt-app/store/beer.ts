import { defineStore } from "pinia";
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE, API_URL } from "~/constants";
import { Beer } from "~/types/beer";

const module = "beers";

const initFiltersState = {
  page: DEFAULT_PAGE,
  per_page: DEFAULT_PAGE_SIZE,
};

const initFilterNameState = {
  beer_name: null,
};

export const useBeerStore = defineStore("beerStore", {
  state: () => ({
    list: <Beer | any>[],
    filters: initFiltersState,
    filtersName: initFilterNameState,
    loading: false,
  }),

  getters: {
    getBeers: (state) => state.list,
  },
  actions: {
    async fetchList() {
      this.loading = true;
      const { data, error } = await useLazyAsyncData<Beer>("count", () =>
        $fetch(`${API_URL}/${module}`, {
          method: "GET",
          params: this.filtersName.beer_name
            ? { ...this.filters, ...this.filtersName }
            : this.filters,
        })
      );
      this.list = data;
      this.loading = false;
    },
  },
});
