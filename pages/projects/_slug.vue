<template>
  <div id="index-project-slug">
    <b-row>
      <b-col cols="12" offset="0" md="6" offset-md="3">
        <b-container class="container--1">
          <h2>{{ project.name }}</h2>
          <p>{{ project.shortDescription }}</p>
        </b-container>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" offset="0" md="6" offset-md="3">
        <b-container class="container--1">
          <h3>Tools</h3>
          <br>
          <b-row>
            <b-col cols="12" style="display:inline-flex;">
              <div v-for="tag in project.tags" :key="tag.id" style="display:block;margin:0 10px;font-size:.75em;line-height:1.1em;">
                <b-avatar variant="dark" :src="tag.avatar.url | formatImageUrl" :alt="tag.avatar.alternativeText" style="border-radius:20%!important;box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);" />
                <p style="margin-top:5px;">
                  {{ tag.name }}
                </p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" offset="0" md="6" offset-md="3">
        <b-container class="container--1">
          <h3>Goal</h3>
          <p style="text-align:left;">
            {{ project.goal }}
          </p>
          <br>
          <h3>Role</h3>
          <p style="text-align:left;">
            {{ project.role }}
          </p>
          <br>
          <h3>Alternative</h3>
          <p style="text-align:left;">
            {{ project.alternative }}
          </p>
          <br>
        </b-container>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" offset="0" md="6" offset-md="3">
        <b-container class="container--1">
          <h3>Images</h3>
          <p>Click to zoom</p>
          <br>
          <b-row>
            <b-col v-for="image in project.images" :key="image.url" cols="6">
              <b-img class="project-image" :src="image.url | formatImageUrl" fluid :alt="image.alternativeText" @click="expandImage" />
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" offset="0" md="6" offset-md="3">
        <b-container class="container--1">
          <h3>Description</h3>
          <p style="padding-top:0px;padding-bottom:0px;margin-bottom:0px;text-align:left;" v-html="$md.render(project.description)" />
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
      project: {
        name: 'loading',
        description: 'loading',
        images: ['~/assets/page/edu/missing.png']
      },
      commonImageModalSrc: '~/assets/page/edu/missing.png'
    }
  },
  async mounted () {
    const findProjectsResponse = await this.$strapi.$projects.find({ slug: this.$route.params.slug })
    this.project = findProjectsResponse[0]
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
