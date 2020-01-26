<template lang="html">
  <vue-aos animation-class="scale-enter-active" :style="{'animation-duration' : '0.8s'}">
  <li class="diploma-item">
    <img :src="require(`@/assets/images/school_logos/${diploma.schoolLogoName}`)" alt="school logo">
    <h3>{{diploma.name}}</h3>
    <i><h4>{{diploma.accolade}}</h4></i>
    <h4>{{diploma.graduationDate}}</h4>
  </li>
  </vue-aos>
</template>

<script lang="js">
  export default  {
    name: 'diploma-item',
    components: {
    },
    props: ["diploma"],
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
  .diploma-item {
    margin: 2em auto;
    img{
      width: 17em;
    }
    h3{
      font-weight: 500;
    }
    h3, h4 {
      margin: 0.3em auto;
    }
  }
</style>
