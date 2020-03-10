<template lang="html">

  <section id="technologies" v-observe-visibility="{callback: triggerAboutAnimations, once: false, intersection: {threshold: 0.1}}">
    <h1>Technologies Learned</h1>
    <div id="technologies-wrapper" class="floating-high">
      <div id="front-end-list" class="technology-list animation-delay-500ms hidden">
        <h3>Front End</h3>
        <ul class="flex-container-row">
          <TechnologyIcon v-bind:key="technology.id" v-for="technology in frontEndTechnologyList" :technology="technology" />
        </ul>
      </div>
      <div id="back-end-list" class="technology-list animation-delay-600ms hidden">
        <h3>Back End</h3>
        <ul class="flex-container-row">
          <TechnologyIcon v-bind:key="technology.id" v-for="technology in backEndTechnologyList" :technology="technology" />
        </ul>
      </div>
      <div id="frameworks-list" class="technology-list animation-delay-700ms hidden">
        <h3>Frameworks</h3>
        <ul class="flex-container-row">
          <TechnologyIcon v-bind:key="technology.id" v-for="technology in frameworksTechnologyList" :technology="technology" />
        </ul>
      </div>
      <div id="libraries-list" class="technology-list animation-delay-800ms hidden">
        <h3>Libraries</h3>
        <ul class="flex-container-row">
          <TechnologyIcon v-bind:key="technology.id" v-for="technology in librariesTechnologyList" :technology="technology" />
        </ul>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import TechnologyIcon from './TechnologyIcon.vue'
  export default  {
    name: 'technologies-section',
    components: {
      TechnologyIcon,
    },
    props: [],
    mounted () {

    },
    data () {
      return {
          backEndTechnologyList: [
          {
            id: 1,
            name: "C#",
            deviconClasses: "devicon-csharp-plain colored",
            startHidden: true
          },
          {
            id: 2,
            name: "C++",
            deviconClasses: "devicon-cplusplus-plain colored",
            startHidden: true
          },
          {
            id: 3,
            name: "MySQL",
            deviconClasses: "devicon-mysql-plain colored",
            startHidden: true
          },
          {
            id: 4,
            name: "SQL",
            deviconClasses: "devicon-oracle-plain colored",
            startHidden: true
          }

        ],
          frontEndTechnologyList: [
          {
            id: 1,
            name: "HTML5",
            deviconClasses: "devicon-html5-plain colored",
            startHidden: true
          },
          {
            id: 2,
            name: "CSS3",
            deviconClasses: "devicon-css3-plain colored",
            startHidden: true
          },
          {
            id: 3,
            name: "Sass",
            deviconClasses: "devicon-sass-plain colored",
            startHidden: true
          },
          {
            id: 4,
            name: "Javascript",
            deviconClasses: "devicon-javascript-plain colored",
            startHidden: true
          }

        ],
          frameworksTechnologyList: [
          {
            id: 1,
            name: "Angular",
            deviconClasses: "devicon-angularjs-plain colored",
            startHidden: true
          },
          {
            id: 2,
            name: "Vue.js",
            deviconClasses: "devicon-vuejs-plain colored",
            startHidden: true
          }
        ],
          librariesTechnologyList: [
          {
            id: 1,
            name: "jQuery",
            deviconClasses: "devicon-jquery-plain colored",
            startHidden: true
          },
          {
            id: 2,
            name: "Bootstrap",
            deviconClasses: "devicon-bootstrap-plain colored",
            startHidden: true
          }
        ]
      }
    },
    methods: {
      triggerAboutAnimations : function (technologiesSectionVisible){
        if (technologiesSectionVisible) {
          document.getElementById("technologies-wrapper").classList.add("scale-up-horizontal");
          document.getElementById("front-end-list").classList.add("puff-in-center");
          document.getElementById("back-end-list").classList.add("puff-in-center");
          document.getElementById("frameworks-list").classList.add("puff-in-center");
          document.getElementById("libraries-list").classList.add("puff-in-center");
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../assets/sass/_breakpoints.scss";
@import "../assets/sass/_variables.scss";
  #technologies {
    width: 100%;
    background-color: $technologies-background;
    h1{
      color: white;
    }
  }
  .technology-list{
    background-color: white;
    border-radius: 20px;
    margin: 0.5rem;
  }
  #technologies-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    background-color: $technologies-foreground;
    padding: 3em;
  
    ul{
      width: 12rem;
    }
    h3{
      font-weight: 600;
    }
  }

</style>
