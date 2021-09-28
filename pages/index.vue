<template>
  <div>
    <b-col cols="12">
      <section id="about-me">
        <b-row>
          <b-col cols="12">
            <b-container class="container--1">
              <b-row>
                <b-col offset-md="3" cols="12" md="6">
                  <div class="circle">
                    <img src="~assets/icons/index/me2-light.png">
                  </div>
                  <b-container id="index-intro" class="cover-circle container--2">
                    <h1 style="padding-top:15px;">
                      I build solutions
                    </h1>
                    <h6>Full Stack Software Engineer</h6>
                    <hr>
                    <p style="padding-top:15px;padding-bottom:15px;">
                      Hey, I'm Tom. I'm a life-long learner, master of none, and love changing the world.
                    </p>
                  <!-- <h6 style="padding-top:15px;padding-bottom:15px;">I'm an open book and willing to be held accountable. Check out my personal constitution</h6> -->
                  </b-container>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </section>

      <section id="projects">
        <b-row>
          <b-col cols="12">
            <b-container id="index-recent-projects" class="container--1">
              <h1 style="padding-top:25px;">
                Recent Projects
              </h1>
              <h5 style="padding-top:15px;padding-bottom:40px;">
                I love what I do, so I do what I love.
              </h5>

              <div v-if="recentProjects.fetchError" class="text--error">
                <h3>Error loading recent projects</h3>
                <p>{{ recentProjects.fetchError }}</p>
              </div>
              <b-row v-else>
                <b-col v-for="project in recentProjects.projects" :key="project.id" cols="12" md="6" lg="3">
                  <img class="recent-project-img" :src="project.headerImage | imageOrMissing">
                  <b-container class="container--2 recent-project-body">
                    <h3 style="padding-top: 25px;">
                      {{ project.name }}
                    </h3>
                    <p>{{ project.shortDescription }}</p>
                    <b-button class="recent-project-btn" :to="'/projects/' + project.slug">
                      View Project
                    </b-button>
                  </b-container>
                </b-col>
              </b-row>

              <b-button style="margin-bottom:15px;" :to="'/projects'">
                View All
              </b-button>
            </b-container>
          </b-col>
        </b-row>
      </section>

      <h1 id="index-skills-title" class="in-page-title">
        Skills
      </h1>

      <section id="skills">
        <b-row class="align-self-md-stretch">
          <b-col cols="12" md="6" lg="3" class="margin-bottom-md">
            <b-container class="container--1 h-100">
              <QuickIcon :location="''" :name="'index/microservice_2324122'" viewBox="0 0 128 128" />
              <h2>Microservices</h2>
              <p>I believe a well planned API is the cornerstone of a good product.</p>
              <br>
              <h6>My go-to frameworks</h6>
              <p>Spring, NodeJS</p>
              <h6>Technology</h6>
              <p>AWS (ECR, ECS, EC2, RDS, S3, KMS)</p>
              <p>Spring Boot, ExpressJS</p>
              <p>PostgreSQL, MongoDB, MySQL</p>
              <p>JUnit (Juniper), Should.js</p>
            </b-container>
          </b-col>
          <b-col cols="12" md="6" lg="3" class="margin-bottom-md">
            <b-container class="container--1 h-100">
              <QuickIcon :location="''" :name="'index/ui-ux_2234590'" viewBox="0 0 64 64" />
              <h2>UI / UX</h2>
              <p>I value simple problem-solving content.<br>I also love dark modes.</p>
              <br>
              <h6>I enjoy designing</h6>
              <p>Websites, Mobile Apps, Components</p>
              <h6>Design Tools</h6>
              <p>Sketch</p>
              <p>Abstract, Plant, Zeplin</p>
              <p>Adobe Illustrator</p>
              <p>Figma</p>
            </b-container>
          </b-col>
          <b-col cols="12" md="6" lg="3" class="margin-bottom-md">
            <b-container class="container--1 h-100">
              <QuickIcon :location="''" :name="'index/web-design_750444'" viewBox="0 0 50 50" />
              <h2>Front-End</h2>
              <p>A solid product looks and feels complete to the user.</p>
              <br>
              <h6>Frameworks of choice</h6>
              <p>Vue, Nuxt, Wordpress, Android</p>
              <h6>Languages</h6>
              <p>Bootstrap, Vuetify</p>
              <p>JS, HTML, CSS, SASS, PHP</p>
              <p>Java, Kotlin, Android Studio</p>
              <p>Segment, Mixpanel, AWS QuickSight (Analytics)</p>
            </b-container>
          </b-col>
          <b-col cols="12" md="6" lg="3" class="margin-bottom-md">
            <b-container class="container--1 h-100">
              <QuickIcon :location="''" :name="'index/automation_1455005'" viewBox="0 0 64 64" />
              <h2>Automation</h2>
              <p>Test Driven Development streamlines productivity and reduces rework cycles.</p>
              <br>
              <h6>My specialty</h6>
              <p>Selenium, Appium, AWS Device Farm</p>
              <h6>Familiar Optimizations</h6>
              <p>Daily App Screenshot Comparisons (UI Integrity)</p>
              <p>Unit Test Coverage and Result Auditing</p>
              <p>Functional Automated Testing (Regression, Smoke, Sanity)</p>
            </b-container>
          </b-col>
        </b-row>
      </section>

      <section id="lets-build">
        <b-row>
          <b-col cols="12">
            <b-container class="container--1">
              <h1 id="lets-build-text">
                Let's Build <timeline-text class="animated-text" />!
              </h1>
              <p style="margin-top:20px;margin-bottom:35px;">
                Interested in building something together? <br> Let's make it happen.
              </p>
              <b-button style="margin-bottom:15px;" :to="'/contact'">
                Chat with me
              </b-button>
            </b-container>
          </b-col>
        </b-row>
      </section>
    </b-col>
  </div>
</template>

<script>
import { QuickIcon } from '@craftinggamertom/webslack-bits'
import TimelineText from '~/components/utils/animations/TimelineText.vue'
import ENV from '@/env'

export default {

  components: {
    QuickIcon,
    TimelineText
  },
  filters: {
    imageOrMissing (headerImage) {
      if (headerImage) {
        return ENV.strapi.domain + headerImage.url
      } else {
        // return '~/assets/icons/missing-file.jpg'
        return '/v2/resources/img/missing-file.jpg'
      }
    }
  },
  data () {
    return {
      title: 'Home | Thomas Rokicki',
      recentProjects: {
        fetchError: null,
        projects: null
      }
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // { hid: 'viewport', name: 'viewport', content: 'width:device-width, initial-scale:1, shrink-to-fit:no' },
      ]
    }
  },
  async mounted () {
    try {
      this.recentProjects.projects = await this.$strapi.$projects.find({ _sort: 'startDate:DESC', _limit: '4' })
    } catch (error) {
      this.recentProjects.fetchError = error
    }
  }
}
</script>

<style lang="scss" scoped>
// SCOPED, THIS PAGE ONLY
#about-me {
  padding-top: 25px;
}
.cover-circle {
  z-index: 300;
  position: relative;
}

.circle {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.50); // TODO decide if non theme is okay

  // width: 209px; // for testing
  // height: 195px; // for testing
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 280px;

  overflow: hidden;
  padding-top: 40px;
  margin-top: 50px;
  margin-bottom: -15px;
  z-index: 200;
  text-align: center;

  & img {
    // width: 151px; // for testing
    // height: 208px; // for testing
    width: auto;
    height: auto;
    max-width: 300px;
    max-height: 300px;

    position: relative;
    z-index: 301;
  }
}

#lets-build {

  & h1#lets-build-text {
    font-kerning: 0.5em;
    font-style: italic;
    font-weight: font-weight(light);
    font-family: font(primary);
    padding-top: 15px;
  }

  & .animated-text {
    margin-top: 25px;
    margin-bottom: 25px;

    font-size: 0.8em;
    position: relative;
    top: 6px;
    width: 20vw;
    min-width: 275px;
    text-align: center;
    border-bottom: 5px solid black;
    border-radius: 2px;
    line-height: .5em;
  }

}

#projects {
  & .recent-project-img {
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    height: 175px;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 50%);
    z-index: 0;
    margin-bottom: -1px; // make sure its touching body
  }
  & .recent-project-btn {
    width: 80%;
    bottom: 25px;
    position: absolute;
    left: 10%;
  }
  & .recent-project-body {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    position: relative;
    height: 300px;
  }
  @include media-query(medium) {
    & .recent-project-body {
    height: 325px;
    }
  }
  @include media-query(large) {
    & .recent-project-body {
      height: 400px;
    }
  }
}

// theme colors
html[theme="light"] {
  & #index-skills-title {
    @include theme-transition();
    color: color("light", tertiary);
  }
  & .circle {
    @include theme-transition();
    background-color: color("light", layout-30);
    color: color("light", text);
  }
  & #skills svg {
    @include theme-transition();
    color: color("light", tertiary);
    fill: color("light", tertiary);
  }
  & #lets-build .animated-text {
    @include theme-transition();
    border-bottom-color: color("light", text);
  }
}
html[theme="dark"] {
  & #index-skills-title {
    @include theme-transition();
    color: color("dark", tertiary);
  }
  & .circle {
    @include theme-transition();
    background-color: color("dark", layout-30);
    color: color("dark", text);
  }
  & #skills h6, & #skills svg {
    @include theme-transition();
    color: color("dark", tertiary);
    fill: color("dark", tertiary);
  }
  & #lets-build .animated-text {
    @include theme-transition();
    border-bottom-color: color("dark", text);
  }
}
</style>
