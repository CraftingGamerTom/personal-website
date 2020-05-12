<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" sticky>
      <b-navbar-brand href="#">
        Thomas Rokicki
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">
            Home
          </b-nav-item>
          <b-nav-item to="/projects">
            Projects
          </b-nav-item>
          <b-nav-item to="/edu">
            Education
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-breadcrumb :items="breadcrumbItems" />

    <nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    breadcrumbItems () { return this.$store.state.breadcrumbs.crumbs }
  }
}
</script>
