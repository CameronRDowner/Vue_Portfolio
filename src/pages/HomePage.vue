<template lang="html">

  <div id="home-page">
    <Header></Header>
    <ProjectsContainer v-bind:projectList = "projectList"></ProjectsContainer>
  </div>

</template>

<script lang="js">
  import Header from "../components/Header.vue"
  import ProjectsContainer from "../components/ProjectsContainer.vue"
  export default  {
    name: 'HomePage',
    components: {
      Header,
      ProjectsContainer
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        projectList: [
          {
            id: 1,
            name: "Project1"
          }, 
          {
            id: 2,
            name: "Project2"
          },
          {
            id: 3,
            name: "Project3"
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
  #home-page {
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>
