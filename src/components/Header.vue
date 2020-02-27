<template lang="html">

  <header>
    <div class="banner" v-observe-visibility="{callback: handleNavBarPosition, once: false, intersection: {threshold: 0.1}}">
      <vue-aos animation-class="slide-in-top" threshold="0.2">
        <div class="rounded-box floating">
          <img src="../assets/images/profile.jpg" alt="profile picture">
          <h1>Cameron Downer</h1>
          <h2>Front End Developer</h2>
          <div class="flex-container-row contact-buttons-container">
            <Button :button="contactButton" v-on:buttonClicked="buttonHelper.emitEventBus(`contact-modal-open-clicks`)" />
            <Button :button="githubButton" v-on:buttonClicked="buttonHelper.openExternalLink(githubButton.hrefUrl)"/>
            <Button :button="linkedinButton" v-on:buttonClicked="buttonHelper.openExternalLink(linkedinButton.hrefUrl)"/>
          </div>
      </div>
      </vue-aos>
      <NavBar/>
      <div id="banner-text">
          <h1>Hi My Name Is Cameron.</h1>
          <h3>
            I am a developer with a passion for <b>clean maintainable</b> code, <b>responsive</b> designs, and <b>memorable</b> user experiences.
          </h3>
        </div>
    </div>
    </header>

</template>

<script lang="js">
  import NavBar from "../components/NavBar.vue";
  import Button from "./Button.vue";
  import ButtonHelper from "../models/ButtonHelper.js"
  import colorVariables from "../assets/sass/_variables.scss";
  export default  {
    name: 'Header',
    components: {
      Button,
      NavBar
    },
    props: [],
    mounted () {

    },
    created(){
    },
    data () {
      return {
          buttonHelper: new ButtonHelper(),
          contactButton: {
            iconClasses: "fas fa-envelope",
            contentColor: "white",
            buttonColor: colorVariables.yellow
          },
          githubButton: {
            iconClasses: "fab fa-github",
            contentColor: "white",
            buttonColor: colorVariables.github,
            hrefUrl : "https://github.com/CameronRDowner"
          },
          linkedinButton:  { 
            iconClasses: "fab fa-linkedin-in",
            contentColor: "white",
            buttonColor: colorVariables.linkedin,
            hrefUrl : "https://www.linkedin.com/in/CameronRDowner"
          }
        
      }
    },
    methods: {
      handleNavBarPosition : function (isVisible){
        let navBar = document.getElementById("nav-bar");
        if(isVisible){
          navBar.classList.add("nav-bar-absolute");
          navBar.classList.remove("nav-bar-fixed");
        }
        else{
          navBar.classList.add("nav-bar-fixed");
          navBar.classList.remove("nav-bar-absolute");
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../assets/sass/_variables.scss";
@import "../assets/sass/_breakpoints.scss";
   .banner{
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 25rem;
    background: $primary;
    border-bottom-left-radius: 1.9rem;
  }
  header{
    margin-bottom: 5.2rem;
    .rounded-box{
      font-size: 1rem;
      top: 80px;
      img{
        max-width: 8.2rem;
        border-radius: 100%;
        @media #{$medium}{
          
        }
      }
      h1{
        color: #212529;
        font-size: 2.0em;
        margin: 0.25em 0;
      }
      h2{
        font-size: 1.2em;
        font-weight: 500;
        margin: 0.25em 0;
        color:$primary;
      }
    }
  }
  #banner-text{
    position: absolute;
    width: 25rem;
    color: white;
    top: 7rem;
    left: 5rem;
    text-align: left;
    h1{
      margin-bottom: 2.8rem;
    }
    h3{
      font-weight: 300;
      line-height: 2rem;
    }
  }
</style>
