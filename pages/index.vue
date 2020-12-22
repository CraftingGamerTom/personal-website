<template>
<div>
  <b-col cols="12">
    <section id="about-me">
      <b-row>
        <b-col cols="12">
          <b-container class="bigger-ctnr-margin">
            <b-row>
              <b-col offset-md="3" cols="12" md="6">
                <div class="circle">
                  <img src="~assets/icons/index/me@2x.png" />
                </div>
                <b-container id="index-intro" class="cover-circle ctnr-40">
                  <h1 style="padding-top:15px;">I build solutions</h1>
                  <p><strong>Full Stack Software Engineer</strong></p>
                  <hr/>
                  <h6 style="padding-top:15px;padding-bottom:15px;">Hey, I'm Tom. I'm a life-long learner, master of none, and love changing the world.</h6>
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
          <b-container id="index-recent-projects" class="bigger-ctnr-margin"> 
            <h1 style="padding-top:25px;">Recent Projects</h1>
            <h5 style="padding-top:15px;padding-bottom:40px;">I love what I do, so I do what I love.</h5>

            <b-row>
              <b-col cols="3">
                <b-container class="ctnr-40"> 
                  <h1>hi</h1>
                </b-container>
              </b-col>
              <b-col cols="3">
                <b-container class="ctnr-40"> 
                  <h1>hi</h1>
                </b-container>
              </b-col>
              <b-col cols="3">
                <b-container class="ctnr-40"> 
                  <h1>hi</h1>
                </b-container>
              </b-col>
              <b-col cols="3">
                <b-container class="ctnr-40"> 
                  <h1>hi</h1>
                </b-container>
              </b-col>
            </b-row>

            <b-button style="margin-bottom:15px;" :to="'/projects'">View All</b-button>

          </b-container>
        </b-col>
      </b-row>
    </section>

    <h1 id="index-skills-title">Skills</h1>

    <section id="skills">
      <b-row class="align-self-md-stretch">
        <b-col cols="12" md="3">
          <b-container class="bigger-ctnr-margin h-100"> 
            <QuickIcon :location="''" :name="'love_2154176'" viewBox="0 0 100 100" />
            <h2>Microservices</h2>
            <p>I believe a well planned API is the cornerstone of a good product.</p>
            <h6>My go-to frameworks</h6>
            <p>Spring, NodeJS</p>
            <h6>Technology</h6>
            <p>AWS (ECR, ECS, EC2, RDS, S3, KMS)</p>
            <p>Spring Boot, ExpressJS</p>
            <p>PostgreSQL, MongoDB, MySQL</p>
            <p>JUnit (Juniper), Should.js</p>
          </b-container>
        </b-col>
        <b-col cols="12" md="3">
          <b-container class="bigger-ctnr-margin h-100"> 
            <QuickIcon :location="''" :name="'love_2154176'" viewBox="0 0 100 100" />
            <h2>UI / UX</h2>
            <p>I value simple problem-solving content.<br/>I also love dark modes.</p>
            <h6>I enjoy designing</h6>
            <p>Websites, Mobile Apps, Components</p>
            <h6>Design Tools</h6>
            <p>Sketch</p>
            <p>Abstract, Plant, Zeplin</p>
            <p>Adobe Illustrator</p>
            <p>Figma</p>
          </b-container>
        </b-col>
        <b-col cols="12" md="3">
          <b-container class="bigger-ctnr-margin h-100"> 
            <QuickIcon :location="''" :name="'love_2154176'" viewBox="0 0 100 100" />
            <h2>Front-End</h2>
            <p>A solid product looks and feels complete to the user.</p>
            <h6>Frameworks of choice</h6>
            <p>Vue, Nuxt, Wordpress, Android</p>
            <h6>Languages</h6>
            <p>Bootstrap, Vuetify</p>
            <p>JS, HTML, CSS, SASS, PHP</p>
            <p>Java, Kotlin, Android Studio</p>
            <p>Segment, Mixpanel, AWS QuickSight (Analytics)</p>
          </b-container>
        </b-col>
        <b-col cols="12" md="3">
          <b-container class="bigger-ctnr-margin h-100"> 
            <QuickIcon :location="''" :name="'love_2154176'" viewBox="0 0 100 100" />
            <h2>Automation</h2>
            <p>Test Driven Development streamlines productivity and reduces rework cycles.</p>
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
          <b-container class="bigger-ctnr-margin"> 
            <h1>hi</h1>
          </b-container>
        </b-col>
      </b-row>
    </section>

    <h5 style="margin-top:25px;text-align:center;">Made with <QuickIcon :location="''" :color="'red'" :name="'love_2154176'" :width="'20'" :size="'1'" viewBox="0 0 100 100" /> in Worcester, MA</h5>
    <h5 id="copyright" style="text-align:center;">&copy; Thomas Rokicki <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></h5>

  </b-col>
</div>
</template>

<script>
import { QuickIcon } from '@craftinggamertom/webslack-bits'

export default {
  
  components: { 
    QuickIcon 
  },
  data () {
    return {
      title: 'Home | Thomas Rokicki'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // { hid: 'viewport', name: 'viewport', content: 'width:device-width, initial-scale:1, shrink-to-fit:no' },
        { hid: 'author', name: 'author', content: 'Thomas Rokicki' },
        { hid: 'description', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Let's Build Something!", name: 'description' },
        { hid: 'ogTitle', content: 'Thomas Rokicki', property: 'og:title' },
        { hid: 'ogDescription', name: 'description', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Let's Build Something!", property: 'og:description' },
        { hid: 'ogUrl', content: 'http://www.thomasrokicki.com/', property: 'og:url' },
        { hid: 'ogImage', content: 'http://www.thomasrokicki.com/v2/resources/img/header-bg.png', property: 'og:image' },
        { hid: 'siteName', content: 'Thomas Rokicki', property: 'og:site_name' },
        { hid: 'ogDescription', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Let's Build Something!", property: 'og:description' },
        { hid: 'propName', content: 'Thomas Rokicki', itemprop: 'name' },
        { hid: 'propDescription', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Technology / Let's Build Something!", itemprop: 'description' },
        { hid: 'propImage', content: 'http://www.thomasrokicki.com/v2/resources/img/header-bg.png', itemprop: 'image' },
        { hid: 'twitterCard', content: 'summary_large_image', name: 'twitter:card' },
        { hid: 'twitterTitle', content: 'Thomas Rokicki', name: 'twitter:title' },
        { hid: 'twitterDescription', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Let's Build Something!", name: 'twitter:description' },
        { hid: 'twitterImage', content: 'http://www.thomasrokicki.com/v2/resources/img/header-bg.png', name: 'twitter:image' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#index-intro, #index-recent-projects {
  text-align: center;
}

#index-skills-title {
  padding-bottom:25px;
  text-align:center;
  text-shadow: 0px 0px 15px #ffffff;
}

.bigger-ctnr-margin {
  margin-bottom: 70px;
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
  padding-top: 20px;
  margin-top: 50px;
  margin-bottom: -8%;
  z-index: 200;
  text-align: center;

  & img {
    // width: 151px; // for testing
    // height: 208px; // for testing
    width: auto;
    height: auto;
    max-width: 200px;
    max-height: 275px;

    position: relative;
    z-index: 201;
  }
}

#index-recent-projects {
  & a.btn {
    background-color: transparent;
    color: #000000;
    border: 2px solid #000000;
    border-radius: 10px;
    font-weight: 500;
  }
}

#skills {
  text-align: center;
  .col-12 {
    margin-bottom: 70px;
  }
  svg {
    margin-top: 15px;
    height: 50px;
    width: auto;
  }
  h2 {
    font-weight: 600;
    margin-bottom: 10px;
  }
  h6 {
    font-weight: 900;
    margin-top: 25px;
  }

}

// theme colors
html[theme="light"] {
    & #index-intro p {
      @include theme-transition();
      color: color("light", tertiary);
    }
    & #index-recent-projects {
      & a.btn {
        background-color: transparent;
        color: color("light", text);
        border: 2px solid color("light", text);

        &:hover {
          background-color: color("light", primary);
          color: color("light", text);
        }
      }
    }
    & #index-skills-title {
      @include theme-transition();
      color: color("light", tertiary);
    }
    & .circle {
      @include theme-transition();
      background-color: color("light", layout-30);
      color: color("light", text);
    }
    & #skills h6, & #skills svg {
      @include theme-transition();
      color: color("light", tertiary);
      fill: color("light", tertiary);
    }
}
html[theme="dark"] {
    & #index-intro p {
      @include theme-transition();
      color: color("dark", tertiary);
    }
    & #index-recent-projects {
      & a.btn {
        background-color: transparent;
        color: color("dark", text);
        border: 2px solid color("dark", text);

        &:hover {
          background-color: color("dark", primary);
          color: color("dark", text);
        }
      }
    }
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
}
</style>