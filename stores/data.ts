import { defineStore } from "pinia";

type Data = {
  id: string;
  title: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  source: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  thumbnail: File | string;
  screenshots: File[];
};

export const useDataStore = defineStore("data", {
  state: (): Data => ({
    id: "",
    title: "",
    status: "",
    short_description: "",
    description: "",
    game_url: "",
    genre: "",
    platform: "",
    publisher: "",
    developer: "",
    release_date: "",
    source: "local",
    minimum_system_requirements: {
      os: "",
      processor: "",
      memory: "",
      graphics: "",
      storage: "",
    },
    thumbnail: "",
    screenshots: [],
  }),
  getters: {
    getData: (state) => state,
  },
  actions: {
    setDataNew(data: any) {
      this.$state = data;
    },
  },
});
