<template lang="html">

  <section class="contact-form">
    <ValidationObserver v-slot="{ handleSubmit, reset }">
        <form @submit.prevent="handleSubmit(handleFormSubmit)" @reset.prevent="reset" id="contact-modal-form"
          action="https://mailthis.to/cdowner" method="post" target="FormSender">
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
          <button id="form-submit-button" type="submit">Submit</button>
        </form>
      </ValidationObserver>
      <iframe id="form-sender" class="hidden" name="FormSender" v-on:load="notifyFormRecieved"></iframe>
  </section>

</template>

<script lang="js">
  import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
  import { required, email, alpha_spaces } from 'vee-validate/dist/rules';
  import { eventBus } from '../main';
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
    name: 'contact-form',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    props: [],
    mounted () {
      eventBus.$on('contact-form-submit-clicks', this.clickSubmitButton);
      eventBus.$on("reset-contact-form", this.resetForm);
    },
    data () {
      return {
        formSubmitted: false,
        contactForm: {
          fullName: "",
          emailAddress: "",
          mainMessage: "",
          captcha: false
        }
      }
    },
    methods: {
      resetForm : function () {
        this.clearFormFields();
        this.clearFormValidationText();
        this.formSubmitted=false;
      },
      clearFormFields :function () {
        this.contactForm.fullName = "";
        this.contactForm.emailAddress = "";
        this.contactForm.mainMessage= "";
        this.contactForm.captcha = false;
      },
      clearFormValidationText: function () {
        document.getElementById('contact-modal-form').reset();
      },
      submitFormData : function(){
        this.formSubmitted = true;
        document.getElementById('contact-modal-form').submit();
      },
      clickSubmitButton : function (){
        //added a hidden submit button to click because Vee Validate wouldn't validate before submitting with just a form submit in javascript
        document.getElementById('form-submit-button').click();
      },
      notifyFormRecieved : function(){
        if(this.formSubmitted === true){
          eventBus.$emit("form-data-recieved-notifications");
        }
      },
      notifyFormSent : function(){
        eventBus.$emit("form-data-sent-notifications");
      },
      handleFormSubmit : function(){
        this.notifyFormSent();
        this.submitFormData();
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .contact-form {
    height: 100%;
    width: 100%;
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
</style>
