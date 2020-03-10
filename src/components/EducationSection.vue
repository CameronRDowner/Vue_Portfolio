<template lang="html">

  <section id="education" v-observe-visibility="{callback: handleEducationVisibility, once: true, intersection: {threshold: 0.4}}">
    <h1>My Education</h1>
    <div id="education-containers-wrapper" class="flex-container-row">
      <div id="certifications-container" class="animation-duration-1s hidden">
        <h2>Certifications</h2>
        <ul class="flex-container-row">
          <CertificationItem v-bind:key="certification.id" v-for="certification in certificationsList" :certification="certification" ref="certificationItems" />
        </ul>
      </div>
      <div id="diplomas-container" class="animation-duration-1s hidden">
        <h2>Diplomas</h2>
        <ul>
          <DiplomaItem v-bind:key="diploma.id" v-for="diploma in diplomasList" :diploma="diploma" />
        </ul>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import CertificationItem from "./CertificationItem.vue"
  import DiplomaItem from "./DiplomaItem.vue"
  export default  {
    name: 'education-section',
    components: {
      DiplomaItem,
      CertificationItem
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        certificationsList: [
          {
            id: 1,
            name: "Javascript Algorithmns and Data Structures",
            vendorName: "FreeCodeCamp",
            logoName: "freecodecamp.jpeg",
            contentVisible: false
          },
          {
            id: 2,
            name: "Responsive Web Design",
            vendorName: "FreeCodeCamp",
            logoName: "freecodecamp.jpeg",
            contentVisible: false
          },
          {
            id: 3,
            name: "Oracle Database SQL Certified Associate",
            vendorName: "Oracle",
            logoName: "oracle.png",
            contentVisible: false
          },
          {
            id: 4,
            name: "Project+",
            vendorName: "Comptia",
            logoName: "project+.png",
            contentVisible: false
          },
          {
            id: 5,
            name: "A+",
            vendorName: "Comptia",
            logoName: "a+.png",
            contentVisible: false
          },
          {
            id: 6,
            name: "User Interface Designer",
            vendorName: "CIW",
            logoName: "ciw.jpg",
            contentVisible: false
          },
          {
            id: 7,
            name: "Advanced HTML 5 & CSS3 Specialist",
            vendorName: "CIW",
            logoName: "ciw.jpg",
            contentVisible: false
          },
          {
            id: 8,
            name: "Site Development Associate",
            vendorName: "CIW",
            logoName: "ciw.jpg",
            contentVisible: false
          },
        ],
        diplomasList: [
          {
            id: 1,
            name: "Bachelor of Science Software Development",
            accolade: "",
            graduationDate: "September 25, 2019",
            schoolLogoName: "wgu.png"
          },
          {
            id: 2,
            name: "Associate of Science",
            accolade: "with High Honors",
            graduationDate: "May 16, 2018",
            schoolLogoName: "ecc.png"
          }
        ]
      }
    },
    methods: {
      triggerDiplomaAnimations : function (){
        document.getElementById("diplomas-container").classList.add("fade-in");
      },
      triggerCertificationAnimations : function (){
       document.getElementById("certifications-container").classList.add("fade-in"); 
      },
      handleEducationVisibility : function (isVisible){
        if(isVisible == true){
          this.triggerCertificationAnimations();
          this.triggerDiplomaAnimations();
        }
        else{
          return
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  #education {
    padding-bottom: 5em;
  }
  #education-containers-wrapper{
    align-items: flex-start;
    h2{
      font-weight: 600;
    }
  }
  #certifications-container{
    max-width: 33rem;
    margin: 0.75rem;
  }
  #diplomas-container{
    max-width: 19rem;
    margin: 0.75rem;
  }
</style>
