<template lang="html">
<vue-aos :animation-class="'slide-in-' + getOrientation" threshold="0.1">
  <div class="project-item" :class="'project-grid-container-' + getOrientation">
      <div class="project-text-container">
        <h2>{{project.name}}</h2>
        <p>{{project.description}}</p>
      </div>
      <div class="project-buttons-container flex-container-row">
        <Button v-bind:key="button.id" v-for="button in project.projectButtonsList" :button="button" />
      </div>
      <ul class="project-technologies-container flex-container-row">
        <TechnologyIcon v-bind:key="technology.id" v-for="technology in project.technologiesList" :technology="technology"/>
      </ul>
      <vue-aos animation-class="delayed-shadow-drop" threshold="0.1">
        <img :src="require(`@/assets/images/project_mockups/${project.mockupFileName}`)" class="floating">
      </vue-aos>
  </div>
  </vue-aos>
</template>

<script lang="js">
  import Button from "./Button.vue"
  import TechnologyIcon from "./TechnologyIcon.vue"
  export default  {
    name: 'project-item',
    components: {
      Button,
      TechnologyIcon,
    },
    props: ["project"],
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {

    },
    computed: {
      getOrientation : function (){
      if (this.project.id % 2 == 0){
          return "right";
        }
      else {
        return "left";
      }  
    },
     
}

  }
</script>

<style scoped lang="scss">
@import "../assets/sass/_breakpoints.scss";
  .project-item {
    justify-content: center;
    width: 100%;
    margin: 4rem auto;
    h2{
      margin-top: 0;
      font-weight: 500;
      padding: 0 1rem;
    }
    p{
      padding: 0 1rem;
      line-height: 1.5rem;
      @media #{$medium}{
        padding: 0;
        margin: 0;
      }
    }
    img{
      width: 100%;
      grid-area: project-mockup;
    }
  }
  .project-text-container{
    display: inline-block;
    width: 100%;
    height: 100%;
    grid-area: text-container;
  }
  .project-buttons-container{
    grid-area: buttons-container;
    align-items: flex-end;
    @media #{$medium}{
      justify-content: space-evenly;
    }
  }
  .project-technologies-container{    
    margin: 0;
    width: 100%;
    height: 100%;
    grid-area: technologies-container;
    @media #{$medium}{
      justify-content: center;
    }
  }
  .project-grid-container-right{
    display: grid;
    grid-template-columns: 10rem 10rem 30.7rem;
    grid-template-rows: 16.9rem 3.7rem;
    grid-template-areas: 
      "text-container text-container project-mockup"
      "technologies-container buttons-container project-mockup";
    text-align: right;
    column-gap: 1rem;
    @media #{$medium} {
      grid-template-columns: 14rem 14rem;
      grid-template-rows: auto 3.8rem auto;
      grid-template-areas:
      "text-container text-container"
      "technologies-container buttons-container"
      "project-mockup project-mockup";
      text-align: center;
      row-gap: 1rem;
    }
    @media #{$small}{
      grid-template-columns: 45% 45%;
    }
  }
  .project-grid-container-left{
    display: grid;
    grid-template-columns: 30.7rem 10rem 10rem;
    grid-template-rows: 16.9rem 3.7rem;
    grid-template-areas: 
    "project-mockup text-container text-container"
    "project-mockup buttons-container technologies-container";
    text-align: left;
    column-gap: 1rem;
    @media #{$medium}{
      grid-template-columns: 14rem 14rem;
      grid-template-rows: auto 3.8rem auto;
      grid-template-areas:
      "text-container text-container"
      "technologies-container buttons-container"
      "project-mockup project-mockup";
      text-align: center;
      row-gap: 1rem;
    }
    @media #{$small}{
      grid-template-columns: 45% 45%;
    }
  }
</style>
