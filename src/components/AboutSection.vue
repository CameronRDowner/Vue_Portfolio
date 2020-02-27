<template lang="html">

  <section id="about">
    <h1>About Me</h1>
    <div id="about-content-wrapper">

    </div>
   
  </section>

</template>

<script lang="js">

  export default  {
    name: 'about-section',
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
  @import '../assets/sass/_variables.scss';
  #about {
    background-color: $darkPurple;
    width: 100%;
    padding: 1.2rem;
    box-sizing: border-box;
    h1{
      color: white;
      text-align: center;
    }
    p{
      line-height: 2rem;
    }
  }
  #about-content-wrapper{
    
  }
</style>
