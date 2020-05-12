<template>
  <div>
    <div v-if="$route.fullPath === '/edu/wsu'">
      <b-alert variant="warning" show>
        <span style="font-weight:800;">UNDER CONSTRUCTION</span> Thank you for your patience
      </b-alert>
      WSU PAGE
      <p>
        <nuxt-link to="/edu/wsu/cs/383-cloud">
          CS383 - Cloud, Parallel & Distributed Computing
        </nuxt-link>
      </p>
      <p>
        <nuxt-link to="/edu/wsu/cs/483-big-data-capstone">
          CS483 - Big Data Capstone
        </nuxt-link>
      </p>
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
      <b-img v-b-modal.common-image-modal style="height:auto; width:100%;" :src="this.commonImageModalSrc" fluid alt="common-image-model-img" />
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
  middleware: 'edu/redirects',
  meta: {
    breadcrumbItems: [
      {
        text: 'Education',
        to: '/edu'
      }, {
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
