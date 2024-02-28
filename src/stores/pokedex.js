import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokedex = defineStore("pokedex", () => {
  //Api資料的起始
  const apiQuantity = ref({
    start: 1,
    end: 20,
  });
  const alltypes = ref([]); //所有屬性
  const pokemonData = ref([]);// 所有寶可夢
  const loadingState = ref(true); //加載頁狀態
  const pokemonPopUpState = ref(false); //彈窗狀態
  const imgLoadingState = ref(true); // 照片加載畫面彈窗

  // 切換彈窗狀態
  function popSwitch() {
    pokemonPopUpState.value = !pokemonPopUpState.value;
  }

  //開始執行單支fetch
  const fetchPokemon = async (start, end) => {
    for (let i = start; i <= end; i++) {
      await getPokemon(i)
    }
    loadingState.value = false; //加載完關loadin畫面
    pokemonData.value.sort((a, b) => a.id - b.id);
  };

  //fetch模板
  const getPokemon = async (n) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`, {
        method: "GET",
      });
      const data = await response.json();
      const tidyAbilities = data.abilities.map((item) => item.ability.name); // 整理ability資料樣式
      const tidyTypes = data.types.map((item) => item.type.name); // 整理type資料樣式
      // 將新資料添加到pokemonData陣列
      pokemonData.value.push({
        id: data.id,
        name: data.name,
        ability: tidyAbilities,
        type: tidyTypes,
        img: `https://pokedex-list.netlify.app/images/official-artwork/front_default/${data.id}.png`,
      });

      tidyTypes.forEach((value) => {
        //整理屬性,把重複的過濾掉
        if (!alltypes.value.includes(value)) {
          alltypes.value.push(value);
        }
      });
    } catch (error) {
      alert("有些錯誤請重整頁面");
    }
  };

  const scrolling = (e) => {
    if (apiQuantity.value.end >= 900) return;
    let scrollHeight = e.target.scrollHeight; // 滾動內容總高
    let clientHeight = e.target.clientHeight; // 視窗可視高
    let scrollTop = e.target.scrollTop; // 滾軸距離頂部距離
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      apiQuantity.value.start += 20; // 增加start值
      apiQuantity.value.end += 20; // 增加end值
      fetchPokemon(apiQuantity.value.start, apiQuantity.value.end);
    }
  };

  fetchPokemon(apiQuantity.value.start, apiQuantity.value.end);

  return {
    alltypes,
    pokemonData,
    loadingState,
    imgLoadingState,
    pokemonPopUpState,
    popSwitch,
    scrolling,
  };
});
