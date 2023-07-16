<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useMovie } from "../stores/move";
import moviePlotVue from "../components/MovieView/moviePlot.vue";

const movieStore = useMovie();
</script>

<template>
  <div class="movieContainer">
    <RouterLink class="backBtnContainer" to="/">
      <button>
        <img src="/images/home.png" alt="主頁">
      </button>
    </RouterLink>
    <div class="movieUp">
      <h1 class="goldenTex">劇場版</h1>
    </div>

    <swiper
      class="swiper"
      :slidesPerView="1"
      :spaceBetween="2"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="[Pagination, Navigation]"
    >
      <swiper-slide v-for="item in movieStore.moveData" :key="item.id">
        <moviePlotVue :movieData="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
.movieContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.backBtnContainer {
  position: absolute;
  width: 110px;
  height: 60px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-size: 30px;
    border-radius: 10px;
    margin: 7px 0 0 10px;
    color: var(--white);
    background-color: var(--orange);
    img {
      height: 80%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.movieUp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  h1 {
    font-size: 35px;
  }
}
.swiper {
  width: 100%;
  height: 90%;
}

@media screen and (max-width: 768px) {
  .backBtnContainer {
    button {
      margin: 10px 0 0 10px;
      cursor: pointer;
      width: 80%;
      height: 80%;
      font-size: 27px;
    }
  }

  .movieUp {
    h1 {
      font-size: 30px;
    }
  }
}
</style>
