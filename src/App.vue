<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

@media only screen and (min-width: 436px) {
  #app {
    widows: 100%;
    height: auto;
    background: #fff;
  }
}
</style>
