<template lang="html">

  <footer>
    <div class="floating-box">
      <h3>Thanks for checking out my portfolio!</h3>
      <p>You can reach out to me via any of my handles</p>
      <div class="flex-container-row contact-buttons-container" >
          <Button v-bind:key="button.id" v-for="button in contactButtonsList" :button="button"/>
      </div>
      <div>

      </div>
    </div>
  </footer>

</template>

<script lang="js">
  import Button from "./Button.vue"
  export default  {
    name: 'footer',
    components: {
      Button
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
            eventBusChannel: "contact-button-clicks"
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
    background-color: gray;
    .floating-box{
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
