<template lang="html">

  <footer>
    <div class="floating-box">
      <h3>Thanks for checking out my portfolio!</h3>
      <p>Feel free to reach out to me at any of my below handles</p>
      <ContactButtonsContainer/>
      <div>

      </div>
    </div>
  </footer>

</template>

<script lang="js">
  import ContactButtonsContainer from "./ContactButtonsContainer.vue"
  export default  {
    name: 'footer',
    components: {
      ContactButtonsContainer
    },
    props: [],
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
  footer {
    position: relative;
    height: 15em;
    background-color: gray;
    .floating-box{
      font-size: 1rem;
      bottom: 2em;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 22rem;
    }
    h3{
      font-weight: 500;
    }
  }
</style>
