<template lang="html">

  <section id="projects">
    <h1>My Projects</h1>
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
            name: "SongHunter",
            mockupFileName: "songhunter_mockup.jpg",
            description: "This is a React webapp to view the top 10 songs, search for songs via lyrics or song name, and view the lyrics for any song. Utilizes the Musixmatch REST API for song data and the React Context API for state management.",
            githubUrl: "https://github.com/CameronRDowner/React_SongHunter",
            liveUrl: "https://camerondowner.com/React_SongHunter/",
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
                  deviconClasses: "devicon-react-plain colored"
                },
                {
                  id: 4,
                  deviconClasses: "devicon-sass-plain colored"
                }
            ],
          },
          {
            id: 1,
            name: "PokeDirectory",
            mockupFileName: "pokedirectory_mockup.jpg",
            description: "An Angular webapp for the purpose of browsing and viewing the stats of your favorite pokemon. All pokemon data is retrieved via the RESTful PokeApi. State data is efficiently managed with NgRx.",
            githubUrl: "https://github.com/CameronRDowner/Angular_PokeDirectory",
            liveUrl: "https://camerondowner.com/Angular_PokeDirectory/",
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
            id: 2,
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
          },
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
