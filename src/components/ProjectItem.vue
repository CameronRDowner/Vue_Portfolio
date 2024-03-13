<template lang="html">
  <div
    class="project-wrapper"
    v-observe-visibility="{
      callback: handleProjectVisibility,
      once: true,
      intersection: { threshold: 0.3 },
    }"
  >
    <div
      class="project-item"
      :class="[
        'project-grid-container-' + getOrientation,
        'slide-in-' + getOrientation,
      ]"
      v-show="projectVisible"
    >
      <div class="project-text-container">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </div>
      <div class="project-buttons-container flex-container-row">
        <Button
          v-if="project.githubUrl"
          :button="githubButton"
          v-on:buttonClicked="handleOpenProjectGithub()"
        />
        <Button
          v-if="project.liveUrl"
          :button="liveButton"
          v-on:buttonClicked="handleOpenProjectLive()"
        />
        <Button
          v-if="project.productPage"
          :button="productWebsiteButton"
          v-on:buttonClicked="handleOpenProductWebsite()"
        />
      </div>
      <ul class="project-technologies-container flex-container-row">
        <TechnologyIcon
          v-bind:key="technology.id"
          v-for="technology in project.technologiesList"
          :technology="technology"
        />
      </ul>
      <a v-bind:href="project.liveUrl">
        <img
          :id="mockupId"
          :src="
            require(`@/assets/images/project_mockups/${project.mockupFileName}`)
          "
        />
      </a>
    </div>
  </div>
</template>

<script lang="js">
  import ColorVariables from '../assets/sass/_variables.scss'
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
        mockupId: "projectMockup" + this.project.id.toString(),
        githubButton:{
          iconClasses: "fab fa-github",
          contentColor: "white",
          contentSize: '1.1rem',
          padding: '0.8rem 1.2rem',
          buttonColor: ColorVariables.github,
          text: "View Code"
        },
        liveButton:{
          iconClasses: "fas fa-external-link-alt",
          contentColor: "white",
          contentSize: '1.1rem',
          padding: '0.8rem 1.2rem',
          buttonColor: ColorVariables.primary,
          text: "View Live"
        },
        productWebsiteButton:{
          iconClasses: "fas fa-external-link-alt",
          contentColor: "white",
          contentSize: '1.1rem',
          padding: '0.8rem 1.2rem',
          buttonColor: ColorVariables.primary,
          text: "View Product Page"
        }

      }
    },
    methods: {
      handleOpenProjectLive : function (){
        if(this.project.liveUrl === undefined){
          this.buttonHelper.emitEventBus("alert-modal-open-clicks", "This project is currently under development. To view the progress so far, click the corresponding Github button.");
        }
        else{
          this.buttonHelper.openExternalLink(this.project.liveUrl);
        }
      },
      handleOpenProjectGithub: function(){
        if(this.project.githubUrl === undefined){
          this.buttonHelper.emitEventBus("alert-modal-open-clicks", "This Github repository was made private. Please contact me if you need access.");
        }
        else{
          this.buttonHelper.openExternalLink(this.project.githubUrl);
        }
      },
      handleOpenProductWebsite: function(){
          this.buttonHelper.openExternalLink(this.project.productPage);
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
        document.getElementById(this.mockupId).classList.add("shadow-drop", "float-high");
        this.mockupFloating = true;
      },
      unfloatMockup: function(){
        document.getElementById(this.mockupId).ClassList.remove("shadow-drop");
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
.project-wrapper {
  display: block;
  margin: 0 auto;
  padding: 3rem 0;
  height: 25rem;
  @media #{$medium} {
    padding: 1.5rem 0;
    height: auto;
  }
}
.project-item {
  justify-content: center;

  h2 {
    margin-top: 0;
    font-weight: 500;
    padding: 0 1rem;
  }
  p {
    padding: 0 1rem;
    line-height: 1.5rem;
    @media #{$medium} {
      padding: 0;
      margin: 0;
    }
  }
  img {
    width: 100%;
    border-radius: 10px;
    grid-area: project-mockup;
  }
}
.project-text-container {
  display: inline-block;
  width: 100%;
  height: 100%;
  grid-area: text-container;
}
.project-buttons-container {
  grid-area: buttons-container;
  align-items: center;
}
.project-technologies-container {
  margin: 0;
  width: 100%;
  height: 100%;
  grid-area: technologies-container;
  @media #{$medium} {
    justify-content: center;
  }
}
.project-grid-container-right {
  display: grid;
  grid-template-columns: 20rem 30.7rem;
  grid-template-rows: auto auto;
  grid-template-areas:
    "text-container project-mockup"
    "buttons-container technologies-container";
  text-align: right;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  @media #{$medium} {
    grid-template-columns: 28rem;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "text-container"
      "buttons-container"
      "project-mockup"
      "technologies-container";
    text-align: center;
    row-gap: 1rem;
  }
  @media #{$small} {
    grid-template-columns: 98%;
  }
}
.project-grid-container-left {
  display: grid;
  grid-template-columns: 30.7rem 20rem;
  grid-template-rows: auto auto;
  grid-template-areas:
    "project-mockup text-container"
    "technologies-container buttons-container";
  text-align: left;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  @media #{$medium} {
    grid-template-columns: 28rem;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "text-container"
      "buttons-container"
      "project-mockup"
      "technologies-container";
    text-align: center;
    row-gap: 1rem;
  }
  @media #{$small} {
    grid-template-columns: 98%;
  }
}
</style>
