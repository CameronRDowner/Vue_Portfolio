<template lang="html">

  <section id="projects">
    <h1>Projects</h1>
    <div id="projects-container" class="flex-container-row">
      <ProjectItem v-bind:key="project.id" v-for="project in projectList" :project="project"/>
    </div>
    <hr>
  </section>

</template>

<script lang="js">
  import ProjectItem from "./ProjectItem.vue"
  export default  {
    name: 'projects-section',
    components: {
      ProjectItem
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        projectList: [
          {
            id: 1,
            name: "Wescot Roofing Website",
            mockupFileName: "wescot_roofing_website1.jpg",
            description: "Lorem Ipsum Dolor. . . . . . . .",
            techStackList: [

            ]
          }, 
          {
            id: 2,
            name: "Todo List App",
            mockupFileName: "todo_app2.jpg",
            description: "Lorem Ipsum Dolor. . . . . . . ."
          },
          {
            id: 3,
            name: "Portfolio Website",
            mockupFileName: "",
            description: "Lorem Ipsum Dolor. . . . . . . ."
          },
          {
            id: 4,
            name: "Project4",
            mockupFileName: "",
            description: "Lorem Ipsum Dolor. . . . . . . ."
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
  #projects {
    padding-top: 6rem;
  }
  #projects-container{
    max-width: 47.2rem;
    margin: 0 auto;
  }
</style>
