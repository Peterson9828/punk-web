import { defineStore } from "pinia";
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE } from "~/constants";

export interface Beer {
  name: string;
  image_url: string;
}

const initFiltersState = {
  page: DEFAULT_PAGE,
  per_page: DEFAULT_PAGE_SIZE,
};

const initFilterNameState = {
  beer_name: null,
};

export const useBeerStore = defineStore("beerStore", {
  state: () => ({
    list: <any>[],
    filters: initFiltersState,
    filtersName: initFilterNameState,
  }),

  getters: {
    getBeers: (state) => state.list,

    getList(): any {
      return this.list.filter((item: any) => item === "hi");
    },
  },
  actions: {
    async fetchList() {
      const { pending, data, error } = useLazyAsyncData("count", () =>
        $fetch("https://api.punkapi.com/v2/beers", {
          method: "GET",
          params: this.filtersName.beer_name
            ? { ...this.filters, ...this.filtersName }
            : this.filters,
        })
      );
      console.log("pending", pending);
      this.list = data;
      console.log("error", error);

      // this.list = await $fetch("https://api.punkapi.com/v2/beers", {
      //   method: "GET",
      //   params: this.filters,
      // });
    },
  },
});
