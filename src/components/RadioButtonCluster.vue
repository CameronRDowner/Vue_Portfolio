<template lang="html">

  <div class="radio-button-cluster" :style="colorVariables">
    <label class="radio-button" :class="currentlyToggledButton === radioButton.text ? 'toggled-radio-button' : ['untoggled-radio-button', 'hover-radial-out']" v-bind:key="radioButton.id" v-for="radioButton in radioButtonCluster.radioButtonList" >
        <input type="radio" :name="radioButtonCluster.name" :value="radioButton.text" v-on:change="handleRadioButtonToggle(radioButton.text)">
        <span>{{radioButton.text}}</span>
    </label>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'radio-button-cluster',
    props: ['radioButtonCluster'],
    components: {
   
    },
    created () {
      this.setInitialToggle();
    },
    data () {
      return {
        currentlyToggledButton: ""
      }
    },
    methods: {
      setCurrentlyToggledButton : function(radioButtonText){
        this.currentlyToggledButton = radioButtonText;
        // eslint-disable-next-line no-console
        console.log(this.currentlyToggledButton);
      },
      handleRadioButtonToggle : function (radioButtonText){
        this.emitButtonToggle(radioButtonText);
        this.setCurrentlyToggledButton(radioButtonText);
      },
      getButton : function (buttonText){
        return this.buttonList.find(button => button.text === buttonText);
      },
      setInitialToggle: function (){
        this.setCurrentlyToggledButton(this.radioButtonCluster.radioButtonList[0].text)
      },
      emitButtonToggle : function (radioButtonValue){
        this.$emit('radioButtonToggled',radioButtonValue);
      }
    },
    computed: {
      colorVariables : function (){
        return {
          '--button-color': this.radioButtonCluster.buttonColor,
          '--button-content-color' : this.radioButtonCluster.buttonContentColor,
        }
        
      }
      

    }
}


</script>

<style scoped lang="scss">
  .radio-button-cluster {
    margin: 2.3rem 2rem 2rem 2rem;
    .radio-button{
      border-radius: 50px;
      border: solid 2px var(--button-color);
      cursor: pointer;
      margin: 0 1rem;
      padding: 0.5rem 1rem;
      span{
        color: var(--button-content-color);
      }
      input[type="radio"]{
        appearance: none;
        display: none;
      }
    }
  }
  .toggled-radio-button{
    background-color: var(--button-color);
  }
  .untoggled-radio-button{
    background-color: none;
  }
  .hover-radial-out:before{
      background-color: var(--button-color);
    }
</style>
