<template lang="html">
  <div id="nav-bar-mobile">
    <div id="nav-menu-backdrop" @click="toggleMenu" v-show="navMenuVisible"></div>
    <div id="nav-menu" class="slide-in-left" v-show="navMenuVisible">
      <div id="nav-close-button"><Button :button="closeButton" v-on:buttonClicked="toggleMenu"/></div>
      <nav>
        <ul>
          <li><a href="#about" @click="toggleMenu">About</a></li>
          <li><a href="#projects" @click="toggleMenu">Projects</a></li>
          <li><a href="#technologies" @click="toggleMenu">Technologies</a></li>
          <li><a href="#education" @click="toggleMenu">Education</a></li>
        </ul>
      </nav>
    </div>
    <a id="nav-menu-button" class="floating-high"><div><i class="fas fa-bars" @click="toggleMenu"></i></div></a>
  </div>
</template>

<script lang="js">
  import Button from "./Button.vue"
  import colorVariables from "../assets/sass/_variables.scss"
  export default  {
    name: 'nav-bar-mobile',
    props: [],
    components: {
      Button
    },
    mounted () {

    },
    data () {
      return {
        navMenuVisible : false,
        closeButton: {
            iconClasses: "fas fa-times",
            contentColor: "white",
            buttonColor: colorVariables.primary,
            boxShadow: true
          }
      }
    },
    methods: {
      toggleMenu : function (){
        this.navMenuVisible = !this.navMenuVisible;
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../assets/sass/_breakpoints.scss";
@import "../assets/sass/_variables.scss";
  #nav-bar-mobile {
    display: none;
    margin: 0 auto;
    position: fixed;
    left: 0.25rem;
    bottom: 0.25rem;
    z-index: 4;
    @media #{$small-medium}{
      display: inline-block;
    }
  }
  #nav-menu-button{
    div{
      display: table;
      padding: 1.3rem;
      background-color: black;
      opacity: 0.8;
      border-radius: 50px; 
    }
    i{
      display: table-cell;
      vertical-align: middle;
      color: white;
      font-size: 2rem;
    }
  }
  #nav-menu{
    border-top-right-radius: 50px;
    position: fixed;
    z-index: 5;
    bottom: 0;
    left: 0;
    background-color: $primary;
    li{
      text-align: left;
      margin: 3rem 3.5rem 3rem 1rem;
    }
    a{
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }
  #nav-close-button{
    position: fixed;
    bottom: 19rem;
    left: 9rem;
  }
  #nav-menu-backdrop{
    position: fixed;
    z-index: 5;
    opacity: 0.5;
    background-color: black;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
  }
</style>
