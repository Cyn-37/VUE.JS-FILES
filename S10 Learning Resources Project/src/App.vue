<template>
  <the-header title="Remember Me"></the-header>
  <navigate-tab></navigate-tab>
</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue';
import NavigateTab from './components/layouts/NavigateTab.vue';

export default {
  components: {
     TheHeader, NavigateTab
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>