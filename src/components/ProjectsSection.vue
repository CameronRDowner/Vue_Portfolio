<template lang="html">

  <section id="projects">
    <h1>Projects</h1>
    <ProjectsContainer/>
    <hr>
  </section>

</template>

<script lang="js">
  import ProjectsContainer from "./ProjectsContainer.vue"
  export default  {
    name: 'projects-section',
    components: {
      ProjectsContainer
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
  #projects {
    padding-top: 6rem;
  }
</style>
