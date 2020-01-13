<template lang="html">

  <ul id="certifications-container">
    <CertificationItem v-bind:key="certification.id" v-for="certification in certificationsList" :certification="certification"/>
  </ul>

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
            logoPath: "../assets/images/certification_logos/freecodecamp.jpeg"
          },
          {
            id: 2,
            name: "Responsive Web Design",
            vendorName: "FreeCodeCamp",
            logoPath: "../assets/images/certification_logos/freecodecamp.jpeg"
          },
          {
            id: 3,
            name: "Oracle Database SQL Certified Associate",
            vendorName: "Oracle",
            logoPath: "../assets/images/certification_logos/oracle.png"
          },
          {
            id: 4,
            name: "Project+",
            vendorName: "Comptia",
            logoPath: "../assets/images/certification_logos/project+.png"
          },
          {
            id: 5,
            name: "A+",
            vendorName: "Comptia",
            logoPath: "../assets/images/certification_logos/a+.png"
          },
          {
            id: 6,
            name: "User Interface Design",
            vendorName: "CIW",
            logoPath: "../assets/images/certification_logos/ciw.jpg"
          },
          {
            id: 7,
            name: "Advanced HTML 5 & CSS3 Specialist",
            vendorName: "CIW",
            logoPath: "../assets/images/certification_logos/ciw.jpg"
          },
          {
            id: 8,
            name: "Site Development Associate",
            vendorName: "CIW",
            logoPath: "../assets/images/certification_logos/ciw.jpg"
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
  #certifications-container {

  }
</style>
