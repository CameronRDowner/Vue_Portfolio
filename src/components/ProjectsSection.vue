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
        projectList: [
          {
            id: 0,
            name: "PokeDirectory",
            mockupFileName: "project_coming_soon.jpg",
            description: "An Angular webapp for the purpose of browsing and viewing the stats of your favorite pokemon. All pokemon data is retrieved via the RESTful PokeApi. Click the Github button below to follow the development process and view all commits thus far.",
            technologiesList: [
                {
                  id: 1,
                  deviconClasses: "devicon-angularjs-plain colored"
                },
                {
                  id: 2,
                  deviconClasses: "devicon-sass-plain colored"
                }
            ],
            projectButtonsList: [
              {
                id: 1,
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github,
                iconSize: "2rem",
                hrefUrl: "https://github.com/CameronRDowner/Angular_PokeDirectory",
              },
              {
                id: 2,
                eventBusChannel: "alert-modal-open-clicks",
                eventBusMessage: "This project is currently under development. To view the progress so far, click the corresponding Github button.",
                iconClasses: "fas fa-external-link-alt",
                textOrIconColor: "white",
                buttonColor: ColorVariables.primary,
                iconSize: "2rem"
              }
            ]
          },
          {
            id: 1,
            name: "Wescot Roofing Website",
            mockupFileName: "wescot_roofing_website.jpg",
            description: "This website began with the Elevation template from pixilarity.com which was then heavily modified to meet the branding and functional needs of the client. CSS animations were added along with a scroll event handler to activate them. Additionally, field validation was integrated into the contact form to ensure accurate submissions.",
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
                id: 1,
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github,
                iconSize: "2rem",
                eventBusChannel: "alert-modal-open-clicks",
                eventBusMessage: "This Github repository was made private. Please contact me if you need access.",
              },
              {
                id: 2,
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
            mockupFileName: "todo_app.jpg",
            description: "A todo list app built in Angular that can Add, Delete, and Complete todo list items. All todo items are retrieved from a REST API using the RxJS library. CSS animations were handled via Angular's built-in Browser Animations module. Many of the common Angular directives were utilized in the markup of this project.",
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
                id: 1,
                hrefUrl: "https://github.com/CameronRDowner/Angular_Todo_App",
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github
              },
              {
                id: 2,
                hrefUrl: "https://camerondowner.com/Angular_Todo_App/",
                iconClasses: "fas fa-external-link-alt",
                textOrIconColor: "white",
                buttonColor: ColorVariables.primary
              }
            ]
          },
          {
            id: 3,
            name: "Portfolio Website",
            mockupFileName: "portfolio_website.jpg",
            description: "The portfolio page you are currently browsing is built with Vue. Many of the components that make up this page utilize Vue directives, Flexbox and Grid. When appropriate, animations use the Vue transition wrapper component for triggering; all others utilize a scroll event handler. And lastly, the contact form uses a validation library to ensure accuracy.",
            technologiesList: [
              {
                  id: 1,
                  deviconClasses: "devicon-sass-plain colored",
                  name: ""
                },
                {
                  id: 2,
                  deviconClasses: "devicon-vuejs-plain colored",
                  name: ""
                }
            ],
            projectButtonsList: [{
                id: 1,
                hrefUrl: "https://github.com/CameronRDowner/Vue_Portfolio",
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github
              },
              {
                id: 2,
                hrefUrl: "https://camerondowner.com",
                iconClasses: "fas fa-external-link-alt",
                textOrIconColor: "white",
                buttonColor: ColorVariables.primary
              }
            ]
          },
          {
            id: 4,
            name: "Agenda CRM",
            mockupFileName: "agenda_crm.jpg",
            description: "This windows app allows users to add, delete, and edit appointments as well as customer data. Furthermore, it has user authentication, reminders for appointments, multi-language support for prompts, report generation, and field validation. The customer and appointment data is stored on a mySQL relational database.",
            technologiesList: [
              {
                  id: 1,
                  deviconClasses: "devicon-csharp-plain colored",
                  name: ""
                },
                {
                  id: 2,
                  deviconClasses: "devicon-mysql-plain colored",
                  name: ""
                }
            ],
            projectButtonsList: [
              {
                id: 1,
                hrefUrl: "",
                iconClasses: "",
                textOrIconColor: "",
                buttonColor: ""
              },
              {
                id: 2,
                hrefUrl: "https://github.com/CameronRDowner/Agenda_CRM",
                iconClasses: "fab fa-github",
                textOrIconColor: "white",
                buttonColor: ColorVariables.github
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
    h1{
      padding-bottom: 2rem;
    }
  }
  #projects-container{
    max-width: 50rem;
    margin: 0 auto;
  }
</style>
