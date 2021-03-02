<template lang="html">
<div id="nav-bar" class="nav-bar-absolute">
  <div id="nav-bar-wrapper">
  <a v-on:click="scrollToTop"><h1 id="logo">CD</h1></a>
    <div>
    <nav>
      <ul class="nav-links-container">
        <li class="nav-link"><a href="#about" class="underline-from-center">About</a></li>
        <li class="nav-link"><a href="#projects" class="underline-from-center">Projects</a></li>
        <li class="nav-link"><a href="#technologies" class="underline-from-center">Technologies</a></li>
        <li class="nav-link"><a href="#education" class="underline-from-center">Education</a></li>
      </ul>
    </nav>
    <div id="resume-button"><Button :button="resumeButton" v-on:buttonClicked="buttonHelper.openExternalLink(resumeButton.hrefUrl)" /></div>
    </div>
    </div>
</div>
</template>

<script lang="js">
  import Button from "./Button.vue";
  import colorVariables from "../assets/sass/_variables.scss";
  import ButtonHelper from "../models/ButtonHelper.js";
  export default  {
    name: 'nav-bar',
    components: {
      Button
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        buttonHelper: new ButtonHelper(),
        resumeButton:{
            iconClasses: "fas fa-file-download",
            contentColor: "white",
            buttonColor: colorVariables.primary,
            hrefUrl: "https://drive.google.com/uc?export=download&id=1kLNT_7LsTEMp2PZajr4CNHmDsCt0vH2a",
            text:"Resume",
            contentSize: "0.8rem",
            padding: "0.2rem 0.8rem",
            altStyling: true
          },

      }
    },
    methods: {
      scrollToTop : function(){
        window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
 @import "../assets/sass/_variables.scss";
 @import "../assets/sass/_breakpoints.scss";
  #nav-bar {
    margin: 0 auto;
    box-sizing: border-box;
    @media #{$small-medium}{
      display: none;
    }
  }
  .nav-links-container{
    z-index: 4;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0;
  }
  .nav-link{
    text-align: left;
    margin: 0rem 1.5rem 0rem 1.5rem;
    a{
      text-decoration: none;
      font-size: 1rem;
      padding: 0.2rem 0;
    }
  }
  .nav-bar-absolute{
    padding: 1rem 2rem;
    position: absolute;
    width: 100%;
    a{
        color: white;
    }
    
}
.nav-bar-fixed{
    padding: 0.7rem 2rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: $primary;
    z-index: 3;
    max-width: 60rem;
    border-bottom-left-radius: 1.3rem;
    border-bottom-right-radius: 1.3rem;
    -webkit-box-shadow: 9px 9px 19px 4px rgba(0,0,0,0.3);
    -moz-box-shadow: 9px 9px 19px 4px rgba(0,0,0,0.3);
    box-shadow: 9px 9px 19px 4px rgba(0,0,0,0.3);
    -webkit-animation: slide-in-top 0.5s ease-in-out forwards;
    animation: slide-in-top 0.5s ease-in-out forwards;
    a{
        color: white;
        font-weight: 500;
    }
}
#resume-button{
  display: inline-block;
  width: 7rem;
}
#logo{
  font-size: 1.7rem;
  font-style: italic;
  font-family: 'Montserrat';
  color: white;
  margin: 0;
  cursor: pointer;
}
#nav-bar-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
nav{
  display: inline-block;
}
</style>
