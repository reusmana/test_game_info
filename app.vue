<template>
  <div>
    <div class="absolute z-10 w-full">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <div
      class="realtive bg-[url('/games_bg.jpg')] bg-cover w-full min-h-screen fixed inset-0"
    >
      <div
        class="absolute w-full h-full rounded-lg shadow-lg bg-purple-800/30 backdrop-blur-lg"
      ></div>
    </div>
  </div>
</template>

<style>
@keyframes loaderanimate {
  0% {
    background-position: -800px 0px;
  }

  100% {
    background-position: 800px 0px;
  }
}

.loader hr {
  border-radius: 20px;
  border: none;
  background-color: #f6f7f8;
  background: linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff);
  background-size: 800px 50px;
  height: 20px;
  animation: loaderanimate 3s linear infinite;
}
</style>
