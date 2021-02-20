<template lang="html">

  <div class="job-entry">
    <h3>{{job.employer}}</h3>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'JobEntry',
    props: ['job'],
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
  .job-entry {

  }
</style>
