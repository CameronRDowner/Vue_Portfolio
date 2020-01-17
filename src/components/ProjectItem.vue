<template lang="html">

  <div class="project-item">
    <div class="project-text" :style="{ 'text-align' : getAlignmentValue}">
    <h2>{{project.name}}</h2>
    <p>{{project.description}}</p>
    </div>
    <img :style="{float : getAlignmentValue}" :src="require(`@/assets/images/project_mockups/${project.mockupFileName}`)">
  </div>

</template>

<script lang="js">

  export default  {
    name: 'project-item',
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
      getAlignmentValue(){
      if (this.project.id % 2 == 0){
          return "right";
        }
      else {
        return "left";
      }  
    }
}

  }
</script>

<style scoped lang="scss">
$tablet-max-width: "(max-width: 770px)";
  .project-item {
    display: block;
    border: solid 1px black;
    width: 100%;
    overflow: hidden;
    margin: 2rem 0;
    h2{
      font-weight: 500;
    }
    img{
      width: 25rem;
      border: solid 1px black;
      @media #{$tablet-max-width}{
          float: none!important;
    }
    }
  }
  .project-text{
    border: solid 1px black;
    display: inline-block;
    width: 19.75rem;
    padding: 0 1rem;
    margin: 0 auto;
    @media #{$tablet-max-width}{
      text-align: center !important;
    }
  }
</style>
