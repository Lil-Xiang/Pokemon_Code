import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePokedex = defineStore("pokedex", () => {
  const apiQuantity = 900; //要拿幾筆Api資料
  const alltypes = reactive([]); //所有屬性
  const dataPromises = reactive([]);//要PromiseAll的Fetch陣列
  const pokemonData = reactive(
    Array.from({ length: apiQuantity }, () => ({
      id: "",
      name: "",
      ability: "",
      type: "",
      img: "",
    }))
  );
  const loadingState = ref(true); //加載頁狀態
  const pokemonPopUpState = ref(false); //彈窗狀態
  const imgLoadingState = ref(true); // 照片加載畫面彈窗

  function popSwitch() {// 切換彈窗狀態
    pokemonPopUpState.value = !pokemonPopUpState.value;
  }

  const fetchPokemon = async () => {//開始執行單支fetch
    for (let i = 1; i <= apiQuantity; i++) {
      if (i <= 30) {
        dataPromises.push(getPokemon(i));        
      } else {
        getPokemon(i)
      }
    }
    await Promise.all(dataPromises);
    loadingState.value = false;//加載完關loadin畫面
  };

  const getPokemon = async (n) => {//fetch模板
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`, {
        method: "GET",
      });
      const data = await response.json();
      const tidyAbilities = data.abilities.map((item) => item.ability.name);// 整理ability資料樣式
      const tidyTypes = data.types.map((item) => item.type.name);// 整理type資料樣式
      pokemonData[n - 1].id = data.id;
      pokemonData[n - 1].name = data.name;
      pokemonData[n - 1].ability = tidyAbilities;
      pokemonData[n - 1].type = tidyTypes;
      pokemonData[n - 1].img = `https://pokedex-list.netlify.app/images/official-artwork/front_default/${data.id}.png`;

      tidyTypes.forEach((value) => {//整理屬性,把重複的過濾掉
        if (!alltypes.includes(value)) {
          alltypes.push(value);
        }
      });
    } catch (error) {
      alert("有些錯誤請重整頁面");
    }
  };
  fetchPokemon();

  return {
    apiQuantity,
    alltypes,
    pokemonData,
    loadingState,
    imgLoadingState,
    pokemonPopUpState,
    popSwitch,
    fetchPokemon,
    getPokemon,
  };
});
