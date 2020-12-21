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

            <b-button style="margin-bottom:15px;">View All</b-button>

          </b-container>
        </b-col>
      </b-row>
    </section>

    <h1 id="index-skills-title">Skills</h1>

    <section id="skills">
      <b-row>
        <b-col cols="12" md="3">
          <b-container class="bigger-ctnr-margin"> 
            <h1>Microservices</h1>
          </b-container>
        </b-col>
        <b-col cols="12" md="3">
          <b-container class="bigger-ctnr-margin"> 
            <h1>UI / UX</h1>
          </b-container>
        </b-col>
        <b-col cols="12" md="3">
          <b-container class="bigger-ctnr-margin"> 
            <h1>Front-End</h1>
          </b-container>
        </b-col>
        <b-col cols="12" md="3">
          <b-container class="bigger-ctnr-margin"> 
            <h1>Automation</h1>
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

<!-- no-undef: "error"  -->
    <!-- eslint-disable-next-line -->
    <h5 style="margin-top:25px;text-align:center;">Made with <QuickIcon :location="''" :color="'red'" :name="'love_2154176'" :width="'20'" :size="'1'" viewBox="0 0 100 100" /> in Worcester, MA</h5>
    <h5 id="copyright" style="text-align:center;">&copy; Thomas Rokicki <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></h5>

  </b-col>
</div>
</template>

<script>
/* eslint-disable no-undef */
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
// theme colors
html[theme="light"] {
    & #index-intro p {
      @include theme-transition();
      color: color("light", text-accent);
    }
    & #index-skills-title {
      @include theme-transition();
      color: color("light", layout-30);
    }
    & .circle {
      @include theme-transition();
      background-color: color("light", layout-30);
      color: color("light", text);
    }
}
html[theme="dark"] {
    & #index-intro p {
      @include theme-transition();
      color: color("dark", text-accent);
    }
    & #index-skills-title {
      @include theme-transition();
      color: color("dark", layout-30);
    }
    & .circle {
      @include theme-transition();
      background-color: color("dark", layout-30);
      color: color("dark", text);
    }
}
</style>