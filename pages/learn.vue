<template>
    <div>
        <h1>This is on my <nuxt-link to="/changelog">roadmap</nuxt-link></h1>
        
    </div>
</template>


<script>
export default {
  scrollToTop: true,
  meta: {
    breadcrumbItems: [
      {
        text: "Learn",
        active: true
      }
    ]
  }
};
</script>