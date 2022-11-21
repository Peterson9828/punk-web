import { defineStore } from "pinia";
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE } from "~/constants";
import { filter } from "rxjs";

export interface Beer {
  name: string;
  image_url: string;
}

const initFIltersState = {
  page: DEFAULT_PAGE,
  per_page: DEFAULT_PAGE_SIZE,
  beer_name: "punk",
};

export const useBeerStore = defineStore("beerStore", {
  state: () => ({
    list: <any>[],
    filters: initFIltersState,
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
          params: this.filters,
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
