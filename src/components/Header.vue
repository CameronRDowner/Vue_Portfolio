<template lang="html">

  <header>
    <div class="banner">
      <div class="floating-box">
        <img src="../assets/images/profile.png" alt="profile picture">
        <h1>Cameron Downer</h1>
        <h2>Software Engineer</h2>
        <div class="flex-container-row contact-buttons-container" >
          <Button v-bind:key="button.id" v-for="button in contactButtonsList" :button="button"/>
        </div>

      </div>
    </div>
    </header>

</template>

<script lang="js">
  import Button from "./Button.vue"
  export default  {
    name: 'Header',
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
   .banner{
    margin: 0 auto;
    width: 100%;
    height: 30em;
    background-color:gray;

  }
  header{
    .floating-box{
      font-size: 1rem;
      top: 140px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 22rem;
      img{
        max-width: 200px;
        width: 40%;
        border-radius: 50%;
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
      .contact-buttons-container{
      margin-top: 1.5rem;
      }
    }
    
  }
</style>
