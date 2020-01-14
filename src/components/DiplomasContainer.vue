<template lang="html">
  <div id="diplomas-wrapper">
    <h2>Diplomas</h2>
  <ul id="diplomas-container">
    <diplomaItem v-bind:key="diploma.id" v-for="diploma in diplomasList" :diploma="diploma"/>
  </ul>
  </div>

</template>

<script lang="js">
  import DiplomaItem from "./DiplomaItem.vue"
  export default  {
    name: 'diplomas-container',
    components: {
      DiplomaItem
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        diplomasList: [
          {
            id: 1,
            name: "Bachelor of Science Software Development",
            accolade: "",
            graduationDate: "September 25, 2019",
            schoolLogoName: "wgu.png"
          },
          {
            id: 2,
            name: "Associate of Science",
            accolade: "with High Honors",
            graduationDate: "May 16, 2018",
            schoolLogoName: "ecc.png"
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
  #diplomas-container {

  }
  #diplomas-wrapper{
    width: 20em;
    padding: 0 1em;
    h2{
      font-weight: 500;
    }
  }
</style>
