<template>
  <div>
    <div v-if="$route.fullPath === '/edu/wsu'">
      <b-alert variant="warning" show>
        <span style="font-weight:800;">UNDER CONSTRUCTION</span> Thank you for your patience
      </b-alert>
      WSU PAGE
      <p>
        <nuxt-link to="/edu/wsu/cs/383-cloud">
          CS383 - Cloud, Parallel & Distributed Computing
        </nuxt-link>
      </p>
      <p>
        <nuxt-link to="/edu/wsu/cs/483-big-data-capstone">
          CS483 - Big Data Capstone
        </nuxt-link>
      </p>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  meta: {
    breadcrumbItems: [
      {
        text: 'Education',
        to: '/edu'
      }, {
        text: 'Worcester State University',
        active: true
      }
    ]
  }
}
</script>
