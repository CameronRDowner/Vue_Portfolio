<template lang="html">
  <div class="contact-button">
    <a :href="contactButton.hyperlinkUrl" target="_blank" >
      <i :class="contactButton.iconClasses"></i>
      </a>
  </div>
  

</template>

<script lang="js">

  export default  {
    name: 'contact-button',
    props: ["contactButton"],
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
.contact-button{
  i{
      font-size: 4em;
      text-align: center;
    }
  a{
    display: inline-block;
    height: 5em;
    width: 5em;
    border: solid 1px black;
  }
}
  
</style>
