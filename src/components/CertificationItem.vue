<template lang="html">

  <li class="certification-item">
      <div>
    <img :src="require(`@/assets/images/certification_logos/${certification.logoName}`)" alt="certification logo" class="floating-low">
    <div class="certification-item-text-container">
      <h4>{{certification.name}}</h4>
      <h4>{{certification.vendorName}}</h4>
    </div>
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
    width: 16em;
    height: 5em;
    margin: 0.3em 0.3em 0.9em 0;


    img{
      max-width: 5em;
      display: inline-block;
      margin-right: 0.25em;
    }
    h4{
      font-size: 0.9rem;
      margin: 0.3em;
      font-weight: 400;
      &:first-child{
        font-weight: 600;
      }
    }
  }
  .certification-item-text-container{
    text-align: left;
    display: inline-block;
    vertical-align: top;
    width: 60%;
    height: 100%;
  }
</style>
