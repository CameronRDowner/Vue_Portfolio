<template lang="html">

  <section id="projects">
    <h1>Projects</h1>
    <div id="projects-container">
      <ProjectItem v-bind:key="project.id" v-for="project in projectList" :project="project"/>
    </div>
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
    data() {
      return {
        projectList: [
          {
            id: 0,
            name: "PokeDirectory",
            mockupFileName: "project_coming_soon.jpg",
            description: "An Angular webapp for the purpose of browsing and viewing the stats of your favorite pokemon. All pokemon data is retrieved via the RESTful PokeApi. Click the Github button below to follow the development process and view all commits thus far.",
            githubUrl: "https://github.com/CameronRDowner/Angular_PokeDirectory",
            technologiesList: [
                {
                  id: 0,
                  deviconClasses: "devicon-html5-plain colored"
                },
                {
                  id: 1,
                  deviconClasses: "devicon-css3-plain colored"
                },
                {
                  id: 2,
                  deviconClasses: "devicon-javascript-plain colored"
                },
                {
                  id: 3,
                  deviconClasses: "devicon-angularjs-plain colored"
                },
                {
                  id: 4,
                  deviconClasses: "devicon-sass-plain colored"
                }
            ],
          },
          {
            id: 1,
            name: "Wescot Roofing Website",
            mockupFileName: "wescot_roofing_website.jpg",
            description: "This website began with the Elevation template from pixilarity.com which was then heavily modified to meet the branding and functional needs of the client. CSS animations were added along with a scroll event handler to activate them. Additionally, field validation was integrated into the contact form to ensure accurate submissions.",
            liveUrl: "https://www.wescotroofing.com",
            technologiesList: [
                {
                  id: 0,
                  deviconClasses: "devicon-html5-plain colored"
                },
                {
                  id: 1,
                  deviconClasses: "devicon-css3-plain colored"
                },
                {
                  id: 2,
                  deviconClasses: "devicon-javascript-plain colored"
                },
                {
                  id: 3,
                  deviconClasses: "devicon-jquery-plain colored"
                },
                {
                  id: 4,
                  deviconClasses: "devicon-sass-plain colored"
                }
            ],
          },
          {
            id: 2,
            name: "Todo List App",
            mockupFileName: "todo_app.jpg",
            description: "A todo list app built in Angular that can Add, Delete, and Complete todo list items. All todo items are retrieved from a REST API using the RxJS library. CSS animations were handled via Angular's built-in Browser Animations module. Many of the common Angular directives were utilized in the markup of this project.",
            githubUrl: "https://github.com/CameronRDowner/Angular_Todo_App",
            liveUrl: "https://camerondowner.com/Angular_Todo_App/",
            technologiesList: [
              {
                  id: 0,
                  deviconClasses: "devicon-html5-plain colored"
                },
                {
                  id: 1,
                  deviconClasses: "devicon-css3-plain colored"
                },
                {
                  id: 2,
                  deviconClasses: "devicon-javascript-plain colored"
                },
                {
                  id: 3,
                  deviconClasses: "devicon-angularjs-plain colored"
                },
                {
                  id: 4,
                  deviconClasses: "devicon-sass-plain colored"
                }
            ],
          },
          {
            id: 3,
            name: "Portfolio Website",
            mockupFileName: "portfolio_website.jpg",
            description: "The portfolio page you are currently browsing is built with Vue. Many of the components that make up this page utilize Vue directives, Flexbox and Grid. When appropriate, animations use the Vue transition wrapper component for triggering; all others utilize a scroll event handler. And lastly, the contact form uses a validation library to ensure accuracy.",
            githubUrl: "https://github.com/CameronRDowner/Vue_Portfolio",
            liveUrl:"https://camerondowner.com",
            technologiesList: [
              {
                  id: 0,
                  deviconClasses: "devicon-html5-plain colored"
                },
                {
                  id: 1,
                  deviconClasses: "devicon-css3-plain colored"
                },
                {
                  id: 2,
                  deviconClasses: "devicon-javascript-plain colored"
                },
                {
                  id: 3,
                  deviconClasses: "devicon-vuejs-plain colored"
                },
                {
                  id: 4,
                  deviconClasses: "devicon-sass-plain colored"
                }
            ],
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
    box-sizing: border-box;
  }
</style>
