<template lang="html">

  <section id="projects">
    <h1>Projects</h1>
    <div id="projects-container">
      <ProjectItem v-bind:key="project.id" v-for="project in projectList" :project="project"/>
    </div>
    <hr>
  </section>

</template>

<script lang="js">
  import ProjectItem from "./ProjectItem.vue"
  import ColorVariables from "../assets/sass/_variables.scss"
  export default  {
    name: 'projects-section',
    components: {
      ProjectItem
    },
    props: [],
    mounted () {

    },
    data() {
      return {
        projectList: [{
            id: 1,
            name: "Wescot Roofing Website",
            mockupFileName: "wescot_roofing_website1.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
            technologiesList: [
                {
                  id: 1,
                  deviconClasses: "devicon-jquery-plain colored"
                },
                {
                  id: 2,
                  deviconClasses: "devicon-sass-plain colored"
                }
            ],
            projectButtonsList: [
              {
                id: 2,
                hrefUrl: "https://github.com/CameronRDowner/Wescot_Roofing_Website",
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github,
                iconSize: "2rem"
              },
              {
                id: 3,
                hrefUrl: "https://www.wescotroofing.com",
                iconClasses: "fas fa-external-link-alt",
                textOrIconColor: "white",
                buttonColor: ColorVariables.primary,
                iconSize: "2rem"
              }
            ]
          },
          {
            id: 2,
            name: "Todo List App",
            mockupFileName: "todo_app2.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
            technologiesList: [
              {
                  id: 1,
                  deviconClasses: "devicon-sass-plain colored",
                  name: ""
                },
                {
                  id: 2,
                  deviconClasses: "devicon-angularjs-plain colored",
                  name: ""
                }
            ],
            projectButtonsList: [{
                id: 2,
                hrefUrl: "https://github.com/CameronRDowner/Angular_Todo_App",
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github
              },
              {
                id: 3,
                hrefUrl: "https://cameronrdowner.github.io/Angular_Todo_App/",
                iconClasses: "fas fa-external-link-alt",
                textOrIconColor: "white",
                buttonColor: ColorVariables.primary
              }
            ]
          },
          {
            id: 3,
            name: "Portfolio Website",
            mockupFileName: "",
            description: "Lorem Ipsum Dolor. . . . . . . .",
            technologiesList: [

            ],
            projectButtonsList: [{
                id: 2,
                hrefUrl: "https://github.com/CameronRDowner",
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github
              },
              {
                id: 3,
                hrefUrl: "www.linkedin.com/in/cameron-downer-392863173",
                iconClasses: "fab fa-linkedin-in",
                textOrIconColor: "white",
                buttonColor: ColorVariables.primary
              }
            ]
          },
          {
            id: 4,
            name: "Project4",
            mockupFileName: "",
            description: "Lorem Ipsum Dolor. . . . . . . .",
            technologiesList: [

            ],
            projectButtonsList: [{
                id: 2,
                hrefUrl: "https://github.com/CameronRDowner",
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github
              },
              {
                id: 3,
                hrefUrl: "www.linkedin.com/in/cameron-downer-392863173",
                iconClasses: "fab fa-linkedin-in",
                textOrIconColor: "white",
                buttonColor: ColorVariables.primary
              }
            ]
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
    max-width: 50rem;
    margin: 0 auto;
  }
</style>
