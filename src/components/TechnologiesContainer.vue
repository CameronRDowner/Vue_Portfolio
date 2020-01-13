<template lang="html">
<div>
  <h3>{{technologyData.name}}</h3>
  <ul class="technologies-container">
    <Technology v-bind:key="technology.id" v-for="technology in technologyData.technologyList" :technology="technology"></Technology>
  </ul>
</div>
</template>

<script lang="js">
  import Technology from "../components/TechnologyItem.vue"
  export default  {
    name: 'technologies-container',
    components: {
      Technology
    },
    props: ["technologyData"],
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
  .technologies-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 11em;
  }
  h3{
    font-weight: 500;
    margin: 0 0 0.6em 0;
  }
  
</style>
