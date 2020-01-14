<template lang="html">
    <div id="contact-buttons-container">
      <ContactButton v-bind:key="contactButton.id" v-for="contactButton in contactButtonsList" :contactButton="contactButton"/>
    </div>
  

</template>

<script lang="js">
  import ContactButton from "./ContactButton.vue"
  export default  {
    name: 'contact-buttons',
    components: {
      ContactButton
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
            buttonColor: "#FFBF00"
          },
          {
            id: 2,
            hyperlinkUrl : "https://github.com/CameronRDowner",
            iconClasses: "fab fa-github",
            iconColor: "white",
            buttonColor: "#212529"
          },
          { 
            id: 3,
            hyperlinkUrl : "www.linkedin.com/in/cameron-downer-392863173",
            iconClasses: "fab fa-linkedin",
            iconColor: "white",
            buttonColor: "#0077b5"
          },
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
  
  .fa-icon{
  font-size: 4em;
  }
  #contact-buttons-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1em 0 0 0;
    a{
      margin: 0 0.5em;
      border: solid 1px black;
      background-color: #FFBF00
    }
  }
</style>
