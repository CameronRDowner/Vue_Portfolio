<template lang="html">

  <div id="home-page">
      <Header/>
    <main>
      <ProjectsSection/>
      <TechnologiesSection/> 
      <EducationSection/>
    </main>
    <Footer/>
    <ContactModal/>
  </div>
    

</template>

<script lang="js">
  import Header from "../components/Header.vue"
  import ProjectsSection from "../components/ProjectsSection.vue"
  import TechnologiesSection from "../components/TechnologiesSection.vue"
  import EducationSection from "../components/EducationSection.vue"
  import Footer from "../components/Footer.vue"
  import ContactModal from "../components/ContactModal.vue"
  export default  {
    name: 'HomePage',
    components: {
      Header,
      ProjectsSection,
      TechnologiesSection,
      EducationSection,
      Footer,
      ContactModal
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {
      openModal(){
        this.$refs.modal.open();
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  #home-page {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }
  #technologies-wrapper{
    width: 100%;
  }
</style>
