<template>
  <div>
    <h2 style="padding:5px 1%;color:#a0a0a0;font-size:1.2rem" />
    <b-card bg-variant="default" text-variant="default" title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/edu/wsu/cs/383-cloud/overview">
            Overview
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/edu/wsu/cs/383-cloud/common-code">
            Common Code
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/edu/wsu/cs/383-cloud/sagemaker">
            SageMaker
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/edu/wsu/cs/383-cloud/ranking-areas">
            Ranking Areas
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/edu/wsu/cs/383-cloud/machine-learning">
            Machine Learning
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/edu/wsu/cs/383-cloud/forecasting">
            Forecasting
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/edu/wsu/cs/383-cloud/conclusions">
            Conclusions
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/edu/wsu/cs/383-cloud/contributors">
            Contributors
          </b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body>
        <!-- Child route gets rendered in <router-view> or <nuxt-child>
        <router-view />
        -->
        <!-- Or if using Nuxt.js -->
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
      </b-card-body>
    </b-card>
  </div>
</template>

<style scoped>
  .active-nav-tab {
    color: #495057;
    background-color: #dee2e6;
    border-color: #babdc0 #babdc0 #fff;
  }
</style>

<style>
  .img-fluid {
    box-shadow: 0px 0px 15px #000;
    border-radius: 10px;
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

<script>
export default {
  data () {
    return {
      commonImageModalSrc: '~/assets/page/edu/wsu/cs/383-cloud/missing.png'
    }
  },
  methods: {
    expandImage (elem) {
      this.commonImageModalSrc = elem.target.src
      this.$refs['common-image-modal'].show()
    }
  },
  middleware: 'edu/redirects'
}
</script>
