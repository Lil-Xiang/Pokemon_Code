<script setup>
const props = defineProps({ movieData: "" });
</script>

<template>
  <div class="swiperContainer">
    <div class="imgContainer">
      <img :src="props.movieData.img" alt="電影海報" />
    </div>
    <div class="textContainer">
      <span class="movieName boldOrangeText">
        片名:
        <p class="thinWhiteText">
          {{ props.movieData.name }}
        </p>
      </span>
      <span class="movieReleaseDate boldOrangeText">
        台灣上映日期:
        <p class="thinWhiteText">
          {{ props.movieData.releaseDate }}
        </p>
      </span>
      <span class="moviePlot boldOrangeText">
        劇情大綱:
        <p class="thinWhiteText">
          {{ props.movieData.plot }}
        </p>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.swiperContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.imgContainer {
  display: flex;
  justify-content: center;
  background-color: var(--black);
  width: 45%;
  height: 99%;
  border-radius: 20px 0 0 20px;
  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
}
.textContainer {
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 99%;
  padding-top: 60px;
  border-radius: 0 20px 20px 0;
  background: linear-gradient(to right, #000000, #383838, #767676);
}
.movieName {
  width: 100%;
  height: 15%;
}
.movieReleaseDate {
  width: 100%;
  height: 15%;
}
.moviePlot {
  width: 100%;
  height: 60%;
  p {
    width: 100%;
    height: 80%;
    overflow-y: scroll;
  }
}
.boldOrangeText {
  font-size: 30px;
  font-weight: bold;
  padding: 10px 0 0 20px;
  color: var(--orange);
}
.thinWhiteText {
  padding: 10px 10px 0 10px;
  font-weight: 500;
  font-size: 20px;
  color: var(--white);
}

@media screen and (max-width: 768px) {
  .swiperContainer {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .imgContainer {
    width: 80%;
    height: 45%;
    border-radius: 20px 20px 0 0;
    img {
      max-width: 400px;
      object-position: bottom;
    }
  }
  .textContainer {
    padding-top: 0;
    width: 80%;
    height: 55%;
    border-radius: 0 0 20px 20px;
    background: linear-gradient(to bottom, #000000, #383838, #767676);
  }
  .movieName {
    height: 20%;
  }
  .movieReleaseDate {
    height: 20%;
  }
  .moviePlot {
    height: 50%;
  }
  .boldOrangeText {
    font-size: 25px;
    padding: 10px 30px 0 30px;
  }
  .thinWhiteText {
    padding: 5px 10px 0 10px;
    font-size: 17px;
  }
}
@media screen and (max-width: 550px) {
  .imgContainer {
    img {
      max-width: 350px;
    }
  }
}
</style>
