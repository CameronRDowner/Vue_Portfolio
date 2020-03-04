<template lang="html">

  <section id="about" v-observe-visibility="{callback: triggerAboutAnimations, once: false, intersection: {threshold: 0.1}}">
    <h1 id="about-title">About Me</h1>
    <div id="about-radio-buttons" class="hidden">
    <RadioButtonCluster :radioButtonCluster="radioButtonCluster" v-on:radioButtonToggled="handleRadioButtonClick($event)"/>
    </div>
    <div id="about-content-wrapper" class="responsive-margin responsive-padding hidden animation-delay-500ms">
      <div id="about-content-text" class="hidden animation-delay-1s">
        <p class="fade-in" v-for="paragraph in contentInView.paragraphList"  v-bind:key="paragraph">{{paragraph}}</p>
      </div>
    </div>
   
  </section>

</template>

<script lang="js">
  import ColorVariables from "../assets/sass/_variables.scss";
  import RadioButtonCluster from './RadioButtonCluster.vue';
  export default  {
    name: 'about-section',
    props: [],
    components: {
      RadioButtonCluster
    },
    created () {
      this.setInitialContent();
    },
    data () {
      return {
        radioButtonCluster: {
          buttonColor: ColorVariables.aboutContent,
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
          paragraphList: ["I've been involved in IT support for many years. When I started my skills quickly progressed from just minor knowledge, to having the ability to work with, repair, and troubleshoot a wide variety of tech. Even though I developed this knack for IT support, it wasn't something I felt passionate about.", "Fast forward to a few years ago -after completing a couple of challenges in my first web development course, I immediately knew that this was the occupation for me. Not only was coding a gratifying analytical challenge, but also an outlet for my artsy-creative side that I never got to use in IT; needless to say, I was sold. And since then, my passion has only grown with each line of code written and new technology learned.", "One of my favorite things about front end work is being able to see the visual result of the code I write. I love bringing prototypes to life and making those key tweaks that really make the page stand out. Its not just the visual aspect that I relish, but also the problem solving process of taking back end data and figuring out how to organize it and present it in the most efficient way possible.", "My specialties are: fast adoption of new technologies, UI design principles, performance optimization, clean coding, responsive web design, and problem solving. Thus far on the front end, I’ve learned HTML, CSS, Javascript ES6, jQuery, Bootstrap, Angular, and VueJS. Lately, I’ve started learning a little React and prototyping in Adobe XD. I’m always on the lookout for new technologies to leverage in my projects and add to my repertoire."],
        },
        employmentHistory: {
          paragraphList: ["In September of 2012, I took over my brothers IT side business when he went out of state to college. At the time, I knew only the basics of troubleshooting computers. Over the years I've gained experience with data recovery, operating system troubleshooting, network troubleshooting, device repairs, computer repairs, and much more. I also learned valuable skills in managing ongoing projects and communicating with my clients.", "I started working at Showalter Roofing in August of 2015. I was doing light data input, some invoicing, and running materials to job sites. Over my time there, I took on all sorts of projects and duties outside of what I was originally hired for. Anything from helping accounting with paperwork to fabricating metal roof accessories in the architectural sheet metal department. After helping them out with some computer and printer problems, they promoted me to taking on an IT support role which I held for the remainder of my time there. I was let go in December of 2018 when my part time position was absorbed into a full time role they had hired for.", "It was then, I decided to go all in on my bachelors program at WGU to finish quicker and expedite my time to working in the web development space. I worked tirelessly -early mornings, late nights, and weekends to finish early. All of the hard work paid off after 10 months time, when I graduated with my bachelors in Software Development late September 2019.", "Not long after graduation, I was approached by a manager I had worked with at Showalter who was re-branding his roofing business and wanted to know if I could help him out. I promptly accepted and designed the company logo, built the website, set up company emails, created the social media pages, and created the business directory pages. "],
        },
        contentInView: {
          paragraphList: ""
        },
      }
    },
    methods: {
      handleRadioButtonClick : function (buttonClicked){
        if(buttonClicked === "Coding Journey"){
          this.contentInView = this.codingJourney;
        }
        else if(buttonClicked === "Employment History"){
          this.contentInView = this.employmentHistory;
        }
      },
      changeContentInView : function (newContent){
        this.contentInView = newContent;
      },
      setInitialContent: function(){
        this.contentInView = this.codingJourney;
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
    color: $about-content;
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
