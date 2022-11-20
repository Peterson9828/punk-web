import { defineStore } from "pinia";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export interface TodoState {
  items: Todo[] | undefined[];
}

const state = (): TodoState => ({
  items: [],
});

const getters = {
  getById: (state: TodoState) => (id: string) => {
    return state.items;
  },
};
const actions = {};

export const useTodoStore = defineStore("todoStore", {
  state,
  getters,
  actions,
});
