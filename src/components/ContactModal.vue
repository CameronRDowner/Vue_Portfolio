/* eslint-disable no-console */
<template lang="html">
<div id="contact-modal-wrapper">
<div id="contact-modal-backdrop" v-on:click="closeContactModal" class="hidden"></div>
    <div id="contact-modal" class="hidden">
        <h1>Contact Me</h1>
        <form>
            <input type="text" name="full-name" placeholder="* Full Name">
            <input type="text" name="email-address" placeholder="* Email Address" >
            <textarea rows="8" placeholder="* Message" name="main-message"></textarea>
        </form>
    </div>
</div>
  

</template>

<script lang="js">
  import { eventBus } from '../main';
  export default  {
    name: 'contact-modal',
    props: [],
    mounted () {
      eventBus.$on('contact-button-clicks',this.openContactModal)
    },
    data () {
      return {

      }
    },
    methods: {
      closeContactModal: function() {
        
      
        let contactModalBackdrop = document.getElementById("contact-modal-backdrop");
        let contactModal = document.getElementById("contact-modal");
        contactModalBackdrop.classList.add("hidden");
        contactModal.classList.add("hidden");
      },
      openContactModal: function(){
        // eslint-disable-next-line no-console
        console.log('modal opened');
        let contactModalBackdrop = document.getElementById("contact-modal-backdrop");
        let contactModal = document.getElementById("contact-modal");
        contactModalBackdrop.classList.remove("hidden");
        contactModal.classList.remove("hidden");
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
    top: 25%;
    right: 0;
    left: 0;
    margin: 0 auto;
    background-color: white;
    z-index: 6;
    h1{
      margin-top: 0;
    }
    form{
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;

    }
    input{
      display: block;
      margin: 0.5rem 0;
      padding: 1rem;
      font-size: 1rem;
    }
    textarea {
      display: block;
      resize: none;
      margin: 0.5rem 0;
      padding: 1rem;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      line-height: 1.3rem;
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
</style>
