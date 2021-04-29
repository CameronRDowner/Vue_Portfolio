<template lang="html">

  <header v-observe-visibility="{callback: handleNavBarPosition, once: false, intersection: {threshold: 0.1}}">
    <div id="banner" v-observe-visibility="{callback: triggerAnimations, once: true, intersection: {threshold: 0.3}}">
        <div id="profile-card" class="rounded-box floating-high hidden animation-delay-500ms">
          <img src="../assets/images/profile.jpg" alt="profile picture">
          <h1>Cameron Downer</h1>
          <h2>Web Developer</h2>
          <div class="flex-container-row contact-buttons-container">
            <Button :button="contactButton" v-on:buttonClicked="buttonHelper.emitEventBus(`contact-modal-open-clicks`)" />
            <Button :button="githubButton" v-on:buttonClicked="buttonHelper.openExternalLink(githubButton.hrefUrl)"/>
            <Button :button="linkedinButton" v-on:buttonClicked="buttonHelper.openExternalLink(linkedinButton.hrefUrl)"/>
          </div>
      </div>
      <NavBar/>
      <NavBarMobile/>
      <div id="banner-text" >
          <h1 id="textA" class="hidden animation-delay-500ms">Hi My Name Is Cameron.</h1>
          <h3 id="textB" class="hidden animation-delay-1s animation-duration-1s">
            I am a developer with a passion for <b>clean maintainable</b> code, <b>responsive</b> designs, and <b>memorable</b> user experiences.
          </h3>
        </div>
    </div>
    </header>

</template>

<script lang="js">
  import NavBar from "../components/NavBar.vue";
  import NavBarMobile from "../components/NavBarMobile.vue";
  import Button from "./Button.vue";
  import ButtonHelper from "../models/ButtonHelper.js"
  import colorVariables from "../assets/sass/_variables.scss";
  export default  {
    name: 'Header',
    components: {
      Button,
      NavBar,
      NavBarMobile
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
            buttonColor: colorVariables.yellow,
            boxShadow: true
          },
          githubButton: {
            iconClasses: "fab fa-github",
            contentColor: "white",
            buttonColor: colorVariables.github,
            hrefUrl : "https://github.com/CameronRDowner",
            boxShadow: true
          },
          linkedinButton:  { 
            iconClasses: "fab fa-linkedin-in",
            contentColor: "white",
            buttonColor: colorVariables.linkedin,
            hrefUrl : "https://www.linkedin.com/in/CameronRDowner",
            boxShadow: true
          }
        
      }
    },
    methods: {
      handleNavBarPosition : function (bannerVisible){
         let navBar = document.getElementById("nav-bar");
         if(bannerVisible){
           navBar.classList.add("nav-bar-absolute");
           navBar.classList.remove("nav-bar-fixed");
         }
         else{
           navBar.classList.add("nav-bar-fixed");
           navBar.classList.remove("nav-bar-absolute");
         }
      },
      triggerAnimations: function(headerVisible){
        if(headerVisible){
          let navBarClassList = document.getElementById('nav-bar').classList;
          document.getElementById('banner').classList.add('scale-from-top');
          document.getElementById('profile-card').classList.add('scale-in');
          navBarClassList.add('fade-in-top');
          document.getElementById('textA').classList.add('fade-in');
          document.getElementById('textB').classList.add('fade-in');
          setTimeout(() => {
            navBarClassList.remove('fade-in-top')
          }, 500);
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
   #banner{
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 25rem;
    background: $primary;
    border-bottom-left-radius: 1.9rem;
    @media #{$small-medium}{
      height: 22rem;
    }
  }
  header{
    padding-bottom: 0.75rem;
    .rounded-box{
      font-size: 1rem;
      top: 70px;
      right: 4.7rem;
      left: none;
      @media #{$medium}{
        right: 0;
        left: 0;
        width: 25rem;
      }
      @media #{$small-medium}{
        top: 0;
      }
      @media #{$small}{
        width: 100%;
      }
      img{
        max-width: 8.2rem;
        border-radius: 100%;
      }
      h1{
        color: $off-black;
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
    max-width: 25rem;
    color: white;
    padding: 7rem 30rem 0 4.6rem;
    text-align: left;
    @media #{$medium}{
      display: none;
    }
    h1{
      margin-bottom: 2rem;
    }
    h3{
      font-weight: 300;
      line-height: 2rem;
    }
  }
</style>
