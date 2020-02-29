<template lang="html">

  <section id="about">
    <h1>About Me</h1>
    <RadioButtonCluster :radioButtonCluster="radioButtonCluster" v-on:radioButtonToggled="handleRadioButtonClick($event)"/>
    <div id="about-content-wrapper">
      <div id="about-content-text">
        <p>{{contentInView}}</p>
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
    mounted () {

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
        codingJourney: "I've been involved in IT support for many years. When I started my skill set quickly progressed from minor knowledge, to having the knowhow to work with and troubleshoot a wide variety of devices. Even though I developed this knack for IT support, I didn't feel like it was the perfect fit that I was looking for. Fast forward to a few years ago -after completing a couple of challenges in my first web development course, it dawns on me that this is exactly what I’ve been looking for: a powerful tool to build just about anything, as well as a way to express my creative side; I was sold. And since then, my passion has only grown with each line of code and new technology learned.",
        employmentHistory: "In September of 2012, I took over my brothers IT side business when he went out of state to college. At the time, I knew only the basics of troubleshooting computers. Over the years I've gained experience with data recovery, operating system troubleshooting, network troubleshooting, device repairs, computer repairs, and much more. I also learned valuable skills in managing ongoing projects and excellent skills in communicating with my clients. I started working at Showalter Roofing in August of 2015. I was doing light data input, some invoicing, and running materials to job sites. Over my time there, I took on all sorts of projects and duties outside of what I was originally hired for. Anything from helping accounting with paperwork to fabricating metal roof accessories in the architectural sheet metal department. Whenever they had a project they needed done, they knew they could count on me to get it done. After finding out about my affinity for IT, they promoted me to taking on an IT support role which I held for the remainder of my time there. I was let go in December of 2018 when my part time position was absorbed into a full time role they had hired for. It was then, I had decided to go all in on my bachelors program at WGU to get it done quicker and expedite my aspirations to entering into the software development space. I worked tirelessly early mornings, late nights, and weekends to finish early. All of the hard work paid off after 10 months time, when I graduated with my bachelors in Software Development on September 2019. Not long after graduation, I was approached by a manager I had worked with at Showalter who was re-branding his roofing business and wanted to know if I could help him out. I promptly accepted and designed the company logo, built the website, set up company emails, created the social media pages, and created the business directory pages.",
        contentInView: "I've been involved in IT support for many years. When I started my skill set quickly progressed from minor knowledge, to having the knowhow to work with and troubleshoot a wide variety of devices. Even though I developed this knack for IT support, I didn't feel like it was the perfect fit that I was looking for. Fast forward to a few years ago -after completing a couple of challenges in my first web development course, it dawns on me that this is exactly what I’ve been looking for: a powerful tool to build just about anything, as well as a way to express my creative side; I was sold. And since then, my passion has only grown with each line of code and new technology learned.",
      }
    },
    methods: {
      handleRadioButtonClick : function (buttonClicked){
        // eslint-disable-next-line no-console
        console.log('function ran');
        
        if(buttonClicked === "Coding Journey"){
          this.contentInView = this.codingJourney;
        }
        else if(buttonClicked === "Employment History"){
          this.contentInView = this.employmentHistory;
        }
      },
      changeContentInView : function (newContent){
        this.contentInView = newContent;
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
    padding: 1.2rem;
    box-sizing: border-box;
    h1{
      color: white;
      text-align: center;
    }
    p{
      line-height: 2rem;
    }
  }
  #about-content-wrapper{
    background-color: $about-foreground;
    padding: 5rem;
  }
  #about-content-text{
    color: $about-content;
  }
</style>
