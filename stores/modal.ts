import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: "modals",
  state: () => ({
    isOpen: false,
  }),
  actions: {
    setisOpen(status: boolean) {
      this.isOpen = status;
    },
  },
});
