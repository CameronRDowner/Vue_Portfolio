<template lang="html">

  <div class="button">
    <a class="radial-out" :style="buttonStyles" v-on:click="emitClick()">{{button.text}}
      <i  v-if="button.iconClasses !== undefined" :class="button.iconClasses" :style="iconStyles"></i>
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
      },
    },
    computed: {
      buttonStyles: function (){
        return {
          color : this.button.contentColor,
          'font-size' : this.button.hasOwnProperty('contentSize') ? this.button.contentSize : '1.75rem',
          '--button-color': this.button.buttonColor,
          '--button-hover-color' : tinycolor(this.button.buttonColor).lighten(15).toString(),
          padding : this.button.hasOwnProperty('padding') ? this.button.padding : '0.75rem',
          border : this.button.hasOwnProperty('altStyling') ? 'solid 2px' : 'none',
          'border-color' : this.button.hasOwnProperty('borderColor') ? this.button.borderColor : this.button.contentColor
        }
      },
      iconStyles: function(){
        return {
          'padding-left' : this.button.iconClasses && this.button.text ? '0.4rem' : '0'
        }
      }
      
    }
}


</script>

<style scoped lang="scss">
  .button{
    a{
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-color);
    margin: 0 0.5rem;
    text-decoration: none;
    cursor: pointer;
    border-radius: 50px;

    &:hover{
      background-position: 0 -100%;
    }
    a{
      margin: 0;
    }
  }
  .radial-out:before{
    background-color: var(--button-hover-color);
  }
  }
  

  
</style>
