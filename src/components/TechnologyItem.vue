<template lang="html">

  <li class="technology-item">
    <i :class="technology.deviconClasses"></i>
    <h4>{{technology.name}}</h4>
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
    margin: 0.25em;
    i{
      font-size: 4em;
      margin-bottom: 4em;
    }
    h4{
      padding-top: 0.25em;
      margin-top: 0.25em;
      margin-bottom: 0;
      color:#4A4E69;
    }
  }
</style>
