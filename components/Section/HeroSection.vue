<template>
  <div
    class="flex flex-col-reverse w-full px-5 py-2 md:flex-row min-h-[80vh] text-white-1"
  >
    <div
      class="md:w-[50%] flex flex-col items-start justify-center w-full gap-5"
    >
      <h1
        class="xl:text-[80px] lg:text-[70px] text-[50px] font-extrabold text-white"
      >
        Let The Game Play
      </h1>
      <p class="text-xs text-white lg:text-lg md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        pariatur tenetur sapiente quasi obcaecati voluptates suscipit magni,
        autem, quam dolore fuga. Quo tenetur, voluptates alias quae placeat illo
        blanditiis beatae adipisci aperiam voluptatem qui distinctio minima iure
        eligendi illum! Nemo architecto ipsa excepturi, omnis sequi delectus hic
        commodi maiores minus.
      </p>
      <div class="flex w-full gap-5 md:pr-10">
        <nuxt-link
          to="/games"
          class="w-full px-5 py-2 text-purple-600 bg-[#FAFAFA] rounded-lg flex justify-center"
        >
          Buy Now
        </nuxt-link>
        <nuxt-link
          to="/games"
          class="w-full px-5 py-2 text-purple-600 bg-[#FAFAFA] rounded-lg flex justify-center"
        >
          Play
        </nuxt-link>
      </div>
      <div>
        <p class="text-white">Avalaible On :</p>
        <div class="flex items-center gap-5 text-white">
          <div class="flex items-center">
            <Icon
              name="material-symbols:window-sharp"
              size="24"
              class="-z-10"
            />
            <p>Windows 10</p>
          </div>
          <div class="flex items-center">
            <Icon name="mdi:apple" size="24" class="-z-10" />
            <p>Mac Os</p>
          </div>
          <div class="flex items-center">
            <Icon name="mdi:steam" size="24" class="-z-10" />
            <p>Steam</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center md:w-[50%]">
      <img src="/home_game.png" alt="" class="object-cover -mb-12" />
    </div>
  </div>
</template>
