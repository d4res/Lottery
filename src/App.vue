<script setup>
// const test = async () => {
//   console.log("test");
//   const fileName = await window.electronAPI.openFile();
//   const res = await window.electronAPI.readFile(fileName);
//   console.log(res);
// };
import BaseHeader from "./components/BaseHeader.vue";
</script>

<template>
  <BaseHeader> </BaseHeader>
  <router-view />
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
