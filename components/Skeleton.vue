<template>
  <hr
    style="
      width: 100%;
      border-radius: 10px;
      border: none;
      background-color: #f6f7f8;
      background: linear-gradient(to right, #9ed7ff, #fafafa, #9ed7ff);
      background-size: 800px 50px;
    "
  />
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "20px",
  },
});

onMounted(() => {
  const element = document.querySelector("hr");
  if (element) {
    element.style.height = props.height;
    // element.style.animation = "loaderanimate 3s linear infinite";
  }
});
</script>
