<template lang="html">

  <div id="nav-bar">
    <div id="nav-backdrop"></div>
    <nav>
      <ul id="nav-links-container">
        <li class="nav-link">About</li>
        <li class="nav-link">Projects</li>
        <li class="nav-link">Technologies</li>
        <li class="nav-link">Education</li>
      </ul>
    </nav>
  </div>

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
  #nav-bar {

  }
  #nav-backdrop{
    position: fixed;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    width: 10rem;
    z-index: 3;

  }
  #nav-links-container{
    position: fixed;
    z-index: 4;
    float: left;
  }
  .nav-link{
    color: white;
    font-size: 1.5rem;
    text-align: left;
    padding: 1rem 0 1rem 0.3rem;
  }
</style>
