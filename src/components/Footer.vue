<template lang="html">

  <footer>
    <vue-aos animation-class="slide-in-bottom">
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
            buttonColor: "#FFBF00",
            eventBusChannel: "contact-modal-open-clicks"
          },
          {
            id: 2,
            iconClasses: "fab fa-github",
            textOrIconColor: "white",
            buttonColor: "#212529",
            hrefUrl : "https://github.com/CameronRDowner"
          },
          { 
            id: 3,
            iconClasses: "fab fa-linkedin-in",
            textOrIconColor: "white",
            buttonColor: "#0077b5",
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
  footer {
    position: relative;
    height: 15em;
    background: #6441A5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .rounded-box{
      font-size: 1rem;
      bottom: 4em;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 22rem;
    }
    h3{
      font-weight: 500;
    }
  }
</style>
