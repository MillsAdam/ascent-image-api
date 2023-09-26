<template>
  <div id="app">
    <ImageScroll />
    <ImageList />
  </div>
</template>

<script>
import ImageList from './views/ImageList.vue';
import ImageScroll from './views/ImageScroll.vue';

export default {
    components: {
      ImageList,
      ImageScroll
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
