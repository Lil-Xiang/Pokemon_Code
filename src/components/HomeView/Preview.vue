<script setup>
const props = defineProps({
  name: String,
  path: String,
  img: String,
});
</script>

<template>
  <div class="describe">
    <span>{{ props.name }}</span>
  </div>
  <RouterLink class="preview" :to="props.path">
    <img :src="props.img" alt="預覽圖" />
  </RouterLink>
</template>

<style scoped lang="scss">
.describe {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  span {
    color: var(--white);
    font-size: 50px;
    font-weight: bold;
  }
}
.preview {
  width: 75%;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
  img {
    opacity: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 1s;
  }
  img:hover {
    transform: scale(105%);
    opacity: 100%;
  }
}
@media screen and (max-width: 768px) {
  .describe {
    span {
      font-size: 30px;
    }
  }
}
</style>
