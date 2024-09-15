<template>
  <div class="grid w-full grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2">
    <div class="flex flex-col">
      <img v-if="image" :src="image" alt="" class="border rounded-lg" />
      <img v-else :src="data.thumbnail" alt="" class="border rounded-lg" />
      <div class="flex flex-row gap-2 py-2 overflow-x-scroll">
        <img
          v-for="val in data.screenshots"
          :key="val.id"
          :src="val.image"
          alt=""
          class="max-w-[150px] w-[150px] border rounded-sm"
          @click="handleImageViewer(val.image)"
        />
      </div>
      <a
        :href="data.game_url"
        class="flex items-center justify-center py-2 bg-yellow-500 text-white-1"
        >Game Link</a
      >
    </div>
    <div class="flex flex-col items-start justify-start text-[#FAFAFA] gap-1">
      <h1 class="text-3xl">{{ data.title }}</h1>
      <client-only>
        <p v-html="data.description"></p>
      </client-only>
      <table class="mt-5">
        <tbody>
          <tr>
            <td>genre</td>
            <td>:</td>
            <td>
              <span>{{ data.genre }}</span>
            </td>
          </tr>
          <tr>
            <td>Platform</td>
            <td>:</td>
            <td>
              <span>{{ data.platform }}</span>
            </td>
          </tr>
          <tr>
            <td>publisher</td>
            <td>:</td>
            <td>
              <span>{{ data.publisher }}</span>
            </td>
          </tr>
          <tr>
            <td>developer</td>
            <td>:</td>
            <td>
              <span>{{ data.developer }}</span>
            </td>
          </tr>
          <tr>
            <td>release_date</td>
            <td>:</td>
            <td>
              <span>{{ data.release_date }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="inline-block mt-5">Minimum System Requitment</h2>
      <table>
        <tbody>
          <tr>
            <td>OS</td>
            <td>:</td>
            <td>{{ data.minimum_system_requirements.os }}</td>
          </tr>
          <tr>
            <td>processor</td>
            <td>:</td>
            <td>{{ data.minimum_system_requirements.processor }}</td>
          </tr>
          <tr>
            <td>memory</td>
            <td>:</td>
            <td>{{ data.minimum_system_requirements.memory }}</td>
          </tr>
          <tr>
            <td>graphics</td>
            <td>:</td>
            <td>{{ data.minimum_system_requirements.graphics }}</td>
          </tr>
          <tr>
            <td>storage</td>
            <td>:</td>
            <td>{{ data.minimum_system_requirements.storage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

let image = ref(null);

const handleImageViewer = (val: string) => {
  image.value = val;
};

definePageMeta({
  layout: "main",
});

const data: any = await $fetch(`/api/games_detail?id=${route.params.id}`);
</script>
