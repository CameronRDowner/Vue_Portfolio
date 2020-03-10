<template lang="html">

  <li class="technology-icon">
      <i :class="technology.deviconClasses"></i>
      <div v-if="technology.name !== undefined">
        <h4  class="floating-low">{{technology.name}}</h4>
      </div>
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
@import "../assets/sass/_variables.scss";
  .technology-icon {
    margin: 0.5rem 0.4rem;
    i{
      font-size: 3.5rem;
    }
    div{
      margin-top: 0.3rem;
      margin-bottom: 0;
      box-sizing: border-box;
      h4{
      display: inline-block;
      color: white;
      font-weight: 400;
      margin: 0;
      padding: 0.3rem 0.5rem;
      background-color: $off-black;
    }
    }
  }
</style>
