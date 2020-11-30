<template>
  <div>
    <top-navigation />
    <div id="wrapper">
    <!-- <b-navbar toggleable="lg" type="dark" variant="primary">
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
          <b-nav-item to="/career">
            Career
          </b-nav-item>
          <b-nav-item to="/learn">
            Learn
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->

<button @click="setTheme('dark')" type="button">Toggle dark mode</button>
<button @click="setTheme('light')" type="button">Toggle light mode</button>
<button @click="setTheme('purple')" type="button">Toggle purple mode</button>
<button @click="setTheme('yellow')" type="button">Toggle yellow mode</button>

    <nuxt />
    </div>
  </div>
</template>

<script>
import { CONST_STORAGE_KEY_THEME } from '~/utils/constants';
import TopNavigation from '~/components/utils/navigation/TopNavigation.vue'

export default {
  components: {
    TopNavigation
  },
  data () {
    return {
    }
  },
  mounted() {
    let theme = localStorage.getItem(CONST_STORAGE_KEY_THEME);

    if(theme === undefined) {
      theme = "light"
      setTheme("light")
    }

    let htmlElement = document.documentElement;
    htmlElement.setAttribute('theme', theme)
  },
  computed: {
    breadcrumbItems () { return this.$store.state.breadcrumbs.crumbs }
  },
  methods: {
    setTheme(themeString) {
      localStorage.setItem(CONST_STORAGE_KEY_THEME, themeString);
      let htmlElement = document.documentElement;
      htmlElement.setAttribute('theme', themeString);
    }
  }
}
</script>

<style>
html {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

#wrapper {
  margin-top: 55px;
}
</style>