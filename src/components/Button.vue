<template lang="html">

  <div class="button">
    <a class="hover-radial-out" :style="buttonStyles" v-on:click="emitClick()">{{button.text}}
      <i  v-if="button.iconClasses !== undefined" :class="button.iconClasses" :style="iconStyles"></i>
      <i  v-if="button.iconClasses !== undefined && !button.text" class="fas fa-envelope" :style="pseudoIconStyles"></i>
      </a>
  </div>

</template>

<script lang="js">
  import tinycolor from 'tinycolor2';
  export default  {
    name: 'Button',
    props: ["button"],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      emitClick: function () {
        this.$emit('buttonClicked');
      }
    },
    computed: {
      buttonStyles: function (){
        return {
          color : this.button.contentColor,
          'font-size' : this.button.contentSize ? this.button.contentSize : '1.7rem',
          '--button-color': this.button.buttonColor,
          '--button-hover-color' : tinycolor(this.button.buttonColor).lighten(15).toString(),
          padding : this.button.padding ? this.button.padding : '0.8rem',
          border : this.button.altStyling ? 'solid 2px' : 'none',
          'border-color' : this.button.borderColor ? this.button.borderColor : this.button.contentColor,
          'box-shadow' : this.button.boxShadow ? '1px 1px 4px 1px rgba(0,0,0,0.43)' : 'none'
        }
      },
      //added pseudo icon to keep round button aspect ratio consistant
      pseudoIconStyles: function(){
        return{
          opacity : 0
        }
      },
      iconStyles: function(){
        return {
          'padding-left' : this.button.iconClasses && this.button.text ? '0.4rem' : '0',
          position : this.button.text ? 'static' : 'absolute'
        }
      }
      
    }
}


</script>

<style scoped lang="scss">
  .button{
    display: inline-block;
    position: relative;
    a{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-color);
    margin: 0 0.25rem;
    text-decoration: none;
    cursor: pointer;
    border-radius: 50px;

    &:hover{
      background-position: 0 -100%;
    }
  }
  .hover-radial-out:before{
    background-color: var(--button-hover-color);
  }
  }

  
</style>
