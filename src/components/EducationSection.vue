<template lang="html">

  <section id="education">
    <h1>Education</h1>
    <CertificationContainer/>
  </section>

</template>

<script lang="js">
  import CertificationContainer from "./CertificationsContainer.vue"
  export default  {
    name: 'education-section',
    components: {
      CertificationContainer
    },
    props: [],
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
  #education {

  }
</style>
