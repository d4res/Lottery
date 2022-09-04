<script setup>
import { onMounted, ref } from "vue";

const list = ref();

// parseRawList 将原始字符串数组每三个进行分组, 空闲位置置为空字符串
// 例, input: ["1", "2", "3", "4", "5"]  output: [["1", "2", "3"], ["4", "5", ""]]
const parseRawList = (rawData) => {
  const ListSize = Math.ceil(rawData.length / 3);
  let groupedList = new Array(ListSize);
  for (let i = 0; i < ListSize; i++) {
    groupedList[i] = new Array(3).fill("");
  }
  rawData.forEach((item, index) => {
    groupedList[parseInt(index / 3)][index % 3] = item;
  });
  return groupedList;
};

onMounted(() => {
  // 首先从本次electron store中获取信息
  window.electronAPI
    .loadData()
    .then((rawList) => {
      if (rawList === undefined) {
        return;
      }
      const groupedList = parseRawList(rawList);
      list.value = groupedList;
    })
    .catch((err) => {
      console.log(err);
    });
});

// importData 将从electron store提供的本地存储中获取信息并赋予list变量
const importData = async () => {
  const rawList = await window.electronAPI.openFile();
  if (rawList === undefined) {
    return;
  }
  const groupedList = parseRawList(rawList);
  list.value = groupedList;
};

// resetData 将会将list置空并清除本地electron store中的内容
const resetData = async () => {
  list.value = [];
  await window.electronAPI.deleteData();
};
</script>

<template>
  <div>
    <button class="button is-primary" @click="importData()">导入</button>

    <button class="button is-danger" @click="resetData()">清空</button>
  </div>

  <div class="columns" v-for="group in list" :key="group">
    <div class="column">
      <p>{{ group[0] }}</p>
    </div>
    <div class="column">
      <p>{{ group[1] }}</p>
    </div>
    <div class="column">
      <p>{{ group[2] }}</p>
    </div>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}

button {
  width: 20%;
}
.column {
  text-align: center;
}
</style>
