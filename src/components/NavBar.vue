<template lang="html">
    <nav id="nav-bar">
      <ul class="nav-links-container">
        <li class="nav-link"><a href="#about">About</a></li>
        <li class="nav-link"><a href="#projects">Projects</a></li>
      </ul>
      <div class="nav-links-container"></div>
      <ul class="nav-links-container">
        <li class="nav-link"><a href="#technolog">Technologies</a></li>
        <li class="nav-link"><a href="#education">Education</a></li>
      </ul>
    </nav>

</template>

<script lang="js">

  export default  {
    name: 'nav-bar',
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
 @import "../assets/sass/_variables.scss";
  #nav-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .nav-links-container{
    margin: 0 8rem;
    z-index: 4;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    left: 0;
    width: 20rem;
  }
  .nav-link{
    padding: 1rem rem 0 2rem;
    text-align: left;
    margin: 1rem 1rem;
    &:hover{
      }
    a{
      text-decoration: none;
      color: white;
      font-weight: 400;
      font-size: 1rem;
      padding: 0.5rem;
      margin: 1px;
    }
  }
</style>
