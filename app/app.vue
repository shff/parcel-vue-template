<template>
  <main>
    <img src="assets/logo.png">
    <div class="hello">
      <h1>Vue.js</h1>
    </div>
  </main>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "App",
  });
</script>

<style lang="stylus" scoped>
  main
    font-family "Avenir", Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
</style>
