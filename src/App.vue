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
  color: $off-black;
}

h1, h2, h3{
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
section {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.rounded-box{
    position: absolute;
    border-radius: 10px;
    padding: 2.7rem;
    background-color: $foreground;
    z-index: 3;
    margin: auto;
    box-sizing: border-box;
    @media #{$small}{
      width: 78%;
      padding: 2.5rem 0 2.5rem 0;
      max-width: 100%;
    }
  }
.floating-high {
  box-shadow: 9px 9px 19px 4px rgba(0,0,0,0.3);
}
.floating-low{
  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.43);
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
    opacity: 0;
}
.hidden-from-flow{
  display: none;
}
.responsive-margin{
  margin: 0 3.5rem 3.5rem 3.5rem;
  @media #{$small-medium}{
    margin: 0 0.5rem 0.5rem 0.5rem;
  }
}
.responsive-padding{
  padding: 4rem 4rem;
  @media #{$small-medium}{
    padding: 1.5rem 1.5rem;
  }
}


</style>
