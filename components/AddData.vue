<template>
  <div
    class="fixed inset-0 flex items-start justify-center w-full py-10 overflow-y-auto bg-black/50 z-[9999999999] px-2"
    @click="emit('close')"
  >
    <form
      @submit="handleData"
      class="max-w-lg w-full bg-white-1 min-h-[300px] rounded-md p-5"
      @click.stop
    >
      <h1 class="text-3xl text-center">Input Data</h1>
      <label for="" class="flex flex-col">
        <span class="text-lg">Title</span>
        <input
          type="text"
          v-model="data.title"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">status</span>
        <select
          name=""
          id=""
          v-model="data.status"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        >
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">short description</span>
        <textarea
          name=""
          id=""
          v-model="data.short_description"
          class="h-20 px-2 border rounded focus:outline-none border-slate-4"
        ></textarea>
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">long description</span>
        <textarea
          name=""
          id=""
          v-model="data.description"
          class="h-20 px-2 border rounded focus:outline-none border-slate-4"
        ></textarea>
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Game URL</span>
        <input
          type="text"
          v-model="data.game_url"
          placeholder="https://www.mmobomb.com/open/twin-saga"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Genre</span>
        <input
          type="text"
          v-model="data.genre"
          placeholder="MMROPG"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Platform</span>
        <input
          type="text"
          v-model="data.platform"
          placeholder="Windows"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Publisher</span>
        <input
          type="text"
          v-model="data.publisher"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Developer</span>
        <input
          type="text"
          v-model="data.developer"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Release Date</span>
        <input
          type="date"
          v-model="data.release_date"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <h2>Minimum Requirements</h2>
      <label for="" class="flex flex-col">
        <span class="text-lg">OS</span>
        <input
          type="text"
          v-model="data.minimum_system_requirements.os"
          placeholder="Windows XP SP3 / Vista / Win7 / Win8 / Win10"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Processor</span>
        <input
          type="text"
          v-model="data.minimum_system_requirements.processor"
          placeholder="Intel Pentium4 2.8 GHz or higher / AMD K8 2600+ or higher"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Memory</span>
        <input
          type="text"
          v-model="data.minimum_system_requirements.memory"
          placeholder="3 GB"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Graphics</span>
        <input
          type="text"
          v-model="data.minimum_system_requirements.graphics"
          placeholder="nVidia GeForce 8400, Radeon X1600 or higher"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Storage</span>
        <input
          type="text"
          v-model="data.minimum_system_requirements.storage"
          placeholder="6 GB"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Thumbnail</span>
        <input
          type="file"
          @change="handleThumbnail"
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <label for="" class="flex flex-col">
        <span class="text-lg">Screenshots</span>
        <input
          type="file"
          @change="handleScreenshots"
          multiple
          class="h-8 px-2 border rounded focus:outline-none border-slate-4"
          required
        />
      </label>
      <input
        type="submit"
        class="w-full h-8 mt-5 bg-yellow-500 rounded-md text-white-1"
        value="Submit"
      />
    </form>
  </div>
</template>

<script setup>
const emit = defineEmits(["submit-data", "close"]);
import { randomID } from "~/utils/random.ts";
import { useDataStore } from "@/stores/data";
const store = useDataStore();
const data = reactive({
  id: randomID(),
  title: "s",
  status: "s",
  short_description: "s",
  description: "s",
  game_url: "s",
  genre: "s",
  platform: "s",
  publisher: "s",
  developer: "s",
  release_date: "s",
  minimum_system_requirements: {
    os: "s",
    processor: "s",
    memory: "s",
    graphics: "s",
    storage: "s",
  },
  thumbnail: "",
  screenshots: [],
  source: "local",
});

const handleThumbnail = (e) => {
  data.thumbnail = e.target.files[0];
};
const handleScreenshots = (e) => {
  for (let i = 0; i < e.target.files.length; i++) {
    data.screenshots.push(e.target.files[i]);
  }
};

const handleData = async (e) => {
  e.preventDefault();
  store.setDataNew(data);
  emit("submit-data");
};
</script>
