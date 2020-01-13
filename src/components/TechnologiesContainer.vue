<template lang="html">
<div>
  <h4>{{technologyData.name}}</h4>
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
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  h4{
    margin-bottom: 0.3em;
  }
  
</style>
