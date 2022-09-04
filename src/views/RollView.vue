<script setup>
import { onMounted, ref } from "vue";

const START = "开始";
const END = "停止";
const list = ref();
const candidate = ref();
const btnInfo = ref();
const candidateList = ref([]);
let timer = null;

onMounted(() => {
  btnInfo.value = START;
  window.electronAPI.loadData().then((data) => {
    list.value = data;
  });
});

const startRoll = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    const random = Math.floor(Math.random() * list.value.length);
    candidate.value = list.value[random];
  }, 50);
};

const endRoll = () => {
  clearInterval(timer);
};

const toggleRoll = () => {
  if (btnInfo.value === START) {
    if (list.value.length === 0) {
      return;
    }
    startRoll();
    btnInfo.value = END;
  } else {
    endRoll();
    candidateList.value.push(candidate.value);
    list.value = list.value.filter((item) => {
      return item != candidate.value;
    });
    btnInfo.value = START;
  }
};

const reset = async () => {
  candidate.value = "";
  list.value = await window.electronAPI.loadData();
  candidateList.value = [];
};
</script>

<template>
  <div>
    <p class="box">{{ candidate }}</p>

    <div>
      <button class="button is-primary" @click="toggleRoll()">
        {{ btnInfo }}
      </button>
      <button class="button is-danger" @click="reset()">重置</button>
    </div>

    <hr />
    <p class="block" v-for="name in candidateList" :key="name">{{ name }}</p>
  </div>
</template>

<style scoped>
p {
  text-align: center;
  margin: 0 25%;
}
div {
  text-align: center;
}
button {
  width: 20%;
}
.box {
  padding: 0.5rem;
}
</style>
