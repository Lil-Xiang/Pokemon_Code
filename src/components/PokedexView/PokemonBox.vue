<script setup>
import { ref, computed } from "vue";
import { usePokedex } from "../../stores/pokedex";
import PokemonPopUp from "./PokemonPopUp.vue";

const pokedexStore = usePokedex();
const popData = ref("");
const props = defineProps({ specifyType: "" });
const computedSpecifyType = computed(() => {
  if (props.specifyType) {
    const specifyPokemon = pokedexStore.pokemonData.filter((val) =>
      val.type.includes(props.specifyType)
    );
    return specifyPokemon;
  }
  return pokedexStore.pokemonData;
});

function selectPokemon(data) { //打開彈窗, 並把資料丟進彈窗顯示
  pokedexStore.popSwitch();
  popData.value = data;
}
function onImageLoad() { //照片加載完時觸發,關掉加載畫面
  pokedexStore.imgLoadingState = false
}
</script>

<template>
  <div class="pokemon" v-for="data in computedSpecifyType" :key="data.id">
    <div class="pokemonUp" @click="selectPokemon(data)">
      <div v-if="pokedexStore.imgLoadingState" class="loading-spinner" />
      <img v-show="!pokedexStore.imgLoadingState" class="pokemonUpImg" @load="onImageLoad"  :src="data.img" alt="精靈獸"/>
    </div>
    <div class="pokemonDown">
      <span>NO.{{ data.id }}</span>
      <p>{{ data.name }}</p>
    </div>
  </div>
  <div class="pokemonN" />
  <div class="pokemonN" />
  <div class="pokemonN" />
  <div class="pokemonN" />
  <Transition name="popAnimation">
    <PokemonPopUp
      v-if="pokedexStore.pokemonPopUpState"
      :specifyData="popData"
    />
  </Transition>
</template>

<style scoped lang="scss">
.pokemonN {
  min-width: 200px;
  width: 17%;
  height: 30%;
}
.pokemon {
  min-width: 200px;
  max-height: 200px;
  width: 16%;
  height: 30%;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.7s;
}
.pokemon:hover {
  background-color: var(--navyBlue);
}
.pokemonUp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
}
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid var(--white);
  border-top: 5px solid var(--navyBlue);
  border-radius: 50%;
  animation: loading-animation 0.8s ease-in-out infinite;
}
@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }  
}
.pokemonUpImg {
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  object-position: center;
  object-fit: contain;
}


.pokemonDown {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
  color: var(--white);
  span {
    color: var(--white);
    font-size: 13px;
  }
  p {
    font-size: 17px;
  }
}

.popAnimation-enter-active {
  animation: bottom-in 0.3s ease-in;
}
.popAnimation-leave-active {
  animation: bottom-in 0.3s reverse ease-in;
}
@keyframes bottom-in {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%;
  }
}
</style>
