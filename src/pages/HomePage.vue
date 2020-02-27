<template lang="html">

  <div id="home-page">
      <Header/>
    <main>
      <div id="welcome">
        <h1>Welcome to my portfolio page!</h1>
        <h2>I love creating elegant and enjoyable user experiences.</h2>
      </div>
    <hr>
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
    main{
      padding-top: 6rem;
    }
    #welcome{
      height: 20rem;
    }
  }
  #technologies-wrapper{
    width: 100%;
  }
</style>
