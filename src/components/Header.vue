<template lang="html">

  <header>
    <div class="banner">
      <div class="floating-box">
        <img src="../assets/images/profile.png">
        <h1>Cameron Downer</h1>
        <h2>Software Engineer</h2>
        <div id="header-buttons-container">
          <a href="https://github.com/CameronRDowner" target="_blank"><i class="fa-icon fab fa-github-square"></i></a>
          <a target="_blank"><i class="fa-icon fas fa-envelope-square"></i></a>
          <a href="www.linkedin.com/in/cameron-downer-392863173" target="_blank"><i class="fa-icon fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    </header>

</template>

<script lang="js">

  export default  {
    name: 'Header',
    props: [],
    mounted () {

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
   .banner{
    margin: 0 auto;
    width: 100%;
    height: 480px;
    background-color:gray;

  }
  header{
    .floating-box{
      font-size: 1rem;
      top: 140px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 22rem;
      img{
        max-width: 200px;
        width: 40%;
        border-radius: 50%;
      }
      h1{
        color: #212529;
        font-size: 2.6em;
        margin: 0.25em 0;
      }
      h2{
        font-size: 1.5em;
        margin: 0.25em 0;
      }
      
    }
    .fa-envelope-square{
      $email-yellow : #FFBF00;
      color: $email-yellow;
      &:hover{
        color: lighten($email-yellow, 20%);
      }

    }
    .fa-linkedin{
      $linkedin-blue: #0077b5;
      color: $linkedin-blue;
      &:hover{
        color: lighten($linkedin-blue, 20%);
      }
    }
    .fa-github-square{
      $github-black: #212529;
      color: $github-black;
      &:hover{
        color: lighten($github-black, 20%);
      }
    }
  }
  .floating-box{
    position: absolute;
    border-radius: 5px;
    box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.18);
    padding: 40px;
    background-color: white;
  }
  .fa-icon{
    font-size: 4em;
  }
  #header-buttons-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2em;
  }
</style>
