<script setup>
import Preview from "../components/HomeView/Preview.vue";
import illustrated1 from "/images/illustrateds/illustrated_1.png"
import illustrated2 from "/images/illustrateds/illustrated_2.png"

const themes = [
  {
    name: "精靈圖鑑",
    path: "/pokedex",
    img: illustrated1,
  },
  {
    name: "劇場版",
    path: "/movie",
    img: illustrated2,
  },
];
</script>

<template>
  <div class="homeContainer">
    <div class="logoImg">
      <img src="/images/PokemonLogo.png" alt="logo" />
    </div>
    <div class="previewContainer" v-for="theme in themes">
      <Preview :name="theme.name" :path="theme.path" :img="theme.img" />
    </div>
  </div>
</template>

<style scoped lang="scss">
::-webkit-scrollbar {
  display: none;
}
.homeContainer {
  overflow-y: scroll;
  width: 80%;
  height: 100%;
}
.logoImg {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 5%;
  img {
    filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.999));
    width: 30%;
  }
}
.previewContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
}
</style>
