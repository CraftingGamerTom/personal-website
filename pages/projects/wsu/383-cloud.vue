<template>
  <div>
    <h2 style="padding:5px 1%;color:#a0a0a0;font-size:1.2rem" />
    <b-card bg-variant="default" text-variant="default" title="Card Title" no-body>
      <b-card-header header-tag="nav" style="background-color:inherit" class="sticky-top">
        <b-nav card-header tabs>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/383-cloud/overview">
            Overview
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/383-cloud/common-code">
            Common Code
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/383-cloud/sagemaker">
            SageMaker
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/383-cloud/ranking-areas">
            Ranking Areas
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/383-cloud/machine-learning">
            Machine Learning
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/383-cloud/forecasting">
            Forecasting
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/383-cloud/conclusions">
            Conclusions
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/383-cloud/contributors">
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

<script>
export default {
  middleware: [
    function ({ route, redirect }) {
      if (route.fullPath === '/projects/wsu/383-cloud') {
        return redirect('/projects/wsu/383-cloud/overview')
      }
    }
  ]
}
</script>
