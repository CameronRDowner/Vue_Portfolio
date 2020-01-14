<template lang="html">

  <header>
    <div class="banner">
      <div class="floating-box">
        <img src="../assets/images/profile.png" alt="profile picture">
        <h1>Cameron Downer</h1>
        <h2>Software Engineer</h2>
        <ContactButtonsContainer/>
      </div>
    </div>
    </header>

</template>

<script lang="js">
  import ContactButtonsContainer from "./ContactButtonsContainer.vue"
  export default  {
    name: 'Header',
    components: {
      ContactButtonsContainer
    },
    props: [],
    mounted () {

    },
    data () {
      return {

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
    }
    
  }

  .fa-icon{
    font-size: 4em;
  }
  #header-buttons-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2em;
  }
</style>
