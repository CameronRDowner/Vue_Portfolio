<template lang="html">
  <div id="alert-modal-wrapper">
    <div id="alert-modal-backdrop" v-on:click="closeModal" v-show="alertModalVisible"></div>
    <transition name="fade">
  <div class="alert-modal" v-show="alertModalVisible">
    <a v-on:click="closeModal">x</a>
    <p>{{alertMessage}}</p>
  </div>
  </transition>
  </div>

</template>

<script lang="js">
  import { eventBus } from '../main';
  export default  {
    name: 'alert-modal',
    props: ["alertModalMessage"],
    mounted () {
      eventBus.$on("alert-modal-open-clicks", alertMessage => {
        this.handleAlertModalCall(alertMessage);
      });
    },
    data () {
      return {
        alertMessage: "",
        alertModalVisible: false,
      }
    },
    methods: {
      openModal : function (){
        this.alertModalVisible = true;
      },
      closeModal : function(){
        this.alertModalVisible = false;
      },
      setModalMessage : function(_alertMessage){
        this.alertMessage = _alertMessage
      },
      handleAlertModalCall: function(alertMessage){
        this.setModalMessage(alertMessage);
        this.openModal();
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../assets/sass/_variables.scss";
@import "../assets/sass/_breakpoints.scss";
  .alert-modal {
    position: fixed;
    border-radius: 5px;
    padding: 2rem;
    width: 20rem;
    top: 35%;
    right: 0;
    left: 0;
    margin: 0 auto;
    background-color: $foreground;
    z-index: 6;
    padding: 2rem;
    @media #{$small}{
      width: 80vw;
      padding: 2rem 1rem;
    }
    p{
      margin: 0;
      line-height: 1.5rem;
    }
    a{
      position: absolute;
      top: 0.25rem;
      right: 0.75rem;
      font-family: monospace;
      font-size: 1.25rem;
      cursor: pointer;
    }
  }
  #alert-modal-backdrop{
    position: fixed;
    top: 0;
    background-color:#404040;
    opacity: 0.7;
    height: 100%;
    width: 100%;
    z-index: 5;
  }
</style>
