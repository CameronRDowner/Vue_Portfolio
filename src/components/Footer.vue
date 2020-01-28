<template lang="html">

  <footer>
    <vue-aos animation-class="slide-in-bottom" threshold="0.2">
    <div class="rounded-box floating">
      <h3>Thanks for checking out my portfolio!</h3>
      <p>You can reach out to me via any of my handles</p>
      <div class="flex-container-row contact-buttons-container" >
          <Button v-bind:key="button.id" v-for="button in contactButtonsList" :button="button"/>
      </div>
      <div>

      </div>
    </div>
    </vue-aos>
  </footer>

</template>

<script lang="js">
  import Button from "./Button.vue";
  import VueAos from 'vue-aos';
  import ColorVariables from "../assets/sass/_variables.scss"
  export default  {
    name: 'footer',
    components: {
      Button,
      VueAos
    },
    props: [],
    mounted () {

    },
    data () {
      return {
      contactButtonsList: [
          {
            id: 1,
            iconClasses: "far fa-envelope",
            textOrIconColor: "white",
            buttonColor: ColorVariables.primary,
            eventBusChannel: "contact-modal-open-clicks"
          },
          {
            id: 2,
            iconClasses: "fab fa-github",
            textOrIconColor: "white",
            buttonColor: ColorVariables.github,
            hrefUrl : "https://github.com/CameronRDowner"
          },
          { 
            id: 3,
            iconClasses: "fab fa-linkedin-in",
            textOrIconColor: "white",
            buttonColor: ColorVariables.linkedin,
            hrefUrl : "https://www.linkedin.com/in/cameron-downer-392863173"
          }
        ]
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
  footer {
    position: relative;
    height: 13em;
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
</style>
