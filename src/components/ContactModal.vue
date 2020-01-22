/* eslint-disable no-console */
<template lang="html">
<div id="contact-modal-wrapper">
  <div id="contact-modal-backdrop" v-on:click="closeModal" v-show="modalVisible"></div>
  <transition name="fade">
    <div id="contact-modal" v-show="modalVisible">
      <h2>Contact Me</h2>
      <i id="form-sent-checkmark" class="fas fa-check"></i>
      <Transition>
        <div id="form-sending-panel"></div>
      </Transition>
      <ValidationObserver v-slot="{ handleSubmit, reset }">
        <form @submit.prevent="handleSubmit(handleFormSubmit)" @reset.prevent="reset" id="contact-modal-form"
          action="https://mailthis.to/cdowner" method="post" target="formSender">
          <ValidationProvider v-slot="fullName" rules="required|alpha_spaces" tag="div">
            <input type="text" name="FullName" v-model="contactForm.fullName" placeholder="* Full Name">
            <div class="validator-text-feedback">{{ fullName.errors[0] }}</div>
          </ValidationProvider>
          <ValidationProvider v-slot="emailAddress" rules="required|email" tag="div">
            <input type="text" name="EmailAddress" v-model="contactForm.emailAddress" placeholder="* Email Address">
            <div class="validator-text-feedback">{{ emailAddress.errors[0] }}</div>
          </ValidationProvider>
          <textarea rows="8" placeholder="* Message" name="MainMessage" v-model="contactForm.mainMessage"></textarea>
          <ValidationProvider v-slot="captcha" :rules="{ required: { allowFalse: false } }" tag="div">
            <label class="contact-modal-checkbox-container">* I am a human and not a robot
              <input name="captcha" type="checkbox" v-model="contactForm.captcha">
              <div class="checkmark"></div>
            </label>
            <div class="validator-text-feedback">{{ captcha.errors[0] }}</div>
          </ValidationProvider>
          <div id="contact-modal-buttons-container" class="flex-container-row">
            <Button :button="pseudoSubmitButton" />
            <a id="contact-modal-cancel-button" v-on:click="closeModal">Cancel</a>
          </div>
          <button id="form-submit-button" type="submit">Submit</button>
        </form>
      </ValidationObserver>
      <iframe id="form-sender" class="hidden" name="formSender" v-on:load="notifyFormRecieved"></iframe>
    </div>
  </transition>
</div>
</template>

<script lang="js">
  import Button from '../components/Button.vue';
  import { eventBus } from '../main';
  import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
  import { required, email, alpha_spaces } from 'vee-validate/dist/rules';
    extend('required', {
      ...required,
      message: 'This field is required.'
    });
    extend('email', {
      ...email,
      message: 'Please use a valid email address.'
    });
    extend('alpha_spaces', {
      ...alpha_spaces,
      message: 'Please only use alphabetical charactors.'
    });

  export default  {
    name: 'contact-modal',
    components: {
      Button,
      ValidationProvider,
      ValidationObserver
    },
    props: [],
    mounted () {

      eventBus.$on('contact-button-clicks',this.openModal);
      eventBus.$on('contact-form-submit-clicks',this.clickSubmitButton);
    },
    data () {
      return {
        modalVisible: false,
        formSubmitted: false,
        contactForm: {
          fullName: "",
          emailAddress: "",
          mainMessage: "",
          captcha: false
        },
        pseudoSubmitButton: {
            text: "Submit",
            textOrIconColor: "white",
            buttonColor: "#008148",
            textSize: '1rem',
            eventBusChannel: 'contact-form-submit-clicks'
        }
      }
    },
    methods: {
      closeModal: function() {  
        this.toggleModalVisibility();
        this.resetForm();
      },
      openModal: function(){
        this.toggleModalVisibility();
      },
      toggleModalVisibility : function (){
        this.modalVisible = !this.modalVisible;
      },
      resetForm: function(){
        this.clearFormFields();
        this.clearFormValidationText();
      },
      clearFormFields : function (){
        this.contactForm.fullName = "";
        this.contactForm.emailAddress = "";
        this.contactForm.mainMessage= "";
        this.contactForm.captcha = false;
      },
      clearFormValidationText: function () {
        document.getElementById('contact-modal-form').reset();
      },
      submitFormData : function(){
        document.getElementById('contact-modal-form').submit();
      },
      clickSubmitButton : function (){
        document.getElementById('form-submit-button').click();
      },
      notifyFormRecieved : function(){
        // eslint-disable-next-line no-console
        console.log('form has been successfully recieved!!!')
      },
      handleFormSubmit : function(){
        // eslint-disable-next-line no-console
        console.log('form has been sent');
        this.submitFormData();
      },
          
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  #contact-modal {
    position: fixed;
    border-radius: 5px;
    padding: 2rem;
    width: 20rem;
    top: 20%;
    right: 0;
    left: 0;
    margin: 0 auto;
    background-color: white;
    z-index: 6;
    iframe{
      border: solid 1px black;
      height: 30rem;
      width: 30rem;
    }
    h2{
      margin-top: 0;
      font-weight: 500;
    }
    form{
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;

    }
    input, textarea{
      display: block;
      margin: 0.5rem 0;
      padding: 0.5rem;
      font-size: 1rem;
      border:1px solid 	#dddddd;
      box-sizing: border-box;
      width: 100%;

      &::placeholder{
        color: #989898; 
      }
      &:focus{
      outline: none;
      border:2px solid #008148 !important;
      }
    }
    textarea {
      resize: none;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.3rem;
    }
    #contact-modal-buttons-container{
    align-items: center;
    margin: 0.5rem 0;
  }
  }
  #contact-modal-backdrop{
    position: fixed;
    top: 0;
    background-color:#404040;
    opacity: 70%;
    height: 100%;
    width: 100%;
    z-index: 5;
  }
  #contact-modal-cancel-button{
    color: #008148;
    margin: 1rem;
    cursor: pointer;
  }
  .contact-modal-checkbox-container {
  display: block;
  position: relative;
  padding-left: 0.1rem;
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem 0rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.contact-modal-checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}
.contact-modal-checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}
.contact-modal-checkbox-container input:checked ~ .checkmark {
  background-color: #008148;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.contact-modal-checkbox-container input:checked ~ .checkmark:after {
  display: block;
}
.contact-modal-checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.validator-text-feedback{
color: red;
text-align: left;
}
#form-submit-button{
  display: none
}
#form-sending-panel{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  top:0;
  right: 0;
  z-index: 5;
  border-radius: 5px;
  opacity: 0.5;
}
#form-sent-checkmark{
  position: absolute;
  font-size: 8rem;
  color: #008148;
  z-index: 6;
  top: 35%;
  left: 35%;
  
}
</style>
