import { eventBus } from "../main";
export default class ButtonHelper {
    
  constructor(){
    this.openExternalLink = function(url){
        window.open(url);
    }
    this.emitEventBus = function(eventBusChannel, dataToSend){
      if(dataToSend === undefined){
        eventBus.$emit(eventBusChannel);
      }
      else{
        eventBus.$emit(eventBusChannel, dataToSend); 
      }  
    }
  }

    
}