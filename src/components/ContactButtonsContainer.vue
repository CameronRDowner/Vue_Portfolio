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
            buttonColor: "#FFBF00",
            buttonHoverColor: "#ffc826"
          },
          {
            id: 2,
            hyperlinkUrl : "https://github.com/CameronRDowner",
            iconClasses: "fab fa-github",
            iconColor: "white",
            buttonColor: "#212529",
            buttonHoverColor: "#3e464d"
          },
          { 
            id: 3,
            hyperlinkUrl : "www.linkedin.com/in/cameron-downer-392863173",
            iconClasses: "fab fa-linkedin-in",
            iconColor: "white",
            buttonColor: "#0077b5",
            buttonHoverColor: "#0097e6"
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
    margin: 1.75em 0 0 0;
  }
</style>
