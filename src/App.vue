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
@import "./assets/sass/_animations.scss";
@import "./assets/sass/_variables.scss";
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
	font-weight: 300;
  line-height: 1;
}
h1{
    font-size: 2em;
  }
body{
  margin: 0;
  background-color: $background;
}
html{
  font-size: 16px;
}
hr{
  max-width: 30%;
  background-color: #e6e6e6; height: 1px; border: 0;
}
ul{
  list-style: none;
  padding-left: 0;
}
.rounded-box{
    position: absolute;
    border-radius: 5px;
    padding: 40px;
    background-color: $foreground;
    z-index: 3;
  }
.floating {
  box-shadow: 0 6px 10px 3px rgba(0, 0, 0, 0.18);
}
.flex-container-row{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.flex-container-column{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.contact-buttons-container{
    margin-top: 1.5rem;
  }
.hidden{
    display: none;
  }

</style>
