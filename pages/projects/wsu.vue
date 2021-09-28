<template>
  <div>
    <div v-if="$route.fullPath === '/projects/wsu'">
      <b-col cols="12">
        <h1 class="in-page-title">
          Worcester State University
        </h1>

        <section id="all-projects">
          <b-row class="align-self-md-stretch">
            <b-col cols="12" md="6" lg="6" class="margin-bottom-lg">
              <img
                class="project-img"
                src="https://images.squarespace-cdn.com/content/v1/599045bb59cc681bb44b2672/1570913578388-J5RODIH4HM8PM1OJTWFD/ke17ZwdGBToddI8pDm48kPipPbz1MywG1-PB7aWaKvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcTaqKnC3B9BACTsC_CqadS_ucBwEFLvfhNErqSvMfRgEejIks295oVN--9IliyEWp/worcester-ma-public-insurance-adjusters-massachusetts.jpg?format=2500w"
              >
              <p class="status-tag">
                completed
              </p>
              <b-container class="container--1 h-50 project-body">
                <p class="project-job">
                  Worcester State University
                </p>
                <h2 class="project-name">
                  Cloud Computing
                </h2>
                <b-button
                  class="project-btn"
                  to="/projects/wsu/383-cloud"
                >
                  View Project
                </b-button>
              </b-container>
            </b-col>
            <b-col cols="12" md="6" lg="6" class="margin-bottom-lg">
              <img
                class="project-img"
                src="https://www.wbjournal.com/sites/default/files/styles/article_small_cover_image/public/2020-04/img_20200401_124853.jpg?h=c115cddf&itok=C97SaImn"
              >
              <p class="status-tag">
                completed
              </p>
              <b-container class="container--1 h-50 project-body">
                <p class="project-job">
                  Worcester State University
                </p>
                <h2 class="project-name">
                  Big Data Capstone
                </h2>
                <b-button
                  class="project-btn"
                  to="/projects/wsu/483-big-data-capstone"
                >
                  View Project
                </b-button>
              </b-container>
            </b-col>
          </b-row>
        </section>
      </b-col>
    </div>
    <nuxt-child />

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
export default {
  scrollToTop: true,
  data () {
    return {
      commonImageModalSrc: '~/assets/page/edu/missing.png'
    }
  },
  methods: {
    expandImage (elem) {
      this.commonImageModalSrc = elem.target.src
      this.$refs['common-image-modal'].show()
    }
  },
  meta: {
    breadcrumbItems: [
      {
        text: 'Projects',
        to: '/projects'
      },
      {
        text: 'Worcester State University',
        active: true
      }
    ]
  }
}
</script>

<style>
.img-fluid {
  box-shadow: 0px 0px 15px #000;
  border-radius: 6px;
}
.body-image {
  height: auto;
  width: 100%;
  cursor: pointer;
}

.codeblock {
  background: #d9d9d9;
  border: 1px solid #000000;
  border-radius: 5px;
}

.view-code-btn {
  width: 200px;
  line-height: normal;
  font-size: 0.9rem;
  margin-bottom: 25px;
}
</style>

<style lang="scss" scoped>
.project-img {
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 150px;

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
  padding-top: 20px;
  margin-bottom: 0;
  font-weight: 700;
  font-size: .75rem;
}
.project-name {
  padding-top: 0;
  font-size: 1.50rem;

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
