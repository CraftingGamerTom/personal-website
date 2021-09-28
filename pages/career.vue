<template>
  <div>
    <resume-builder />
  </div>
</template>

<script>
import ResumeBuilder from '~/components/utils/modals/ResumeBuilder.vue'
export default {
  components: { ResumeBuilder },
  data () {
    return {
      title: 'Career | Thomas Rokicki'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss">
@media print {
  html {
    background-image: none;

    & .container {
      background-color: #ffffff!important;
      color: #000000!important;
    }

    & #index-career-intro, & .navbar, & #layout-footer, & #layout-socials-nav {
      display:none;
    }
    & #index-career-resume {
      display:block;
      margin: 0;

      & .row {
        display: block;
        width: 100%;
      }

      & .offset-md-3 {
        margin-left: 0;
      }

      & .container--1.resume-content.container {
        display: block;
        width: 100%;
        margin:0;
      }

      & .resume-skill-icon {
        height: 3vh!important;
        width: 3vh!important;
      }

      & .btn {
        display: none;
      }
    }
  }
}
</style>
