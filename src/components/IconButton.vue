<template lang="html">

  <div class="icon-button">
    <a :style="buttonColorVariables" 
    :href="button.hrefUrl" target="_blank"
    v-on:click="emitClick">
      <i :style="iconStyles" :class="button.iconClasses"></i>
      </a>
  </div>

</template>

<script lang="js">
  import tinycolor from 'tinycolor2';
  import { eventBus } from "../main";
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
      emitClick: function () {
        // eslint-disable-next-line no-console
        console.log('emit sent');
        eventBus.$emit(this.button.eventBusChannel);
      }

    },
    computed: {
      buttonColorVariables: function (){
        return {
          '--button-color': this.button.buttonColor,
          '--button-hover-color' : tinycolor(this.button.buttonColor).lighten(15).toString()
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
      cursor: pointer;
      background-position: 0 -100%;
    }
  }
</style>
