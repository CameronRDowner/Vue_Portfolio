<template lang="html">

  <div id="home-page">
      <Header/>
    <main>
      <div id="welcome">
        <p class="width-limit">
          In the about section you can learn a little more about me as well as my journey in coding. I'm always adding my latest projects to the projects section. The technologies section has all of the technologies I've worked with. And lastly, the Education section has the certifications I've completed as well as the diplomas I've earned.
        </p>
      </div>
      <AboutSection/>
      <ProjectsSection/>
      <TechnologiesSection/> 
      <EducationSection/>
    </main>
    <Footer/>
    <ContactModal/>
    <AlertModal/>
  </div>
    

</template>

<script lang="js">
  import Header from "../components/Header.vue"
  import AboutSection from "../components/AboutSection.vue"
  import ProjectsSection from "../components/ProjectsSection.vue"
  import TechnologiesSection from "../components/TechnologiesSection.vue"
  import EducationSection from "../components/EducationSection.vue"
  import Footer from "../components/Footer.vue"
  import ContactModal from "../components/ContactModal.vue"
  import AlertModal from "../components/AlertModal.vue"
  export default  {
    name: 'HomePage',
    components: {
      Header,
      AboutSection,
      ProjectsSection,
      TechnologiesSection,
      EducationSection,
      Footer,
      ContactModal,
      AlertModal
    },
    props: [],
    mounted () {

    },
    created (){
    },
    data () {
      return {
        
      }
    },
    methods: {
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import '../assets/sass/_variables.scss';
  #home-page {
    height: 100%;
    margin: 0;
    overflow: hidden;
    box-sizing: border-box;
    background-color: $background;
    border-radius: 1.3rem;
    width: 60rem;
    margin: 1rem auto;
    #welcome{
      height: 12rem;
      font-size: 1.34rem;
      font-weight: 200;
      color: $offBlack;
    }
  }
  #technologies-wrapper{
    width: 100%;
  }
</style>
