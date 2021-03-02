<template lang="html">

  <div class="job-entry-wrapper">
    <img :src="companyLogoPath" alt="business logo" width="50" height="50">
    <div>
      <div class="position-text">{{job.position}}</div>
      <div>{{job.employer}}<span v-if="job.type"> - {{job.type}}</span></div>
      <div class="light-text">{{employmentDates}}</div>
      <div class="light-text">{{job.location}}</div>
      <div v-if="job.employmentSummary">{{job.employmentSummary}}</div>
      <ul class="duties-list">
        <li v-for="duty in job.duties" v-bind:key="job.duties.indexOf(duty)">↳{{duty}}</li>
      </ul>
    </div>
  </div>

</template>

<script lang="js">
  import { format } from 'date-fns'
  export default  {
    name: 'JobEntry',
    props: ['job'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
      employmentDates: function () {
        return `${format(this.job.start, 'LLL yyyy')} - ${(this.job.end ? format(this.job.end, 'LLL yyyy') : 'Present')}`
      },
      companyLogoPath: function () {
        if( this.job.employerLogo ){
          return require(`@/assets/images/company_logos/${this.job.employerLogo}`)
        }
        else{
          return require('@/assets/images/company_logos/generic_company.jpg')
        }
      }

    }
}


</script>

<style scoped lang="scss">
@import '../assets/sass/_variables.scss';
  .job-entry-wrapper {
    background-color: $about-foreground;
    box-shadow: 7px 11px 21px 0px rgba(0,0,0,0.45);
    width: 100%;
    padding: 2em;
    color: $about-text;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5em;
    box-sizing: border-box;
  }

  .position-text{
    font-weight: 900;
  }

  .light-text{
    color: darken($about-text, 15%);
    font-size: 0.8rem;
  }

  .duties-list{
    margin-top: 0.5em;
    font-size: 0.9rem;
  }
</style>
