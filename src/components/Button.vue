<template lang="html">

  <div class="button">
    <a :style="buttonStyles" v-on:click="emitClick()">{{button.text}}
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
          padding : this.button.hasOwnProperty('padding') ? this.button.padding : '0.75rem'
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
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, var(--button-color) 50%, var(--button-hover-color) 50%);
    -webkit-transition: background-position 1s;
    -moz-transition: background-position 1s;
    transition: background-position 1s;
    margin: 0 0.5rem;
    text-decoration: none;
    cursor: pointer;

    &:hover{
      background-position: 0 -100%;
    }
    a{
      margin: 0;
    }
  }
  }
  

  
</style>
