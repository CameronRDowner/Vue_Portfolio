/* eslint-disable no-console */
<template lang="html">
<div id="contact-modal-wrapper">
<div id="contact-modal-backdrop" v-on:click="closeModal" v-show="modalVisible"></div>
    <transition name="fade">
    <div id="contact-modal" v-show="modalVisible">
          <h1>Contact Me</h1>
        <form id="contact-modal-form" action="https://mailthis.to/cdowner" method="post" target="formSending">
            <input type="text" name="full-name" placeholder="* Full Name">
            <input type="text" name="email-address" placeholder="* Email Address" >
            <textarea rows="8" placeholder="* Message" name="main-message"></textarea>
            <label class="contact-modal-checkbox-container">* I am a human and not a robot
            <input type="checkbox">
            <span class="checkmark"></span>
            </label>
            <div id="contact-modal-buttons-container" class="flex-container-row">
              <Button  :button="submitButton" />
              <a id="contact-modal-cancel-button" v-on:click="closeModal">Cancel</a>
            </div>
        </form>
        <iframe class="hidden" name="formSending" v-on:load="clearModal"></iframe>
        </div>
        </transition>
</div>
</template>

<script lang="js">
  import Button from '../components/Button.vue';
  import { eventBus } from '../main';
  export default  {
    name: 'contact-modal',
    components: {
      Button
    },
    props: [],
    mounted () {
      eventBus.$on('contact-button-clicks',this.openModal)
    },
    data () {
      return {
        submitButton: {
            text: "Submit",
            textOrIconColor: "white",
            buttonColor: "#008148",
            textSize: '1rem',
            formId: "contact-modal-form"
        },
        modalVisible: false
      }
    },
    methods: {
      closeModal: function() {  
        this.modalVisible = false;
      },
      openModal: function(){
        this.modalVisible = true;
      },
      clearModal: function(){

      },
      notifyFormSent : function(){
        document.getElementById('contact-modal-content-wrapper').classList;
      }
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
    h1{
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

      &::placeholder{
        color: #989898; 
      }
      &:focus{
      outline: none;
      border:1px solid #008148;
      box-shadow: 0 0 4px #008148;
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
</style>
