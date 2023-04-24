<template>
  <div id="app">
    <div class="search-content">

    </div>
    <suggest target=".search-content"></suggest>

  </div>
</template>
  
<script setup lang='ts'>
import suggest from './components/suggest/index.vue'

</script>
  
<style lang="scss">
.search-content {
  width: 400px;
  height: 40px;
  border: 1px solid #000;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
}
</style>