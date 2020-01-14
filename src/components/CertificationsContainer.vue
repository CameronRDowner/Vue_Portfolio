<template lang="html">
  <div id="certifications-wrapper">
    <h2>Certifications</h2>
  <ul id="certifications-container">
    <CertificationItem v-bind:key="certification.id" v-for="certification in certificationsList" :certification="certification"/>
  </ul>
  </div>
</template>

<script lang="js">
  import CertificationItem from "./CertificationItem.vue"
  export default  {
    name: 'certifications-container',
    components: {
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
            logoName: "freecodecamp.jpeg"
          },
          {
            id: 2,
            name: "Responsive Web Design",
            vendorName: "FreeCodeCamp",
            logoName: "freecodecamp.jpeg"
          },
          {
            id: 3,
            name: "Oracle Database SQL Certified Associate",
            vendorName: "Oracle",
            logoName: "oracle.png"
          },
          {
            id: 4,
            name: "Project+",
            vendorName: "Comptia",
            logoName: "project+.png"
          },
          {
            id: 5,
            name: "A+",
            vendorName: "Comptia",
            logoName: "a+.png"
          },
          {
            id: 6,
            name: "User Interface Designer",
            vendorName: "CIW",
            logoName: "ciw.jpg"
          },
          {
            id: 7,
            name: "Advanced HTML 5 & CSS3 Specialist",
            vendorName: "CIW",
            logoName: "ciw.jpg"
          },
          {
            id: 8,
            name: "Site Development Associate",
            vendorName: "CIW",
            logoName: "ciw.jpg"
          },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
 #certifications-wrapper{
    width: 32em;
    h2{
      font-weight: 500;
    }
 }
  #certifications-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
</style>
