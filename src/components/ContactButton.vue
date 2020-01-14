<template lang="html">
  <div class="contact-button">
    <a :style="buttonColorVariables" :href="contactButton.hyperlinkUrl" target="_blank" >
      <i :style="{ color: contactButton.iconColor }" :class="contactButton.iconClasses"></i>
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
      buttonColorVariables(){
        return {
          '--button-color': this.contactButton.buttonColor,
          '--button-hover-color' : this.contactButton.buttonHoverColor
        }
      }
    }
}


</script>

<style scoped lang="scss">
.contact-button{
  i{
      font-size: 2.2em;
      text-align: center;
    }
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5em;
    width: 5.5em;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, var(--button-color) 50%, var(--button-hover-color) 50%);
    -webkit-transition: background-position 1s;
    -moz-transition: background-position 1s;
    transition: background-position 1s;
    margin: 0 0.5em;
    text-decoration: none;
    border-radius: 5%;
    &:hover{
      background-position: 0 -100%;
    }
  }
}
  
</style>
