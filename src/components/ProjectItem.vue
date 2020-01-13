<template lang="html">

  <section class="project-item-wrapper">
    <h2>{{project.name}}</h2>
    <img src="" >
  </section>

</template>

<script lang="js">

  export default  {
    name: 'ProjectItem',
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

    }
}


</script>

<style scoped lang="scss">
  .project-item-wrapper {
    margin: 1em;
  }
</style>
