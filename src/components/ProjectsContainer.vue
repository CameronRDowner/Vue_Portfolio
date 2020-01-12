<template lang="html">

  <section id="projects-container">
    <h1>My Projects</h1>
    <div v-bind:key="project.id" v-for="project in projectList">
      <ProjectItem v-bind:project="project"></ProjectItem>
    </div>
  </section>

</template>

<script lang="js">
  import ProjectItem from "../components/ProjectItem.vue"
  export default  {
    name: 'ProjectsContainer',
    components: {
      ProjectItem
    },
    props: ["projectList"],
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
#projects-container{
  padding-top: 6rem;
  h1{
    font-size: 2em;
  }
}
</style>
