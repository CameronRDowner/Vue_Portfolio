<template lang="html">

  <div id="home-page">
    <Header/>
    <ProjectsSection/>
    <TechnologiesSection/> 
    <EducationSection/>
  </div>

</template>

<script lang="js">
  import Header from "../components/Header.vue"
  import ProjectsSection from "../components/ProjectsSection.vue"
  import TechnologiesSection from "../components/TechnologiesSection.vue"
  import EducationSection from "../components/EducationSection.vue"
  export default  {
    name: 'HomePage',
    components: {
      Header,
      ProjectsSection,
      TechnologiesSection,
      EducationSection
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
