<template lang="html">
  <section id="projects">
    <h1>My Projects</h1>
    <div id="projects-container">
      <ProjectItem
        v-bind:key="project.id"
        v-for="project in projectList"
        :project="project"
      />
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
            id: 5,
            name: "Hackit FE & BE",
            mockupFileName: "project_coming_soon.jpg",
            description: "A red team cybersecurity daily challenge game for practicing hacks. Front end is utilizing React and TypeScript, back end is a rest api written in Django.",
            githubUrl: null,
            liveUrl: null,
            technologiesList: [
              {
                id: 0,
                deviconClasses: "devicon-react-original colored"
              },
              {
                id: 1,
                deviconClasses: "devicon-typescript-plain colored"
              },
              {
                id: 2,
                deviconClasses: "devicon-django-plain colored"
              },
              {
                id: 3,
                deviconClasses: "devicon-sqlite-plain colored"
              },
            ]
          },
          {
            id: 4,
            name: "Items GraphQL API",
            mockupFileName: "item_api.png",
            description: "A simple CRUD GraphQL app that demonstrates the ability to create, update, and delete resources. This API uses Apollo Server for fast efficient requests, and MongoDB for data storage. ",
            githubUrl: "https://github.com/CameronRDowner/Node_Item_Manager_GraphQL_API",
            liveUrl: null,
            technologiesList: [
              {
                id: 0,
                deviconClasses: "devicon-nodejs-plain colored"
              },
              {
                id: 1,
                deviconClasses: "devicon-express-original colored"
              },
              {
                id: 2,
                deviconClasses: "devicon-mongodb-plain colored"
              },
              {
                id: 3,
                deviconClasses: "devicon-graphql-plain-wordmark colored"
              }
            ]
          },
          {
            id: 3,
            name: "Login REST API",
            mockupFileName: "login_api.jpg",
            description: "A backend project that demonstrates the ability to create new users, log them into a session, manage that session, and retrieve user data. This REST API uses JSON Web Tokens for authentication, MongoDB for data storage, and uses Express to serve up its functionality within the Node environment.",
            githubUrl: "https://github.com/CameronRDowner/Express_Login_App_REST_API",
            liveUrl: null,
            technologiesList: [
              {
                id: 0,
                deviconClasses: "devicon-nodejs-plain colored"
              },
              {
                id: 1,
                deviconClasses: "devicon-express-original colored"
              },
              {
                id: 2,
                deviconClasses: "devicon-mongodb-plain colored"
              }
            ]
          },
          {
            id: 2,
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
            id: 0,
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
