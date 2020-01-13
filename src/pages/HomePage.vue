<template lang="html">

  <div id="home-page">
    <Header/>
    <ProjectsSection/>
    <TechnologiesSection/> 
  </div>

</template>

<script lang="js">
  import Header from "../components/Header.vue"
  import ProjectsSection from "../components/ProjectsSection.vue"
  import TechnologiesSection from "../components/TechnologiesSection.vue"
  export default  {
    name: 'HomePage',
    components: {
      Header,
      ProjectsSection,
      TechnologiesSection
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
  #home-page {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  #technologies-wrapper{
    width: 100%;
  }
</style>
