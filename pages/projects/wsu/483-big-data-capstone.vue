<template>
  <div>
    <h2 style="padding:5px 1%;color:#a0a0a0;font-size:1.2rem" />
    <b-card bg-variant="default" text-variant="default" title="Card Title" no-body>
      <b-card-header header-tag="nav" style="background-color:inherit" class="sticky-top">
        <b-nav card-header tabs>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/overview">
            Overview
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/common-code">
            Common Code
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/statistics">
            Statistics
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/incident-maps">
            Incident Maps
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/interactive-graphs">
            Interactive Graphs
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/forecasting">
            Forecasting
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/weather">
            Weather
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/conclusions">
            Conclusions
          </b-nav-item>
          <b-nav-item exact exact-active-class="active-nav-tab" to="/projects/wsu/483-big-data-capstone/contributors">
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

<script>
export default {
  middleware: [
    function ({ route, redirect }) {
      if (route.fullPath === '/projects/wsu/483-big-data-capstone') {
        return redirect('/projects/wsu/483-big-data-capstone/overview')
      }
    }
  ]

}
</script>
