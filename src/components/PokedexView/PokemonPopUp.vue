<script setup>
import { usePokedex } from "../../stores/pokedex";

const pokedexStore = usePokedex();
const props = defineProps({ specifyData: "" });
</script>

<template>
  <div class="popBg">
    <div class="container">
      <div class="popUp">
        <div class="name_btn">
          <span>
            {{ props.specifyData.name }}
          </span>
          <button class="exitBtn" @click="pokedexStore.popSwitch">
            Go Back
          </button>
        </div>
      </div>
      <div class="popMiddle">
        <div class="imgContainer">
          <img :src="props.specifyData.img" alt="精靈獸" />
        </div>
        <span
          >ID :
          <p>{{ props.specifyData.id }}</p>
        </span>
      </div>
      <div class="popDown">
        <span class="types"
          >Type :
          <div
            class="typesText"
            v-for="(types, index) in props.specifyData.type"
          >
            <p>{{ index + 1 + "." + types }}</p>
          </div>
        </span>
        <span class="abilities"
          >Ability :
          <div
            class="abilitiesText"
            v-for="(abilities, index) in props.specifyData.ability"
          >
            <p>{{ index + 1 + "." + abilities }}</p>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
::-webkit-scrollbar {
  display: none;
}
.popBg {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.75);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
  height: 480px;
  border-radius: 30px;
  background-color: var(--white);
}
.popUp {
  width: 100%;
  height: 15%;
  margin-top: 10px;
}
.name_btn {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  span {
    text-transform: capitalize;
    font-size: 30px;
    color: var(--navyBlue);
  }
}
.exitBtn {
  margin: 0 30px 0 30px;
  width: 22%;
  height: 70%;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: var(--white);
  background-color: var(--orange);
}
.popMiddle {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 62%;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 28px;
    color: var(--navyBlue);
    p {
      padding-left: 10px;
      font-size: 25px;
    }
  }
}
.imgContainer {
  display: flex;
  max-width: 450px;
  height: 85%;
  margin-top: 5px;
  img {
    filter: drop-shadow(0px 0px 15px rgba(18, 27, 63, 0.999));
    width: 100%;
    object-position: center;
    object-fit: contain;
  }
}
.popDown {
  display: flex;
  justify-content: center;
  width: 90%;
  height: 20%;
  span {
    font-size: 24px;
    color: var(--navyBlue);
  }
}
.types {
  padding: 2px 0 0 15px;
  width: 45%;
  height: 90%;
  overflow-y: scroll;
}
.typesText {
  p {
    margin-left: 10px;
    font-size: 20px;
    color: var(--navyBlue);
  }
}
.abilities {
  padding: 2px 0 0 15px;
  width: 45%;
  height: 90%;
  overflow-y: scroll;
}
.abilitiesText {
  p {
    margin-left: 20px;
    font-size: 20px;
    color: var(--navyBlue);
  }
}
</style>
