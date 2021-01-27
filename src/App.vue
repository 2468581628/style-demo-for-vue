<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    home: Home,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
