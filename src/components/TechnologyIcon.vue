<template lang="html">

  <li class="technology-icon">
    <i :class="technology.deviconClasses"></i>
    <h4 v-if="technology.name !== undefined">{{technology.name}}</h4>
  </li>

</template>

<script lang="js">

  export default  {
    name: 'technology-icon',
    props: ["technology"],
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
  .technology-icon {
    margin: 0.25em;
    i{
      font-size: 3.5rem;
    }
    h4{
      padding-top: 0.25em;
      margin-top: 0.5em;
      margin-bottom: 0;
      color:#4A4E69;
    }
  }
</style>
