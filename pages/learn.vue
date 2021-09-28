<template>
  <div>
    <div v-if="$route.fullPath === '/learn'">
      <b-col cols="12">
        <h1 class="in-page-title">
          Blog and Articles
        </h1>

        <section id="all-learn">
          <b-row class="align-self-md-stretch">
            <b-col
              v-if="allLearn.fetchError"
              cols="12"
              style="text-align: center"
              class="text--error"
            >
              <h3>Error loading Blog Articles</h3>
              <p>{{ allLearn.fetchError }}</p>
            </b-col>
            <b-col
              v-for="post in allLearn.posts"
              v-else
              :key="post.id"
              cols="12"
              md="6"
              lg="3"
              class="margin-bottom-lg"
            >
              <img
                class="learn-img"
                :src="post.banner | imageOrMissing"
              >
              <b-container class="container--1 h-75 learn-body">
                <p class="learn-job">
                  {{ post.type | typeText }}
                </p>
                <h2 class="learn-name">
                  {{ post.title }}
                </h2>
                <p>{{ post.shortDescription }}</p>
                <b-button
                  class="learn-btn container-bottom-btn"
                  :to="'/learn/' + post.slug"
                >
                  View Post
                </b-button>
              </b-container>
            </b-col>
          </b-row>
        </section>
      </b-col>
    </div>
    <div v-else>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import ENV from '@/env'

export default {
  filters: {
    imageOrMissing (imageObj) {
      if (imageObj) {
        return ENV.strapi.domain + imageObj.url
      } else {
        // return '~/assets/icons/missing-file.jpg'
        return '/v2/resources/img/missing-file.jpg'
      }
    },
    typeText (typeEnum) {
      switch (typeEnum) {
        case 'blog':
          return 'Blog'
        case 'lesson':
          return 'Lesson'
        default:
          return 'Unknown'
      }
    }
  },
  layout (context) {
    return context.isMobile ? 'mobile' : 'default'
  },
  scrollToTop: true,
  data () {
    return {
      title: 'Learn | Thomas Rokicki',
      allLearn: {
        fetchError: null,
        posts: null
      }
    }
  },
  // page component definitions
  head () {
    return {
      title: this.title
    }
  },
  async mounted () {
    try {
      this.allLearn.posts = await this.$strapi.$posts.find({
        _sort: 'published_at:DESC'
      })
    } catch (error) {
      this.allLearn.fetchError = error
    }
  }
}
</script>
<style lang="scss" scoped>
.learn-img {
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
.learn-body {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  position: relative;
}
.learn-job {
  padding-top: 25px;
  margin-bottom: 0;
  font-weight: 700;
}
.learn-name {
  padding-top: 0;
}
.learn-btn {
  position: absolute;
  bottom: 25px;
}

// theme colors
html[theme="light"] {
  & .learn-job {
    @include theme-transition();
    color: color("light", tertiary);
  }
}
html[theme="dark"] {
  & .learn-job {
    @include theme-transition();
    color: color("dark", tertiary);
  }
}
</style>
