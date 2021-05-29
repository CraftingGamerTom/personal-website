<template>
  <div>
    <div v-if="$route.fullPath === '/projects'">
      <b-col cols="12">

        <h1 class="in-page-title">Projects</h1>

        <section id="all-projects">
          <b-row class="align-self-md-stretch">
            <b-col v-if="allProjects.fetchError" cols="12" style="text-align:center;" class="text--error">
              <h3>Error loading projects</h3>
              <p>{{ allProjects.fetchError }}</p>
            </b-col>
            <b-col v-else cols="12" md="6" lg="3" class="margin-bottom-md" v-for="project in allProjects.projects" :key="project.id">
              <b-container class="container--1 h-100"> 
                <QuickIcon :location="''" :name="'index/microservice_2324122'" viewBox="0 0 128 128" />
                <h2>{{ project.name }}</h2>
                <p>I believe a well planned API is the cornerstone of a good product.</p>
                <br/>
                <h6>My go-to frameworks</h6>
                <p>Spring, NodeJS</p>
                <h6>Technology</h6>
                <p>AWS (ECR, ECS, EC2, RDS, S3, KMS)</p>
                <p>Spring Boot, ExpressJS</p>
                <p>PostgreSQL, MongoDB, MySQL</p>
                <p>JUnit (Juniper), Should.js</p>
              </b-container>
            </b-col>
          </b-row>
        </section>

      </b-col>
    </div>
    <div v-else>
      <b-breadcrumb :items="breadcrumbItems" />
    </div>

    <nuxt-child />
  </div>
</template>

<style scoped>
  
</style>

<script>
export default {
  computed: {
    breadcrumbItems () { return this.$store.state.breadcrumbs.crumbs }
  },
  layout (context) {
    return context.isMobile ? 'mobile' : 'default'
  },
  data () {
    return {
      title: 'Projects | Thomas Rokicki',
      allProjects: {
        fetchError: null,
        projects: null
      }
    }
  },
  async mounted () {
    try {
      this.allProjects.projects = await this.$strapi.$projects.find({"_sort":"startDate:DESC"})
    } catch (error) {
      this.allProjects.fetchError = error
    }
  },
  // page component definitions
  head () {
    return {
      title: this.title,
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
<style lang="scss" scoped>

</style>