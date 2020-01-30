<template lang="html">

  <div class="button">
    <a :style="buttonColorVariables" :href="button.hrefUrl" target="_blank" v-on:click="handleClickEvent">
      <p :style="buttonTextStyles" :class="button.iconClasses">{{button.text}}</p>
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
      }
    },
    methods: {
      emitClick: function () {
        eventBus.$emit(this.button.eventBusChannel);
      },
      emitClickWithMessage: function(){
        eventBus.$emit(this.button.eventBusChannel, this.button.eventBusMessage);
      },
      handleEmitClick : function(){
        if(this.button.hasOwnProperty("eventBusMessage")){
          this.emitClickWithMessage();
        }
        else{
          this.emitClick();
        }
      },
      handleClickEvent: function() {
        if(this.button.hasOwnProperty('eventBusChannel')){
          this.handleEmitClick();
        }
        else{
          return
        }
      }

    },
    computed: {
      buttonColorVariables: function (){
        return {
          '--button-color': this.button.buttonColor,
          '--button-hover-color' : tinycolor(this.button.buttonColor).lighten(15).toString()
        }
      },
      buttonTextStyles: function (){
        return {
          color : this.button.textOrIconColor,
          'font-size' : this.button.hasOwnProperty('textSize') ? this.button.textSize : '1.75rem'
        }
      }
      
    }
}


</script>

<style scoped lang="scss">
  .button{
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
    p{
      margin: 0;
    }
  }
  }
  

  
</style>
