<template lang="html">

  <section id="education">
    <h1>Education</h1>
    <div id="education-containers-wrapper">
    <CertificationsContainer/>
    <DiplomasContainer/>
    </div>
  </section>

</template>

<script lang="js">
  import CertificationsContainer from "./CertificationsContainer.vue"
  import DiplomasContainer from "./DiplomasContainer.vue"
  export default  {
    name: 'education-section',
    components: {
      CertificationsContainer,
      DiplomasContainer
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
    padding-bottom: 3em;
  }
  #education-containers-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
</style>
