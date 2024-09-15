<template>
  <div class="px-5 py-10">
    <form
      @submit="handleSearch"
      class="flex bg-[#fafafa] h-10 border border-purple-800/60 rounded-md overflow-clip"
    >
      <input
        type="text"
        class="w-full h-full pl-4 focus:outline-none"
        v-model="search.data"
      />
      <button
        type="submit"
        class="flex items-center justify-center w-10 border-l"
      >
        <Icon name="mingcute:search-3-line" size="24" />
      </button>
    </form>
    <div
      v-if="!isLoading"
      class="grid grid-cols-1 gap-4 py-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-[#fafafa]"
    >
      <div
        v-for="val in filterData"
        :key="val.id"
        class="flex flex-col border rounded-lg"
      >
        <img :src="val.thumbnail" alt="" class="rounded-t-lg" />
        <div
          class="flex flex-col justify-between w-full h-full gap-3 p-3 text-white"
        >
          <h1 class="text-xl font-extrabold">{{ val.title }}</h1>
          <p class="text-xs">{{ val.short_description.slice(0, 100) }}...</p>
          <div class="flex items-center text-sm">
            Genre :
            <span class="ml-2 px-1.5 py-0.5 rounded-full bg-yellow-400">{{
              val.genre
            }}</span>
          </div>
          <div class="flex items-center justify-between">
            <Icon
              name="material-symbols:window-sharp"
              size="24"
              class="-z-10"
            />
            <nuxt-link :to="`/games/detail/${val.id}`"> Detail </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="grid grid-cols-1 gap-4 py-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-[#fafafa]"
    >
      <div v-for="val in 1" :key="val" class="flex flex-col border rounded-lg">
        <skeleton :height="`200px`" :width="`100%`" />
      </div>
    </div>
    <div class="flex items-center justify-center w-full">
      <Pagination
        v-if="!isLoading"
        :count="pageCount"
        @click-paginate="handlePagination"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const filterData = ref([]);
const isLoading = ref(true);
let currentPage = ref<number>(1);
const search = reactive({
  data: "",
});

const data: any = await $fetch("/api/games");

const pagesize = 8;

onMounted(() => {
  filterData.value = data.slice(0, pagesize);
  isLoading.value = false;
});

const handlePagination = (page: number) => {
  currentPage.value = page;
};

// const debounce = (fn, delay) => {
//   let timeoutId;
//   return (...args) => {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       fn.apply(null, args);
//     }, delay);
//   };
// };

const handleSearch = (e: any) => {
  e.preventDefault();
  isLoading.value = true;
  filterData.value = [];
  if (e.target[0].value === "") {
    filterData.value = data;
  } else {
    filterData.value = data.filter((val: any) => {
      console.log(e.target[0].value.toLowerCase());
      return val.title.toLowerCase().includes(e.target[0].value.toLowerCase());
    });
  }

  isLoading.value = false;
};

watch([() => currentPage.value, () => pagesize], () => {
  isLoading.value = true;
  filterData.value = [];
  filterData.value = data.slice(
    (currentPage.value - 1) * pagesize,
    currentPage.value * pagesize
  );

  isLoading.value = false;
});

const pageCount = Math.ceil(data.length / pagesize);

definePageMeta({
  layout: "main",
});
</script>
