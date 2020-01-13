<template lang="html">

  <li class="certification-item">
    <img v-bind:src="certification.logoPath" alt="certification logo">
    <div class="certification-item-text-container">
      <h4>{{certification.name}}</h4>
      <h4>{{certification.vendorName}}</h4>
    </div>
  </li>

</template>

<script lang="js">

  export default  {
    name: 'certification-item',
    props: ["certification"],
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
  .certification-item {
    h4{
      margin: 0.3em;
      &:first-child{
        font-weight: 600;
      }
    }
  }
  .certification-item-text-container{
    
  }
</style>
