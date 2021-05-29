<template>
  <slide-out-navigation class="socials-nav" :navItems="navItems" :activator="'//s.svgbox.net/hero-outline.svg?fill=ffffff#cursor-click'" />
</template>

<script>
import SlideOutNavigation from '~/components/utils/navigation/SlideOutNavigation.vue';

export default {
  components: {
    SlideOutNavigation
  },
  data () {
    return {
      navItems: [{
        img: "//s.svgbox.net/hero-outline.svg?fill=FF9AA2#chat-alt-2",
        link: "/contact"
      },{
        img: "//s.svgbox.net/social.svg?fill=0077b5#linkedin", 
        link: "https://www.linkedin.com/in/tcrokicki/"
      },{
        img: "//s.svgbox.net/files.svg?#gitlab", 
        link: "https://gitlab.com/CraftingGamerTom"
      },{
        img: "//s.svgbox.net/social.svg?fill=ffffff#github",
        link: "https://github.com/CraftingGamerTom"
      }]
    }
  },
}
</script>

<style lang="scss" scoped>
.socials-nav {
    position: fixed;
    z-index: 1000;
    bottom: 15px;
    right: 15px;
}
</style>

<style lang="scss" scoped>
html[theme="light"] {
    & .slide-out-nav {
        background: color("light", primary);

        & .activator {
            background: color("light", primary);

            &.activator-active {
            background: color("light", layout-20);
            }
        }

        & slide {
            background: color("light", layout-40);
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
    }
}
</style>