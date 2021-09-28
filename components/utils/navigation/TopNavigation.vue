<template>
  <navigation-topbar :nav-items="topbarItems" :brand-image="brandImage">
    <!-- <template v-slot:user-actions-desktop>
        <b-button variant="danger">Button</b-button>
      </template>
      <template v-slot:user-actions-mobile-dropdown>
        <b-button variant="success">Button</b-button>
      </template>
      <template v-slot:user-actions-mobile-bar>
        <b-button variant="info">Button</b-button>
      </template> -->
    <template #user-actions-mobile-bar>
      <settings-on-navigation />
    </template>
    <template #user-actions-desktop>
      <settings-on-navigation />
    </template>
  </navigation-topbar>
</template>

<script>
import { NavigationTopbar } from '@craftinggamertom/webslack-bits'
import SettingsOnNavigation from '~/components/utils/navigation/SettingsOnNavigation.vue'

export default {
  components: {
    NavigationTopbar,
    SettingsOnNavigation
  },
  data () {
    return {

      topbarItems: [
        {
          title: 'projects',
          link: '/projects'
        },
        {
          title: 'career',
          link: '/career'
        },
        {
          title: 'learn',
          link: '/learn'
        }
      ],
      brandImage: {
        icon: 'logo-long',
        managedIconLocation: '~/assets/icons',
        width: '1',
        size: '1',
        iconType: 'managed'
      }
    }
  }
}
</script>

<style lang="scss">
nav {
    margin-bottom: 45px;

    &.navbar a.navbar-brand {
        margin-left: 1rem;
        padding-top: 1px;
        padding-bottom: 1px;
    }

    &.navbar a svg.size--1x {
      height: 1.5em;
      width: inherit;
    }
}

html[theme="light"] {
    & nav {
        @include theme-transition();
        background-color: color("light", primary);

        & .navbar-nav a.nav-link {
          @include theme-transition();
          color: color("light", text-accent);
        }

        & .vertical {
          @include theme-transition();
          border-left: 1px solid color("light", text-accent);
        }

        & svg {
          @include theme-transition();
          // color: color("light", text-accent);
          fill: color("light", text-accent);
          // stroke: color("light", text-accent);
        }

        & .navbar-toggler {
          @include theme-transition();
          border-color: color("light", text-accent);

          & svg {
            color: color("light", text-accent);
          }
        }
    }
}
html[theme="dark"] {
    & nav {
        @include theme-transition();
        background-color: color("dark", primary);

        & .navbar-nav a.nav-link {
          @include theme-transition();
          color: color("dark", text-accent);
        }

        & .vertical {
          @include theme-transition();
          border-left: 1px solid color("dark", text-accent);
        }

        & svg {
          @include theme-transition();
          // color: color("dark", text-accent);
          fill: color("dark", text-accent);
          // stroke: color("dark", text-accent);
        }

        & .navbar-toggler {
          @include theme-transition();
          border-color: color("dark", text-accent);

          & svg {
            color: color("dark", text-accent);
          }
        }
    }
}
</style>
