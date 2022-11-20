import { defineStore } from "pinia";

export interface Beer {
  name: string;
}

export interface BeerState {
  items: Beer[] | undefined[];
}

export const useBeerStore = defineStore("beerStore", {
  state: () => ({
    items: <any>[],
  }),

  getters: {
    list: (state) => state.items,
  },

  actions: {
    fetchList() {
      const { data } = useFetch("https://api.punkapi.com/v2/beers");
      this.items = data;
    },
  },
});
