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
            <b-col v-else cols="12" md="6" lg="3" class="margin-bottom-lg" v-for="project in allProjects.projects" :key="project.id">
              <img class="project-img" :src="project.technicalDesign | imageOrMissing"/>
              <p class="status-tag">{{project.status | jobStatus}}</p>
              <b-container class="container--1 h-75 project-body"> 
                <p class="project-job">{{ project.job.employer }}</p>
                <h2 class="project-name">{{ project.name }}</h2>
                <p>{{ project.shortDescription }}</p>
                <b-button class="project-btn" :to="'/projects/' + project.slug">View Project</b-button>
              </b-container>
            </b-col>
          </b-row>
        </section>

      </b-col>
    </div>
    <div v-else>
      <b-breadcrumb :items="breadcrumbItems" />
      <nuxt-child />
    </div>
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
  filters: {
    imageOrMissing: function (technicalDesign) {
      if(technicalDesign) {
        return 'https://content.thomasrokicki.com' + technicalDesign.url
      } else {
        // return '~/assets/icons/missing-file.jpg'
        return '/v2/resources/img/missing-file.jpg'
      }
    },
    jobStatus: function (statusEnum) {
      switch(statusEnum) {
        case 'future': 
          return "In Planning"
        case 'inProgress': 
          return "In Progress"
        case 'complete': 
          return "Complete"
        case 'abandoned': 
          return "Abandoned"
        case 'movedOn': 
          return "Handed Off"
        case 'maintenance': 
          return "Maintaining"
        default:
          return "Unknown"
      }
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
.project-img {
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 250px;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 50%);
  z-index: 0;
  margin-bottom: -1px; // make sure its touching body
}
.project-body {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  position: relative;
}
.status-tag {
  border-style: solid;
  border-radius: 5px;
  width: fit-content;
  padding: 0 5px;
  display: inline-block;

  position: absolute;
  top: 10px;
  right: 25px;

  text-align: center;
  font-size: .75rem;
  font-weight: 700;
}
.project-job {
  padding-top: 25px;
  margin-bottom: 0;
  font-weight: 700;
}
.project-name {
  padding-top: 0;
}
.project-btn {
  width: 80%;
  bottom: 25px;
  position: absolute;
  left: 10%;
}


// theme colors
html[theme="light"] {
  & .status-tag {
    @include theme-transition();
    background: color("light", primary);
    color: color("light", text-accent);
  }
  & .project-job {
    @include theme-transition();
    color: color("light", tertiary);
  }
}
html[theme="dark"] {
  & .status-tag {
    @include theme-transition();
    background: color("dark", primary);
    color: color("dark", text-accent);
  }
  & .project-job {
    @include theme-transition();
    color: color("dark", tertiary);
  }
}
</style>