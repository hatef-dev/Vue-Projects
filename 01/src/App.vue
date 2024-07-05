<template>
  <the-header title="Remeber Me"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheResources from "./components/learning-resource/TheResources.vue";
export default {
  components: {
    TheResources,
    TheHeader,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
