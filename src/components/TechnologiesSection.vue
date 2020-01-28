<template lang="html">

  <section id="technologies">
    <h1>Technologies</h1>
    <vue-aos animation-class="shadow-drop" threshold="0.8">
    <div id="technologies-wrapper" class="floating">
      <vue-aos animation-class="slide-in-blurred-left" threshold="0.3">
      <div>
        <h3>Front End</h3>
        <ul class="flex-container-row">
          <TechnologyIcon v-bind:key="technology.id" v-for="technology in frontEndTechnologyList" :technology="technology" />
        </ul>
      </div>
      </vue-aos>
      <vue-aos animation-class="slide-in-blurred-left" threshold="0.3">
      <div>
        <h3>Back End</h3>
        <ul class="flex-container-row">
          <TechnologyIcon v-bind:key="technology.id" v-for="technology in backEndTechnologyList" :technology="technology" />
        </ul>
      </div>
      </vue-aos>
      <vue-aos animation-class="slide-in-blurred-right" threshold="0.3">
      <div>
        <h3>Frameworks</h3>
        <ul class="flex-container-row">
          <TechnologyIcon v-bind:key="technology.id" v-for="technology in frameworksTechnologyList" :technology="technology" />
        </ul>
      </div>
      </vue-aos>
      <vue-aos animation-class="slide-in-blurred-right" threshold="0.3">
      <div>
        <h3>Libraries</h3>
        <ul class="flex-container-row">
          <TechnologyIcon v-bind:key="technology.id" v-for="technology in librariesTechnologyList" :technology="technology" />
        </ul>
      </div>
      </vue-aos>
    </div>
    </vue-aos>
    <hr>
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
            name: "Vue",
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

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../assets/sass/_breakpoints.scss";
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
    padding: 3em;
  
    ul{
      width: 10rem;
    }
    h3{
      font-weight: 500;
    }
  }

</style>
