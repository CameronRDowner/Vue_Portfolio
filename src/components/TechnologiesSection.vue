<template lang="html">

  <section id="technologies">
    <h1>Technologies</h1>
    <div id="technologies-wrapper">
     <TechnologiesContainer v-bind:technologyData="frontEndTechnologyData"/>
     <TechnologiesContainer v-bind:technologyData="backEndTechnologyData"/>
     <TechnologiesContainer v-bind:technologyData="javascriptFrameworkData"/>
     <TechnologiesContainer v-bind:technologyData="libraryData"/>
    </div>
    <hr>
  </section>

</template>

<script lang="js">
  import TechnologiesContainer from "../components/TechnologiesContainer.vue"
  export default  {
    name: 'technologies-section',
    components: {
      TechnologiesContainer
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        backEndTechnologyData: {
          headerTitle: "Back End",
          technologyList: [
          {
            id: 1,
            name: "C#",
            deviconClasses: "devicon-csharp-plain colored"
          },
          {
            id: 2,
            name: "C++",
            deviconClasses: "devicon-cplusplus-plain colored"
          },
          {
            id: 3,
            name: "MySQL",
            deviconClasses: "devicon-mysql-plain colored"
          },
          {
            id: 4,
            name: "SQL",
            deviconClasses: "devicon-oracle-plain colored"
          }

        ]

        },
        frontEndTechnologyData:{
          headerTitle: "Front End",
          technologyList: [
          {
            id: 1,
            name: "HTML5",
            deviconClasses: "devicon-html5-plain colored"
          },
          {
            id: 2,
            name: "CSS3",
            deviconClasses: "devicon-css3-plain colored"
          },
          {
            id: 3,
            name: "Sass",
            deviconClasses: "devicon-sass-plain colored"
          },
          {
            id: 4,
            name: "Javascript",
            deviconClasses: "devicon-javascript-plain colored"
          }

        ]
        },
        javascriptFrameworkData: {
          headerTitle: "Frameworks",
          technologyList: [
          {
            id: 1,
            name: "Angular",
            deviconClasses: "devicon-angularjs-plain colored"
          },
          {
            id: 2,
            name: "Vue",
            deviconClasses: "devicon-vuejs-plain colored"
          }
        ]
        },
        libraryData: {
          headerTitle: "Libraries",
          technologyList: [
          {
            id: 1,
            name: "jQuery",
            deviconClasses: "devicon-jquery-plain colored"
          },
          {
            id: 2,
            name: "Bootstrap",
            deviconClasses: "devicon-bootstrap-plain colored"
          }
        ]
        }
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  #technologies {
    width: 100%;

    hr{
      margin-top: 3em;
    }
  }
  #technologies-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    background-color: 	white;
    box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, 0.18);
    padding: 3em
  }

</style>
