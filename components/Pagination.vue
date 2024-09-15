<template>
  <div class="flex gap-3 text-[13px] font-semibold text-slate-3 items-center">
    <button
      v-if="isActive > 1"
      @click="() => handlePage(isActive - 1)"
      class="text-grey-1"
    >
      Prev
    </button>
    <button v-else class="cursor-not-allowed disabled text-grey-2">Prev</button>
    <ul v-if="pageNumber.length > 0" class="flex items-center gap-1">
      <li v-for="(val, index) in pageNumber" :key="index">
        <button
          class="paginate"
          :class="`${isActive === val ? 'active' : ''}`"
          @click="() => handlePage(val)"
        >
          {{ typeof val === "number" ? val : "..." }}
        </button>
      </li>
    </ul>
    <button
      v-if="isActive < count"
      @click="() => handlePage(isActive + 1)"
      class="text-grey-1"
    >
      Next
    </button>
    <button v-else class="cursor-not-allowed disabled text-grey-2">Next</button>
  </div>
</template>

<script setup>
const props = defineProps(["count"]);
const emitPaginate = defineEmits(["click-paginate"]);

const { count } = toRefs(props);

const isActive = ref(1);
const pageNumber = ref([]);

onMounted(() => {
  const pageNumbers = [];
  if (count.value <= 4) {
    for (let i = 1; i <= count.value; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (isActive.value <= 3) {
      pageNumbers.push(1, 2, 3, "...", count.value);
    } else if (isActive.value >= count.value - 2) {
      pageNumbers.push(
        1,
        "...",
        count.value - 3,
        count.value - 2,
        count.value - 1,
        count.value
      );
    } else {
      pageNumbers.push(
        1,
        "...",
        isActive.value - 1,
        isActive.value,
        isActive.value + 1,
        "...",
        count.value
      );
    }
  }
  pageNumber.value = pageNumbers;
});

const handleActivePage = () => {
  const pageNumbers = [];
  // Display pages logic with ellipses
  if (count.value <= 4) {
    for (let i = 1; i <= count.value; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (isActive.value <= 3) {
      pageNumbers.push(1, 2, 3, "...", count.value);
    } else if (isActive.value >= count.value - 2) {
      pageNumbers.push(1, "...", count.value - 2, count.value - 1, count.value);
    } else {
      pageNumbers.push(
        1,
        "...",
        isActive.value - 1,
        isActive.value,
        isActive.value + 1,
        "...",
        count.value
      );
    }
  }
  //   isActive.value = pageNumbers;
  pageNumber.value = pageNumbers;
};

const handlePage = (page) => {
  if (typeof page !== "number") {
  } else {
    isActive.value = page;
    handleActivePage();
    emitPaginate("click-paginate", page);
  }
};
</script>
