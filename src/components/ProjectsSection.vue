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
            name: "Login Sample App",
            mockupFileName: "project_coming_soon.jpg",
            description: "A fullstack project that demonstrates the ability to log into an app and manage a current session. The front end is built in React and uses OAuth for authentication. The back end uses both Express and MongoDb.",
            githubUrl: "https://github.com/CameronRDowner/React_Login_App",
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
              },
              {
                id: 5,
                deviconClasses: "devicon-express-plain colored"
              },
              {
                id: 6,
                deviconClasses: "devicon-mongodb-plain colored"
              }
            ]
          },
          {
            id: 1,
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
            id: 2,
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
            id: 3,
            name: "Portfolio Website",
            mockupFileName: "portfolio_website.jpg",
            description: "The portfolio page you are currently browsing, I built and designed from scratch. The overall project was built in the Vue.js framework and uses many of its directives in the UI.",
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
