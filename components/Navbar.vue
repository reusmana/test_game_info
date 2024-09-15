<template>
  <div ref="nav" class="sticky top-0 text-white-1">
    <div
      class="flex items-center justify-between h-24 px-5 mx-auto max-w-[1200px]"
    >
      <div class="flex items-center gap-3 md:gap-10">
        <img
          src="/logo.png"
          alt=""
          width="40"
          @click="navigateTo('/')"
          class="cursor-pointer"
        />
        <ul class="flex gap-5 text-xs font-semibold md:text-lg">
          <li @click="navigateTo('/games')" class="cursor-pointer">
            <span>store</span>
          </li>
          <li>
            <span>news</span>
          </li>
          <li>
            <span>media</span>
          </li>
          <li>
            <span>studio</span>
          </li>
        </ul>
      </div>
      <ul class="hidden gap-5 font-semibold md:flex">
        <li>
          <Icon name="mingcute:search-3-line" size="24" />
        </li>
        <li>
          <Icon name="hugeicons:love-korean-finger" size="24" />
        </li>
        <li>
          <Icon name="mdi:cart-plus" size="24" />
        </li>
      </ul>
      <div
        class="relative flex items-center md:hidden"
        @click="isMenuHamburger = true"
      >
        <Icon name="material-symbols:menu" size="24" />
      </div>
      <div
        v-if="isMenuHamburger"
        class="fixed inset-0 z-[99999] flex flex-col items-center justify-center w-full h-full bg-black/90"
      >
        <button
          class="absolute text-white top-3 right-3"
          @click="isMenuHamburger = false"
        >
          <Icon name="ic:baseline-close" size="24" />
        </button>
        <ul class="flex gap-20 font-semibold text-white">
          <li>
            <Icon name="mingcute:search-3-line" size="24" />
          </li>
          <li>
            <Icon name="hugeicons:love-korean-finger" size="24" />
          </li>
          <li>
            <Icon name="mdi:cart-plus" size="24" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const nav = ref(0);
let isMenuHamburger = ref(false);

// watch(isMenuHamburger, () => {
//   if (isMenuHamburger) {
//     document.querySelector("body").style.overflow = "hidden";
//   } else {
//     document.querySelector("body").style.overflow = "";
//     // iwant remove overflow
//   }
// });

const handleScroll = () => {
  if (window.scrollY > 20) {
    nav.value.style.backgroundColor = "rgba(122,68,186,0.9)";
  } else {
    nav.value.style.backgroundColor = "transparent";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
