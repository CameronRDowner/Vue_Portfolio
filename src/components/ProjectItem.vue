<template lang="html">

  <section id="project-item">
    <h2>{{project.name}}</h2>
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
  #project-item {

  }
</style>
