<template>
  <div>
    <top-navigation />
    <div id="wrapper">
      <nuxt />
      <socials-navigation />
      <settings-modal/>
    </div>
  </div>
</template>

<script>
import { CONST_STORAGE_KEY_THEME } from '~/utils/constants';
import TopNavigation from '~/components/utils/navigation/TopNavigation.vue'
import SocialsNavigation from '~/components/utils/navigation/SocialsNavigation.vue';
import SettingsModal from '~/components/utils/modals/SettingsModal.vue';

export default {
  components: {
    TopNavigation,
    SocialsNavigation,
    SettingsModal
  },
  data () {
    return {
    }
  },
  mounted() {
    let theme = localStorage.getItem(CONST_STORAGE_KEY_THEME);

    console.log('theme found', theme)

    if(theme === null) {
      theme = "light"
      this.setTheme("light")
    }

    let htmlElement = document.documentElement;
    htmlElement.setAttribute('theme', theme)

    this.$root.$on('changethemeviasettings', filter => { this.setTheme(filter.theme) })
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
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  background-image: url(~assets/icons/background-code.svg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-size: 125vw 125vh;
}

body {
  background-color: transparent;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body::-webkit-scrollbar {
  display: none;
}
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

button:focus {
  outline: none;
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