<template lang="html">

  <li class="diploma-item">
    <img :src="require(`@/assets/images/school_logos/${diploma.schoolLogoName}`)" alt="school logo">
    <h2>{{diploma.name}}</h2>
    <i><h3>{{diploma.accolade}}</h3></i>
    <h3>{{diploma.graduationDate}}</h3>
  </li>

</template>

<script lang="js">

  export default  {
    name: 'diploma-item',
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
      width: 19em;
    }
    h2{
      font-weight: 500;
    }
    h2, h3 {
      margin: 0.3em auto;
    }
  }
</style>
