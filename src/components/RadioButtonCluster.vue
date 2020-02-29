<template lang="html">

  <div class="radio-button-cluster">
    <label class="radio-button" v-bind:key="radioButton.id" v-for="radioButton in radioButtonCluster.radioButtonList">
        <input type="radio" :name="radioButtonCluster.name" :value="radioButton.text" v-on:change="emitButtonToggle(radioButton.text)">
        <span :style="spanStyles">{{radioButton.text}}</span>
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
      

    },
    data () {
      return {
        currentlyToggledButton: this.buttonList[0].text,
        radioButtonList : []
      }
    },
    methods: {
      handleRadioButtonClick : function (){

      },
      changeButtonToToggled : function (){
      

      },
      changeButtonToUnToggled : function (){

      },
      getButton : function (buttonText){
        return this.buttonList.find(button => button.text === buttonText);
      },
      initializeRadioButtonsList : function (){
        
      },
      emitButtonToggle : function (radioButtonValue){
        this.$emit('radioButtonToggled',radioButtonValue);
      }
    },
    computed: {
      spanStyles : function() {
        return {
          color: this.radioButtonCluster.textColor
        }
      }

    }
}


</script>

<style scoped lang="scss">
  .radio-button-cluster {
    label{
      border-radius: 50px;
      cursor: pointer;
      margin: 0 1rem;
      padding: 0.5rem 1rem;
      input[type="radio"]{
        appearance: none;
        &:checked{
          background-color: white;
        }
      }
    }
  }
  .checked-radio-button{

  }
  .radio-button{

  }
</style>
