<template lang="html">
<div class="project-wrapper" v-observe-visibility="{callback: handleProjectVisibility, once: true, intersection: {threshold: 0.3}}">
  <div class="project-item" :class="['project-grid-container-' + getOrientation, 'slide-in-' + getOrientation]" v-show="projectVisible">
      <div class="project-text-container">
        <h2>{{project.name}}</h2>
        <p>{{project.description}}</p>
      </div>
      <div class="project-buttons-container flex-container-row">
        <Button :button="project.buttonsList[0]"  v-on:buttonClicked="handleOpenProjectGithub()"/>
        <Button :button="project.buttonsList[1]"  v-on:buttonClicked="handleOpenLiveProject()"/>
      </div>
      <ul class="project-technologies-container flex-container-row">
        <TechnologyIcon v-bind:key="technology.id" v-for="technology in project.technologiesList" :technology="technology"/>
      </ul>
        <img :id="mockupId" :src="require(`@/assets/images/project_mockups/${project.mockupFileName}`)">
  </div>
</div>
</template>

<script lang="js">
  import Button from "./Button.vue"
  import ButtonHelper from "../models/ButtonHelper.js"
  import TechnologyIcon from "./TechnologyIcon.vue"
  export default  {
    name: 'project-item',
    components: {
      Button,
      TechnologyIcon,
    },
    props: ["project"],
    mounted () {

    },
    data () {
      return {
        buttonHelper: new ButtonHelper(),
        projectVisible: false,
        mockupFloating: false,
        mockupId: "projectMockup" + this.project.id.toString()
      }
    },
    methods: {
      handleOpenLiveProject : function (){
        if(this.project.buttonsList[1].hrefUrl === undefined){
          this.buttonHelper.emitEventBus("alert-modal-open-clicks", "This project is currently under development. To view the progress so far, click the corresponding Github button.");
        }
        else{
          this.buttonHelper.openExternalLink(this.project.buttonsList[1].hrefUrl);
        }
      },
      handleOpenProjectGithub: function(){
        if(this.project.buttonsList[0].hrefUrl === undefined){
          this.buttonHelper.emitEventBus("alert-modal-open-clicks", "This Github repository was made private. Please contact me if you need access.");
        }
        else{
          this.buttonHelper.openExternalLink(this.project.buttonsList[0].hrefUrl);
        }
      },
      handleProjectVisibility : function (isVisible){
        if(isVisible){
          this.makeProjectVisible();
          setTimeout(()=>{
            this.floatMockup();
          },600)
        }
      },
      floatMockup: function (){
        document.getElementById(this.mockupId).classList.add("shadow-drop", "floating");
        this.mockupFloating = true;
      },
      unfloatMockup: function(){
        document.getElementById(this.mockupId).ClassList.remove("shadow-drop","floating");
        this.mockupFloating = false;
      },
      makeProjectVisible : function (){
        this.projectVisible = true;
      }
    },
    computed: {
      getOrientation : function (){
      if (this.project.id % 2 == 0){
          return "right";
        }
      else {
        return "left";
      }  
    },
     
}

  }
</script>

<style scoped lang="scss">
@import "../assets/sass/_breakpoints.scss";
  .project-wrapper{
    height: 24rem;

    @media #{$medium}{
      height: 40rem;
    }
  }
  .project-item {
    justify-content: center;
    width: 100%;
    margin: 1rem auto;
    h2{
      margin-top: 0;
      font-weight: 500;
      padding: 0 1rem;
    }
    p{
      padding: 0 1rem;
      line-height: 1.5rem;
      @media #{$medium}{
        padding: 0;
        margin: 0;
      }
    }
    img{
      width: 100%;
      border-radius: 10px;
      grid-area: project-mockup;
    }
  }
  .project-text-container{
    display: inline-block;
    width: 100%;
    height: 100%;
    grid-area: text-container;
  }
  .project-buttons-container{
    grid-area: buttons-container;
    align-items: flex-end;
    @media #{$medium}{
      justify-content: space-evenly;
    }
  }
  .project-technologies-container{    
    margin: 0;
    width: 100%;
    height: 100%;
    grid-area: technologies-container;
    @media #{$medium}{
      justify-content: center;
    }
  }
  .project-grid-container-right{
    display: grid;
    grid-template-columns: 10rem 10rem 30.7rem;
    grid-template-rows: 16.9rem 3.7rem;
    grid-template-areas: 
      "text-container text-container project-mockup"
      "technologies-container buttons-container project-mockup";
    text-align: right;
    column-gap: 1rem;
    @media #{$medium} {
      grid-template-columns: 14rem 14rem;
      grid-template-rows: auto 3.8rem auto;
      grid-template-areas:
      "text-container text-container"
      "technologies-container buttons-container"
      "project-mockup project-mockup";
      text-align: center;
      row-gap: 1rem;
    }
    @media #{$small}{
      grid-template-columns: 45% 45%;
    }
  }
  .project-grid-container-left{
    display: grid;
    grid-template-columns: 30.7rem 10rem 10rem;
    grid-template-rows: 16.9rem 3.7rem;
    grid-template-areas: 
    "project-mockup text-container text-container"
    "project-mockup buttons-container technologies-container";
    text-align: left;
    column-gap: 1rem;
    @media #{$medium}{
      grid-template-columns: 14rem 14rem;
      grid-template-rows: auto 3.8rem auto;
      grid-template-areas:
      "text-container text-container"
      "technologies-container buttons-container"
      "project-mockup project-mockup";
      text-align: center;
      row-gap: 1rem;
    }
    @media #{$small}{
      grid-template-columns: 45% 45%;
    }
  }
</style>
