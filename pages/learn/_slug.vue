<template>
  <div id="index-post-slug">
    <b-row>
      <b-col cols="12" offset="0" md="8" offset-md="2">
        <b-container class="container--1">
          <h2>{{ post.title }}</h2>
          <p><strong>{{ post.shortDescription }}</strong></p>
          <p style="padding-top:0px;padding-bottom:0px;margin-bottom:0px;text-align:left;" v-html="$md.render(post.postBody)" />
        </b-container>
      </b-col>
    </b-row>

    <b-modal
      id="common-image-modal"
      ref="common-image-modal"
      size="xl"
      title="ImageModal"
      hide-footer
      hide-header
    >
      <b-img
        v-b-modal.common-image-modal
        style="height: auto; width: 100%"
        :src="commonImageModalSrc"
        fluid
        alt="common-image-model-img"
      />
    </b-modal>
  </div>
</template>

<script>
import ENV from '@/env'
export default {
  filters: {
    formatImageUrl (value) {
      // If missing the domain, prepend the content domain
      if (value) {
        if (value.charAt(0) && value.charAt(0).localeCompare('/') === 0) {
          return ENV.strapi.domain + value
        }
      }
      return value
    }
  },
  scrollToTop: true,
  data () {
    return {
      post: {
        title: 'loading',
        postBody: 'loading'
      },
      commonImageModalSrc: '~/assets/page/edu/missing.png'
    }
  },
  async mounted () {
    const findResponse = await this.$strapi.$posts.find({ slug: this.$route.params.slug })
    this.post = findResponse[0]
    console.log(this.project)
  },
  methods: {
    expandImage (elem) {
      this.commonImageModalSrc = elem.target.src
      this.$refs['common-image-modal'].show()
    }
  }
}
</script>

<style lang="scss" scoped>

.project-image {
  border-radius: 5px;
  width:100%;
  height:auto;
  max-height: 25vh;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 50%);
    cursor: pointer;
  }
}
</style>

<style lang="scss">

// theme colors
html[theme="light"] {
  & .container {
    & pre {
        @include theme-transition();
        color: color("light", text-accent);
    }
  }
}
html[theme="dark"] {
  & .container {
    & pre {
        @include theme-transition();
        color: color("dark", text-accent);
    }
  }
}
</style>
