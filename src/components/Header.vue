<template lang="html">

  <header>
    <div class="banner">
        <div id="resume-button-container">
          <Button :button="resumeButton" v-on:buttonClicked="buttonHelper.openExternalLink(resumeButton.hrefUrl)" />
        </div>
      <vue-aos animation-class="slide-in-top" threshold="0.2">
        <div class="rounded-box floating">
          <img src="../assets/images/profile.png" alt="profile picture">
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

          resumeButton:{
            iconClasses: "fas fa-file-download",
            contentColor: "white",
            buttonColor: colorVariables.primary,
            hrefUrl: "https://docs.google.com/document/d/14EKr-8gt5VWqWSdxVEhmRJofBPEyvn71atU7G04D1U4/export?format=pdf",
            text:"Resume",
            contentSize: "0.9rem",
            padding: "0.4rem"
          },
          contactButton: {
            iconClasses: "far fa-envelope",
            contentColor: "white",
            buttonColor: colorVariables.primary
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
    height: 22rem;
    background: $primary;
    background: -webkit-linear-gradient(to left, #2a0845, $primary);
    background: linear-gradient(to left, #2a0845, $primary);
  }
  header{
    .rounded-box{
      font-size: 1rem;
      top: 30px;
      img{
        max-width: 200px;
        width: 8.5rem;
        border-radius: 50%;
        @media #{$medium}{
          
        }
      }
      h1{
        color: #212529;
        font-size: 2.6em;
        margin: 0.25em 0;
      }
      h2{
        font-size: 1.5em;
        margin: 0.25em 0;
        color:#4A4E69;
      }
    }
    #resume-button-container{
      position: absolute;
      right: 0;
      padding: 1rem;
      a{
        color: white;
        text-decoration: none;
        padding: 0.5rem;
        font-size: 0.75rem;
        margin: 1px;
        background-color: $primary;
        border-radius: 5%;
        &:hover{
        background: white;
        color: $primary;
        margin: 0;
      }
        i{
          padding-right: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
</style>
