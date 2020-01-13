<template lang="html">

  <li class="technology-item">
    <i :class="technology.deviconClasses"></i>
    <h5>{{technology.name}}</h5>
  </li>

</template>

<script lang="js">

  export default  {
    name: 'technology-item',
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
  .technology-item {
    margin: 0.5em;
    i{
      font-size: 2.5em;
      margin-bottom: 4em;
    }
    h5{
      border-top: solid 1px #e6e6e6;
      padding-top: 0.25em;
      margin-top: 0.25em;
    }
  }
</style>
