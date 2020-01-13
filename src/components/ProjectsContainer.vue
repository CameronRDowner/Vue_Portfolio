<template lang="html">
    <div id="projects-container">
      <ProjectItem v-bind:key="project.id" v-for="project in projectList" :project="project"></ProjectItem>
    </div>
</template>

<script lang="js">
  import ProjectItem from "../components/ProjectItem.vue"
  export default  {
    name: 'ProjectsContainer',
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
            name: "Project1",
            screenshotPath: "",
            description: "Lorem Ipsum Dolor. . . . . . . ."
          }, 
          {
            id: 2,
            name: "Project2",
            screenshotPath: "",
            description: "Lorem Ipsum Dolor. . . . . . . ."
          },
          {
            id: 3,
            name: "Project3",
            screenshotPath: "",
            description: "Lorem Ipsum Dolor. . . . . . . ."
          },
          {
            id: 4,
            name: "Project4",
            screenshotPath: "",
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
  #projects-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
}

</style>
