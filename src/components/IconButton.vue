<template lang="html">

  <div class="icon-button">
    <a :style="buttonColorVariables" :href="button.hyperlinkUrl" target="_blank" >
      <i :style="iconStyles" :class="button.iconClasses"></i>
      </a>
  </div>

</template>

<script lang="js">
  import tinycolor from 'tinycolor2'
  export default  {
    name: 'icon-button',
    props: ["button"],
    mounted () {

    },
    data () {
      return {
        iconStyles: {
          color: this.button.iconColor,
          'font-size' : this.button.iconSize
        }
      }
    },
    methods: {
      getButtonHoverColor(){
        let color = tinycolor(this.button.buttonColor);
        return color.lighten(15).toString();
      }
    },
    computed: {
      buttonColorVariables(){
        return {
          '--button-color': this.button.buttonColor,
          '--button-hover-color' : this.getButtonHoverColor()
        }
      }
    }
}


</script>

<style scoped lang="scss">
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, var(--button-color) 50%, var(--button-hover-color) 50%);
    -webkit-transition: background-position 1s;
    -moz-transition: background-position 1s;
    transition: background-position 1s;
    margin: 0 0.5rem;
    padding: 0.75rem;
    text-decoration: none;
    border-radius: 5%;
    &:hover{
      background-position: 0 -100%;
    }
  }
</style>
