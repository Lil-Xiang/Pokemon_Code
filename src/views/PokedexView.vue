<script setup>
import { computed, ref } from "vue";
import { usePokedex } from "../stores/pokedex";
import PokemonBox from "../components/PokedexView/PokemonBox.vue";
import LoadingPage from "./LoadingPage.vue";

const pokedexStore = usePokedex();
const clickType = ref('');
const computedAllTypes = computed(() => {
  return pokedexStore.alltypes ? pokedexStore.alltypes : "-";
});

function specifyType(type='') {
  clickType.value = type;
}
</script>

<template>
  <LoadingPage v-if="pokedexStore.loadingState" />
  <div class="pokedexContainer">
    <aside class="filterBox">
      <div class="backContainer">
        <RouterLink to="/">
          <button>
            <img src="/images/home.png" alt="主頁">
          </button>
        </RouterLink>
      </div>
      <div class="listContainer">
        <span>分類</span>
        <ul>
          <li @click="specifyType()">All</li>
        </ul>
        <ul v-for="types in computedAllTypes" :key="types">
          <li @click="specifyType(types)">{{ types }}</li>
        </ul>
      </div>
    </aside>
    <main class="showBox">
      <div class="pokemonText">
        <h1>精靈圖鑑</h1>
      </div>
      <div class="pokemonBox">
        <PokemonBox :specifyType="clickType" />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.pokedexContainer {
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #1e2a5f, #60688c, #93949a);
}
.filterBox {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  height: 100vh;
}
.backContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 110px;
    height: 60px;
    font-size: 30px;
    border-radius: 10px;
    color: var(--white);
    background-color: var(--orange);
    img {
      height: 80%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.listContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: var(--white);
    width: 100%;
    height: 8%;
  }
  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 21px;
    margin-top: 6px;
    width: 90px;
    height: 50px;
    background-color: var(--navyBlue);  
    color: var(--white);
    border-radius: 5px;
    transition: 0.5s;
  }
  li:hover {
    font-size: 24px;
    background-color: var(--darkBlue);  
  }
}
.showBox {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
}
.pokemonText {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  h1 {
    color: var(--white);
    font-size: 35px;
  }
}
.pokemonBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
  width: 100%;
  height: 85%;
  overflow-y: scroll;
}
@media screen and (max-width: 580px) {
  .backContainer {
    button {
      width: 90px;
      height: 45px;
      font-size: 23px;
      border-radius: 10px;
    }
  }
  .listContainer {
    span {
      font-size: 25px;
    }
    li {
      font-size: 18px;
      margin-top: 10px;
      width: 70px;
      height: 40px;
    }
    li:hover {
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 470px) {
  .backContainer {
    button {
      width: 70px;
      height: 35px;
      font-size: 20px;
      border-radius: 8px;
    }
  }
  .listContainer {
    span {
      font-size: 23px;
    }
    li {
      font-size: 17px;
      margin-top: 10px;
      width: 60px;
      height: 30px;
    }
    li:hover {
      font-size: 19px;
    }
  }
}
</style>
