/* eslint-disable no-console */
<template lang="html">
<div id="contact-modal-wrapper">
  <div id="contact-modal-backdrop" v-on:click="closeModal" v-show="modalVisible"></div>
  <transition name="fade">
    <div id="contact-modal" v-show="modalVisible">
      <h2>Contact Me</h2>
      <transition name="scale">
      <i id="form-recieved-checkmark" class="fas fa-check" v-show="checkmarkVisible"></i>
      </transition>
      <transition name="fade">
        <div id="post-submit-panel" v-show="submitPanelVisible"></div>
      </transition>
      <ContactForm/>
      <div id="contact-modal-buttons-container" class="flex-container-row">
            <Button :button="pseudoSubmitButton" v-on:buttonClicked="buttonHelper.emitEventBus(`contact-form-submit-clicks`)" />
            <a id="contact-modal-cancel-button" v-on:click="closeModal">Cancel</a>
          </div>
    </div>
  </transition>
</div>
</template>

<script lang="js">
  import ColorVariables from "../assets/sass/_variables.scss";
  import ContactForm from './ContactForm.vue'
  import { eventBus } from '../main';
  import ButtonHelper from '../models/ButtonHelper.js'
  import Button from '../components/Button.vue';
  export default  {
    name: 'contact-modal',
    components: {
      ContactForm,
      Button
    },
    props: [],
    mounted () {
      eventBus.$on("form-data-sent-notifications", this.toggleSubmitPanelVisibility);
      eventBus.$on("form-data-recieved-notifications",this.handleFormRecieved);
      eventBus.$on('contact-modal-open-clicks',this.openModal);
    },
    data () {
      return {
        buttonHelper: new ButtonHelper(),
        checkmarkVisible: false,
        submitPanelVisible: false,
        modalVisible: false,
        pseudoSubmitButton: {
            text: "Submit",
            contentColor: "white",
            buttonColor: ColorVariables.primary,
            contentSize: '1rem',
            padding: '0.5rem 2rem'
        }
      }
    },
    methods: {
      closeModal: function() {  
        this.toggleModalVisibility();
        this.resetForm();
        this.resetModal();
      },
      openModal: function(){
        this.toggleModalVisibility();
      },
      toggleModalVisibility : function (){
        this.modalVisible = !this.modalVisible;
      },
      toggleSubmitPanelVisibility : function () {
        this.submitPanelVisible = !this.submitPanelVisible;
      },
      toggleCheckmarkVisibility : function (){
        this.checkmarkVisible = !this.checkmarkVisible;
      },
      resetForm: function(){
        eventBus.$emit("reset-contact-form");
      },
      resetModal: function (){
        this.checkmarkVisible = false;
        this.submitPanelVisible = false;
      },
      handleFormRecieved : function (){
        this.toggleCheckmarkVisibility();
         setTimeout(() => {
           this.closeModal();
         }, 2000);
      }
          
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../assets/sass/_variables.scss";
@import "../assets/sass/_breakpoints.scss";
  #contact-modal {
    position: fixed;
    border-radius: 5px;
    padding: 2rem;
    width: 20rem;
    top: 20%;
    right: 0;
    left: 0;
    margin: 0 auto;
    background-color: $foreground;
    z-index: 6;
    @media #{$small}{
      width: 80vw;
      padding: 1rem;
    }
    iframe{
      height: 30rem;
      width: 30rem;
    }
    h2{
      margin-top: 0;
    }
    #contact-modal-buttons-container{
    align-items: center;
    margin: 0.5rem 0;
  }
  }
  #contact-modal-backdrop{
    position: fixed;
    top: 0;
    right: 0;
    background-color:#404040;
    opacity: 0.7;
    height: 100vh;
    width: 100vw;
    z-index: 5;
  }
 
  #post-submit-panel{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    top:0;
    right: 0;
    z-index: 5;
    border-radius: 5px;
    opacity: 0.6;
  }
  #form-recieved-checkmark{
    position: absolute;
    font-size: 12rem;
    color: $primary;
    z-index: 6;
    top: 30%;
    left: 0;
    right: 0;
    @media #{$small}{
      font-size: 10rem;
    }
}
#contact-modal-cancel-button{
    color: $primary;
    margin: 1rem;
    cursor: pointer;
  }
</style>
