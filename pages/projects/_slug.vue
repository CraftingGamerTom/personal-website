<template>
    <div>
        <h1>This is on my <nuxt-link to="/changelog">roadmap</nuxt-link></h1>
        
        <p>{{this.$route.params.slug}}</p>
    </div>
</template>


<script>
export default {
  scrollToTop: true,
  meta: {
    breadcrumbItems: [
      {
        text: "Projects",
        to: "/projects"
      },
      {
        text: "PROJECT NAME HERE",
        active: true
      }
    ]
  }
};
</script>