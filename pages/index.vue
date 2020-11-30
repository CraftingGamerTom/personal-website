<template>
  <div>

<b-row>
  <b-col cols="12">
    <section id="about-me">
      <b-row>
        <b-col cols="12">
          <b-container> 
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
          </b-container>
        </b-col>
      </b-row>
    </section>

    <section id="projects">
      <b-row>
        <b-col cols="12">
          <b-container> 
            <h1>hi</h1>
          </b-container>
        </b-col>
      </b-row>
    </section>

        <section id="skills">
      <b-row>
        <b-col cols="3">
          <b-container> 
            <h1>hi</h1>
          </b-container>
        </b-col>
        <b-col cols="3">
          <b-container> 
            <h1>hi</h1>
          </b-container>
        </b-col>
        <b-col cols="3">
          <b-container> 
            <h1>hi</h1>
          </b-container>
        </b-col>
        <b-col cols="3">
          <b-container> 
            <h1>hi</h1>
          </b-container>
        </b-col>
      </b-row>
    </section>

        <section id="lets-build">
      <b-row>
        <b-col cols="12">
          <b-container> 
            <h1>hi</h1>
          </b-container>
        </b-col>
      </b-row>
    </section>
  </b-col>
</b-row>

  </div>
</template>

<script>

export default {
  components: { QuickIcon },
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
