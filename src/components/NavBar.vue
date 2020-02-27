<template lang="html">
<div id="nav-bar" class="nav-bar-absolute">
  <h1 id="logo">CD</h1>
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
</template>

<script lang="js">
  import colorVariables from "../assets/sass/_variables.scss";
  import ButtonHelper from "../models/ButtonHelper.js";
  export default  {
    name: 'nav-bar',
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
            hrefUrl: "https://docs.google.com/document/d/14EKr-8gt5VWqWSdxVEhmRJofBPEyvn71atU7G04D1U4/export?format=pdf",
            text:"Resume",
            contentSize: "0.9rem",
            padding: "0.4rem",
          },

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
 @import "../assets/sass/_variables.scss";
  #nav-bar {
    h2{
      position: absolute;
      left: 1.5rem;
      top: 0;
      color: white;
    }
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .nav-links-container{
    z-index: 4;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0.6rem 0rem;
    margin-right: 10rem;  
    width: 20rem;
  }
  .nav-link{
    text-align: left;
    margin: 0rem 1rem 0rem 1rem;
    a{
      text-decoration: none;
      font-size: 1rem;
      padding: 0.2rem 0;
    }
  }
  #dummy-links-container{
    display: inline-block;
    width: 27rem;
    height: 1rem;
  }
  .nav-bar-absolute{
    position: absolute;
    width: 100%;
    a{
        color: white;
    }
    
}
.nav-bar-fixed{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: $primary;
    z-index: 3;
    width: 60rem;
    border-bottom-left-radius: 1.3rem;
    border-bottom-right-radius: 1.3rem;
    box-shadow: 0 6px 10px 3px rgba(0, 0, 0, 0.18);
    -webkit-animation: slide-in-top 0.5s ease-in-out forwards;
    animation: slide-in-top 0.5s ease-in-out forwards;
    a{
        color: white;
        font-weight: 500;
    }
}
#resume-button{
position: absolute;
right: 2rem;
}
#logo{
  font-size: 1.7rem;
  font-style: italic;
  font-family: 'Montserrat';
  color: white;
  margin-right: 25rem;
}
</style>
