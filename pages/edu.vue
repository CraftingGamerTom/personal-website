<template>
  <div>
    <div v-if="$route.fullPath === '/edu'">
      <b-alert variant="warning" show>
        <span style="font-weight:800;">UNDER CONSTRUCTION</span> Thank you for your patience
      </b-alert>
      EDUCATION PAGE
      <p>
        <nuxt-link to="/edu/wsu">
          Worcester State University
        </nuxt-link>
      </p>
      <p>
        <nuxt-link to="/edu/qcc">
          Quinsigamond Community College
        </nuxt-link>
      </p>
    </div>
    <nuxt-child />
  </div>
</template>

<style scoped>
  body {
    color: black;
  }
</style>

<script>
export default {
  layout (context) {
    return context.isMobile ? 'edu/mobile' : 'edu/default'
    // return 'edu/default'
  },
  data () {
    return {
    }
  },
  // page component definitions
  head () {
    return {
      script: [
        {
          hid: 'jquery',
          src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js',
          type: 'text/javascript',
          callback: () => { this.isJqueryLoaded = true }
        }, {
          hid: 'textfit', src: '/common/js/libs/jquery/fittext.js', defer: true
        }
      ]
    }
  },
  meta: {
    breadcrumbItems: [
      {
        text: 'Education',
        active: true
      }
    ]
  }
}
</script>
