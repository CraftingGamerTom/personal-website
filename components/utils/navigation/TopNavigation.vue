<template>
    <navigation-topbar :nav-items="topbarItems" :brand-image="brandImage" />
</template>


<script>

import { NavigationTopbar } from '@craftinggamertom/webslack-bits'
// import { NavigationTopbar } from '~/components/node_copies/webslack_bits/bits'

export default {
  components: {
    NavigationTopbar
  },
  data() {
      return {
          
      topbarItems: [
            {
              title: 'home',
              link: '/home'
            },
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
            icon: "long-logo",
            managedIconLocation: "~/assets/icons",
            width: "1",
            size: "1",
            iconType: "managed"
          }
      }
  },
    
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
      height: inherit;
      width: inherit;
    }
}

html[theme="light"] {
    & nav {
        background-color: color("light", primary);

        & .navbar-nav a.nav-link {
            color: color("light", text-accent);
        }

        & .vertical {
            border-left: 1px solid color("light", text-accent);
        }

        & svg {
            color: color("light", text-accent);
            fill: color("light", text-accent);
            stroke: color("light", text-accent);
        }
    }
}
html[theme="dark"] {
    & nav {
        background-color: color("dark", primary);

        & .navbar-nav a.nav-link {
            color: color("dark", text-accent);
        }

        & .vertical {
            border-left: 1px solid color("dark", text-accent);
        }

        & svg {
            color: color("dark", text-accent);
            fill: color("dark", text-accent);
            stroke: color("dark", text-accent);
        }
    }
}
</style>