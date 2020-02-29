<template lang="html">

  <section id="about">
    <h1>About Me</h1>
    <RadioButtonCluster :radioButtonCluster="radioButtonCluster" v-on:radioButtonToggled="handleRadioButtonClick($event)"/>
    <div id="about-content-wrapper">
      <div id="about-content-text">
        <p v-for="paragraph in contentInView.paragraphList"  v-bind:key="paragraph">{{paragraph}}</p>
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
          paragraphList: ["I've been involved in IT support for many years. When I started my skills quickly progressed from just minor knowledge, to having the ability to work with, repair, and troubleshoot a wide variety of tech. Even though I developed this knack for IT support, I didn't feel like it was an occupation that utilized all of what I enjoy and excel at.","Fast forward to a few years ago -after completing a couple of challenges in my first web development course, I realized that this was the occupation for me. It covered all the things I'm into: problem solving, creating   needless to say, I was sold. And since then, my passion has only grown with each line of code and new technology learned.", "Something I’ve always appreciated about front end work, is being able to see the visual representation of my code and being able to go back and make it better and better with each iteration. I love bringing prototypes to life and making those key tweaks that really make the page stand out. I also enjoy the problem solving process of taking back end data and figuring out how to organize it and present it in the most efficient way possible.", "As far as specialties go, I’m a quick learner when it comes to new technologies, excellent at problem solving, great at optimizing pages for performance, and have the know-how to apply responsive web design principles to web pages. Thus far on the front end, I’ve learned HTML, CSS, Javascript ES6, jQuery, Bootstrap, Angular, and VueJS. Lately, I’ve started learning a little React and prototyping in Adobe XD. I’m always looking for new technologies to take advantage of for my projects."],
        },
        employmentHistory: {
          paragraphList: ["In September of 2012, I took over my brothers IT side business when he went out of state to college. At the time, I knew only the basics of troubleshooting computers. Over the years I've gained experience with data recovery, operating system troubleshooting, network troubleshooting, device repairs, computer repairs, and much more. I also learned valuable skills in managing ongoing projects and excellent skills in communicating with my clients.", "I started working at Showalter Roofing in August of 2015. I was doing light data input, some invoicing, and running materials to job sites. Over my time there, I took on all sorts of projects and duties outside of what I was originally hired for. Anything from helping accounting with paperwork to fabricating metal roof accessories in the architectural sheet metal department. Whenever they had a project they needed done, they knew they could count on me to get it done. After finding out about my affinity for IT, they promoted me to taking on an IT support role which I held for the remainder of my time there. I was let go in December of 2018 when my part time position was absorbed into a full time role they had hired for.", "It was then, I had decided to go all in on my bachelors program at WGU to get it done quicker and expedite my aspirations to entering into the software development space. I worked tirelessly early mornings, late nights, and weekends to finish early. All of the hard work paid off after 10 months time, when I graduated with my bachelors in Software Development on September 2019.", "Not long after graduation, I was approached by a manager I had worked with at Showalter who was re-branding his roofing business and wanted to know if I could help him out. I promptly accepted and designed the company logo, built the website, set up company emails, created the social media pages, and created the business directory pages."],
        },
        contentInView: {
          text: "",
          iconClasses : [{id:0, iconClasses: ""},{id:1, iconClasses: ""}]
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
    padding: 4.5rem;
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
    padding: 4rem;
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
