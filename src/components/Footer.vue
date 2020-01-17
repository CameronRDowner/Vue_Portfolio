<template lang="html">

  <footer>
    <div class="floating-box">
      <h3>Thanks for checking out my portfolio!</h3>
      <p>You can reach out to me via any of my handles</p>
      <div class="flex-container-row contact-buttons-container" >
          <IconButton v-bind:key="button.id" v-for="button in contactButtonsList" :button="button"/>
      </div>
      <div>

      </div>
    </div>
  </footer>

</template>

<script lang="js">
  import IconButton from "./IconButton.vue"
  export default  {
    name: 'footer',
    components: {
      IconButton
    },
    props: [],
    mounted () {

    },
    data () {
      return {
      contactButtonsList: [
          {
            id: 1,
            hyperlinkUrl : "",
            iconClasses: "far fa-envelope",
            iconColor: "white",
            buttonColor: "#FFBF00",
            iconSize: "2rem"
          },
          {
            id: 2,
            hyperlinkUrl : "https://github.com/CameronRDowner",
            iconClasses: "fab fa-github",
            iconColor: "white",
            buttonColor: "#212529",
            iconSize: "2rem"
          },
          { 
            id: 3,
            hyperlinkUrl : "www.linkedin.com/in/cameron-downer-392863173",
            iconClasses: "fab fa-linkedin-in",
            iconColor: "white",
            buttonColor: "#0077b5",
            iconSize: "2rem"
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
