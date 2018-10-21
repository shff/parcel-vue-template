<template>
  <main class="tc mt4 black-80">
    <div class="hello">
      Here:
      <at-checkbox v-model="text" placeholder="Please input" />
    </div>
  </main>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        text: "text",
      };
    },
  };
</script>
