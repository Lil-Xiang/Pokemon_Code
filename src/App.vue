<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="mainContainer">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
  .mainContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #274046, #52676c, #958e8e);
  }
</style>
