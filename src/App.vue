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
@import "./assets/sass/_breakpoints.scss";
body{
  background: rgb(250,252,255);
  background: linear-gradient(121deg, rgba(250,252,255,1) 11%, rgba(97,97,97,1) 100%);
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  height: 100%;
  color: #2c3e50;
}

h1, h2, h3, h4, h5{
	font-weight: 600;
  line-height: 1;
}
p{
  line-height: 2.3rem;
  font-weight: 400;
}
h1{
    font-size: 2em;
  }
body{
  margin: 0;
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
    border-radius: 10px;
    padding: 3rem;
    background-color: $foreground;
    z-index: 3;
    margin: auto;
    box-sizing: border-box;
    @media #{$small}{
      width: 78%;
      padding: 2rem 0 2rem 0;
      max-width: 100%;
    }
  }
.floating {
  box-shadow: 15px 10px 30px 0px rgba(135, 149, 177, 0.26);
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
    width: 13rem;
    margin: 1.5rem auto 0 auto;
}
.hidden{
    display: none !important;
}
.width-limit{
  max-width: 53rem;
  margin: 0 auto;
}

</style>
