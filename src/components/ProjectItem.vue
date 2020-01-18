<template lang="html">

  <div class="project-item" :class="getOrientation">
    
      <div class="project-text-container" :style="{ 'text-align' : getAlignmentValue}">
        <h2>{{project.name}}</h2>
        <p>{{project.description}}</p>
      </div>
      <div class="project-buttons-container flex-container-row">
        <IconButton v-bind:key="button.id" v-for="button in project.projectButtonsList" :button="button" />
      </div>
      <ul class="project-technologies-container flex-container-row">
        <TechnologyIcon v-bind:key="technology.id" v-for="technology in project.technologiesList" :technology="technology"/>
      </ul>
    <img 
      :src="require(`@/assets/images/project_mockups/${project.mockupFileName}`)">
  </div>

</template>

<script lang="js">
  import IconButton from "./IconButton.vue"
  import TechnologyIcon from "./TechnologyIcon.vue"
  export default  {
    name: 'project-item',
    components: {
      IconButton,
      TechnologyIcon
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
      getOrientation(){
      if (this.project.id % 2 == 0){
          return "project-grid-container-right";
        }
      else {
        return "project-grid-container-left";
      }  
    },
}

  }
</script>

<style scoped lang="scss">
$tablet-max-width: "(max-width: 770px)";
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
    }
    img{
      width: 100%;
      border: solid 1px black;
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
    @media #{$tablet-max-width}{
      justify-content: flex-start;
    }
  }
  .project-technologies-container{    
    margin: 0;
    width: 100%;
    height: 100%;
    grid-area: technologies-container;
    @media #{$tablet-max-width}{
      justify-content: flex-end;
    }
  }
  .project-grid-container-right{
    display: grid;
    grid-template-columns: 10rem 10rem 30rem;
    grid-template-rows: 16.6rem 3.5rem;
    grid-template-areas: 
      "text-container text-container project-mockup"
      "technologies-container buttons-container project-mockup";
    text-align: right;
    column-gap: 1rem;
    @media #{$tablet-max-width}{
      grid-template-columns: 15rem 15rem;
      grid-template-rows: 10.5rem 3.8rem 20.1rem;
      grid-template-areas:
      "text-container text-container"
      "technologies-container buttons-container"
      "project-mockup project-mockup";
      text-align: center;
      row-gap: 1rem;
    }
  }
  .project-grid-container-left{
    display: grid;
    grid-template-columns: 30rem 10rem 10rem;
    grid-template-rows: 16.6rem 3.5rem;
    grid-template-areas: 
    "project-mockup text-container text-container"
    "project-mockup buttons-container technologies-container";
    text-align: left;
    column-gap: 1rem;
    @media #{$tablet-max-width}{
      grid-template-columns: 15rem 15rem;
      grid-template-rows: 10.5rem 3.8rem 20.1rem;
      grid-template-areas:
      "text-container text-container"
      "technologies-container buttons-container"
      "project-mockup project-mockup";
      text-align: center;
      row-gap: 1rem;
    }
  }
</style>
