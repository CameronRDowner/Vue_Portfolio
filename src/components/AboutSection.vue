<template lang="html">

  <section id="about" v-observe-visibility="{callback: triggerAboutAnimations, once: false, intersection: {threshold: 0.1}}">
    <h1 id="about-title">About Me</h1>
    <div id="about-radio-buttons" class="hidden">
    <RadioButtonCluster :radioButtonCluster="radioButtonCluster" v-on:radioButtonToggled="handleRadioButtonClick($event)"/>
    </div>
    <div id="about-content-wrapper" class="responsive-margin responsive-padding hidden animation-delay-500ms">
      <div v-if="contentInView === 'Coding Journey'"  id="about-content-text" class="hidden animation-delay-1s">
        <p class="fade-in" v-for="paragraph in codingJourney.paragraphList"  v-bind:key="paragraph">{{paragraph}}</p>
      </div>
      <ul v-else-if="contentInView === 'Employment History'">
        <li v-for="job in employmentHistory" v-bind:key="job.id">
          <JobEntry :job="job"/>
        </li>
      </ul>
    </div>
   
  </section>

</template>

<script lang="js">
  import ColorVariables from "../assets/sass/_variables.scss";
  import RadioButtonCluster from './RadioButtonCluster.vue';
  import JobEntry from './JobEntry.vue';
  export default  {
    name: 'about-section',
    props: [],
    components: {
      RadioButtonCluster,
      JobEntry
    },
    created () {
      this.setInitialContent();
    },
    data () {
      return {
        radioButtonCluster: {
          buttonColor: ColorVariables.aboutControls,
          buttonContentColor: 'white', 
          name: 'about-content',
          radioButtonList: [
            {
              id: 0,
              text: "Coding Journey"
          },
          {
              id: 1,
              text: "Employment History",
          }
          ],
        },
        codingJourney: {
          paragraphList: ["I've been involved in IT support for many years. When I started my skills quickly progressed from just minor knowledge, to having the ability to work with, repair, and troubleshoot a wide variety of tech. Even though I developed this knack for IT support, it wasn't something I felt passionate about.", "Fast forward to a few years ago -after completing a couple of challenges in my first web development course, I immediately knew that this was the occupation for me. Not only was coding a gratifying analytical challenge, but also an outlet for my artsy-creative side that I never got to use in IT; needless to say, I was sold. And since then, my passion has only grown with each line of code written and new technology learned.", "One of my favorite things about front end work is being able to see the visual result of the code I write. I love bringing prototypes to life and making those key tweaks that really make the page stand out. Its not just the visual aspect that I relish, but also the problem solving process of taking back end data and figuring out how to organize it and present it in the most efficient way possible."],
        },
        employmentHistory: [
          {
            employer: 'GlobalSource IT',
            jobTitle: 'Front End Developer',
            jobType: 'Contract',
            start: new Date('September 26 2020'),
            end: new Date('February 26 2021'),
            location: 'Milwaukee, WI',
            employmentSummary: 'I was contracted out to work remotely as a Front End Developer for Coopervision on a short term contract basis.',
            duties: [
              'write code',
              'fix bugs'
            ]

          }
        ],
        contentInView: {
          paragraphList: ""
        },
      }
    },
    methods: {
      handleRadioButtonClick : function (buttonClicked){
        this.contentInView = buttonClicked;
      },

      changeContentInView : function (newContent){
        this.contentInView = newContent;
      },

      setInitialContent: function(){
        this.contentInView = "Coding Journey";
      },

      triggerAboutAnimations: function(aboutSectionVisible){
        if(aboutSectionVisible){
          document.getElementById('about-radio-buttons').classList.add('slide-in-right');
          document.getElementById('about-content-wrapper').classList.add('scale-in');
          document.getElementById('about-content-text').classList.add('fade-in');
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  @import '../assets/sass/_variables.scss';
  #about {
    background-color: $about-background;
    width: 100%;
    box-sizing: border-box;
    h1{
      color: white;
      text-align: center;
      margin: 0;
    }
    p{
      line-height: 2rem;
    }
  }
  #about-content-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: $about-foreground;
    box-shadow: 7px 11px 21px 0px rgba(0,0,0,0.45);
  }
  #about-content-text{
    color: $about-text;
    p{
      display: inline-block;
      text-align: left;
      font-weight: 600;
    }
  }
  #about-content-icons-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 3rem;
    i{
      display: inline-block;
      color: $about-background;
      font-size: 9rem;
    }
  }
</style>
