<template lang="html">
  <section
    id="about"
    v-observe-visibility="{
      callback: triggerAboutAnimations,
      once: false,
      intersection: { threshold: 0.1 },
    }"
  >
    <h1 id="about-title">About Me</h1>
    <div id="about-radio-buttons" class="hidden">
      <RadioButtonCluster
        :radioButtonCluster="radioButtonCluster"
        v-on:radioButtonToggled="handleRadioButtonClick($event)"
      />
    </div>
    <div id="about-content-wrapper" class="hidden">
      <div v-if="contentInView === 'Coding Journey'" id="about-summary-wrapper">
        <div
          class="about-content-text responsive-padding responsive-margin hidden scale-in"
        >
          <p
            v-for="paragraph in codingJourney.paragraphList"
            v-bind:key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
      <div
        v-else-if="contentInView === 'Employment History'"
        id="about-jobs-wrapper"
      >
        <ul class="about-jobs-list responsive-margin scale-in-vert">
          <li
            v-for="job in employmentHistory"
            v-bind:key="job.id"
            class="about-job-item"
          >
            <JobEntry :job="job" />
          </li>
        </ul>
      </div>
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
            employerLogo: 'applied_visions.jpg',
            employer: 'Applied Visions Inc.',
            position: 'Remote Front End Developer',
            type: 'Full Time',
            start: new Date('July 2021'),
            location: 'Northport, NY',
            duties: [
              'Developed features for large scale production app built in React and TypeScript',
              'Created and utilized many Apollo GraphQL queries and mutations',
              'Improved UI performance by leveraging React Virtualized, query caching, and Styled Components',
              'Assisted with Agile Backlog Grooming in providing effort estimates and technical expertise',
            ]
          },
          {
            employerLogo: 'globalsource_it.png',
            employer: 'GlobalSource IT',
            position: 'Remote Front End Developer',
            type: 'Contract',
            start: new Date('September 2020'),
            end: new Date('February 2021'),
            location: 'Milwaukee, WI',
            duties: [
              'Worked on CooperVisions GPS II planning software project',
              'Diagnosed and fixed a range of different UI bugs',
              'Took part in Agile Software Methodology practices',
              'Planned and built out features, self-directed and with team',
              'Worked closely with stakeholders to collect business requirements'
            ]
          },
          {
            employer: 'Self',
            position: 'Front End Developer',
            type: 'Freelance',
            start: new Date('November 2019'),
            end: new Date('September 2020'),
            location: 'Elburn, IL',
            duties: [
              'Worked on CooperVisions GPS II planning software project',
              'Diagnosed and fixed a range of different UI bugs',
              'Took part in Agile Software Methodology practices',
              'Planned and built out features, self-directed and with team',
              'Worked closely with stakeholders to collect business requirements'
            ]
          },
          {
            employer: 'CD Computer Solutions',
            position: 'IT Technician',
            type: 'Part Time',
            start: new Date('September 2012'),
            location: 'Elburn, IL',
            duties: [
              'Resolved a variety of software and hardware defects on tablets, phones, computers, and network devices.',
              'Trained clients how to use both hardware and software.',
              'Handled multiple concurrent projects.'
            ]
          },
          {
            employerLogo: 'showalter_roofing.jpg',
            employer: 'Showalter Roofing',
            position: 'Support Specialist / IT Technician',
            type: 'Part Time',
            start: new Date('August 2015'),
            end: new Date('December 2018'),
            location: 'Naperville, IL',
            duties: [
              'Handled maintenance and repairs of all IT infrastructure',
              'Coded a specialized calculator for data analysis duties',
              'Supported different departments with ongoing projects',
              'Assisted with several insurance audits'
            ]
          },
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

        }
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
@import "../assets/sass/_variables.scss";
#about {
  background-color: $about-background;
  width: 100%;
  box-sizing: border-box;
  h1 {
    color: white;
    text-align: center;
    margin: 0;
  }
  p {
    line-height: 2rem;
  }
}
#about-content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.about-content-text {
  background-color: $about-foreground;
  box-shadow: 7px 11px 21px 0px rgba(0, 0, 0, 0.45);
  color: $about-text;
  p {
    display: inline-block;
    text-align: left;
    font-weight: 600;
  }
}
#about-content-icons-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 3rem;
  i {
    display: inline-block;
    color: $about-background;
    font-size: 9rem;
  }
}

.about-jobs-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}

.about-job-item {
  width: 100%;
}

#about-summary-wrapper {
}
</style>
