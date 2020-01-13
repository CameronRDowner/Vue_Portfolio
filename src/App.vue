<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  width: 100%;
  height: 100%;
  color: #2c3e50;
}
p, h1, h2, h3, h4, h5{
	color:#4A4E69;
	font-weight: 300;
  line-height: 1;
}
h1{
    font-size: 2em;
  }
body{
  margin: 0;
  background-color: #f8f9fa;
}
html{
  font-size: 16px;
}
hr{
  max-width: 30%;
  background-color: #e6e6e6; height: 1px; border: 0;
}

</style>
