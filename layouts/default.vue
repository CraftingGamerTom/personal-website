<template>
  <div>
    <top-navigation />
    <div class="body-wrapper">
      <nuxt />
      <socials-navigation id="layout-socials-nav" />
      <settings-modal />
      <copyright id="layout-footer" />
    </div>
  </div>
</template>

<script>
import { CONST_STORAGE_KEY_THEME } from '~/utils/constants'
import TopNavigation from '~/components/utils/navigation/TopNavigation.vue'
import SocialsNavigation from '~/components/utils/navigation/SocialsNavigation.vue'
import SettingsModal from '~/components/utils/modals/SettingsModal.vue'
import Copyright from '~/components/utils/modals/Copyright.vue'

export default {
  components: {
    TopNavigation,
    SocialsNavigation,
    SettingsModal,
    Copyright
  },
  data () {
    return {
    }
  },
  computed: {
    breadcrumbItems () { return this.$store.state.breadcrumbs.crumbs }
  },
  mounted () {
    let theme = localStorage.getItem(CONST_STORAGE_KEY_THEME)

    console.log('theme found', theme)

    if (theme === null) {
      theme = 'light'
      this.setTheme('light')
    }

    const htmlElement = document.documentElement
    htmlElement.setAttribute('theme', theme)

    this.$root.$on('changethemeviasettings', (filter) => { this.setTheme(filter.theme) })
  },
  methods: {
    setTheme (themeString) {
      localStorage.setItem(CONST_STORAGE_KEY_THEME, themeString)
      const htmlElement = document.documentElement
      htmlElement.setAttribute('theme', themeString)
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

.body-wrapper {
  margin-top: 55px;
}
.margin-bottom-md {
  margin-bottom: 70px;
}
.margin-bottom-lg {
  margin-bottom: 125px;
}
.in-page-title {
  padding-bottom:25px;
  text-align:center;
  text-shadow: 0px 0px 15px #ffffff;
}

/* body form input.form-control {
  font-size: 1rem;
  font-weight: 400;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
} */
</style>

<style lang="scss">
// theme colors
html[theme="light"] {
  & .in-page-title {
    @include theme-transition();
    color: color("light", tertiary);
  }
}
html[theme="dark"] {
  & .in-page-title {
    @include theme-transition();
    color: color("dark", tertiary);
  }
}
</style>
