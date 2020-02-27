<template lang="html">

  <footer>
    <vue-aos animation-class="slide-in-bottom" threshold="0.2">
    <div class="rounded-box floating">
      <h3>Thanks for checking out my portfolio!</h3>
      <p>You can reach out to me via any of my handles</p>
      <div class="flex-container-row contact-buttons-container" >
          <Button :button="contactButton" v-on:buttonClicked="buttonHelper.emitEventBus(`contact-modal-open-clicks`)" />
          <Button :button="githubButton" v-on:buttonClicked="buttonHelper.openExternalLink(githubButton.hrefUrl)"/>
          <Button :button="linkedinButton" v-on:buttonClicked="buttonHelper.openExternalLink(linkedinButton.hrefUrl)"/>
          
      </div>
      <div>

      </div>
    </div>
    </vue-aos>
    <div id="scroll-top-button">
    <Button :button="scrollTopButton" v-on:buttonClicked="scrollToTop()" />
    </div>
  </footer>

</template>

<script lang="js">
  import Button from "./Button.vue";
  import VueAos from 'vue-aos';
  import ButtonHelper from "../models/ButtonHelper.js";
  import colorVariables from "../assets/sass/_variables.scss"
  export default  {
    name: 'Footer',
    components: {
      Button,
      VueAos
    },
    props: [],
    mounted () {

    },
    data () {
      return {
      buttonHelper: new ButtonHelper(),
      scrollTopButton:{
            iconClasses: "fas fa-arrow-up",
            contentColor: "white",
            buttonColor: colorVariables.primary
          },
      contactButton: {
            id: 1,
            iconClasses: "far fa-envelope",
            contentColor: "white",
            buttonColor: colorVariables.primary
          },
          githubButton: {
            id: 2,
            iconClasses: "fab fa-github",
            contentColor: "white",
            buttonColor: colorVariables.github,
            hrefUrl : "https://github.com/CameronRDowner"
          },
          linkedinButton:  { 
            id: 3,
            iconClasses: "fab fa-linkedin-in",
            contentColor: "white",
            buttonColor: colorVariables.linkedin,
            hrefUrl : "https://www.linkedin.com/in/CameronRDowner"
          }
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
  footer {
    position: relative;
    height: 15rem;
    background: $primary;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #2a0845, $primary);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #2a0845, $primary); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    .rounded-box{
      font-size: 1rem;
      bottom: 2em;
    }
    h3{
      font-weight: 500;
    }
  }
  #scroll-top-button{
    position: absolute;
    width: 5rem;
    right: 0;
    top: 0.5rem;
  }
</style>
