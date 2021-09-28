<!-- Inspired by DesignCourse: https://www.youtube.com/watch?v=n4_s0DpiHjQ -->
<template>
  <div id="slide-out-nav" :class="{ 'nav-screen-left': openOnRight, 'nav-screen-right': !openOnRight }">
    <img
      v-if="openOnRight"
      id="activator-right"
      class="activator"
      :src="activator"
      alt="activator-img"
      @click="toggleMenu"
    >
    <slide v-if="openOnRight" v-show="currentlyOpen" id="slide-right">
      <ul>
        <li v-for="item in navItems" :key="item.link">
          <a :href="item.link"><img :src="item.img"></a>
        </li>
      </ul>
    </slide>

    <slide v-if="!openOnRight" v-show="currentlyOpen" id="slide-left">
      <ul>
        <li v-for="item in navItems" :key="item.link">
          <a :href="item.link"><img :src="item.img"></a>
        </li>
      </ul>
    </slide>
    <img
      v-if="!openOnRight"
      id="activator-left"
      class="activator"
      :class="{ 'activator-active':toggle }"
      :src="activator"
      alt="activator-img"
      @click="toggleMenu"
    >
  </div>
</template>

<script>
export default {
  props: {
    side: {
      type: String,
      required: false,
      default: 'right'
    },
    activator: {
      type: String,
      required: false,
      default: '//s.svgbox.net/hero-outline.svg?fill=fff#menu-alt-1'
    },
    navItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      openOnRight: (this.side !== 'right'),
      toggle: false,
      currentlyOpen: false,
      tween1: {},
      tween2: {}
    }
  },
  mounted () {
    // LEFT ACTIVATOR
    // eslint-disable-next-line
        this.tween1 = gsap.timeline({defaults: {ease: "power2.outIn"}})

    this.tween1.to('#activator-left', {
      // background: '#805ad5', // switched to vanilla css transision for overriding
      borderRadius: '0 5em 5em 0'
    })
    this.tween1.to('slide#slide-left', {
      clipPath: 'ellipse(100% 100% at 50% 50%)',
      display: 'block'
    }, '-=.5')
    this.tween1.to('slide#slide-left img', {
      opacity: 1,
      transform: 'translateX(0)',
      stagger: 0.05
    }, '-=.5')
    this.tween1.pause()

    // RIGHT ACTIVATOR
    // eslint-disable-next-line
        this.tween2 = gsap.timeline({defaults: {ease: "power2.inOut"}})

    this.tween2.to('#activator-right', {
      // background: '#805ad5', // switched to vanilla css transision for overriding
      borderRadius: '5em 0 0 5em'
    })
    this.tween2.to('slide#slide-right', {
      clipPath: 'ellipse(100% 100% at 50% 50%)',
      display: 'block'
    }, '-=.5')
    this.tween2.to('slide#slide-right img', {
      opacity: 1,
      transform: 'translateX(0)',
      stagger: 0.05
    }, '-=.5')
    this.tween2.pause()
  },
  methods: {
    async toggleMenu () {
      this.toggle = !this.toggle
      let closeAfterAnimation = false // init boolean

      // Display on open
      if (!this.currentlyOpen) {
        this.currentlyOpen = true
      } else {
        closeAfterAnimation = true
      }

      // Run animation
      if (this.toggle ? this.tween1.play() : this.tween1.reverse()) {
        if (this.toggle ? this.tween2.play() : this.tween2.reverse()) { // no display after closing
          if (closeAfterAnimation) {
          // eslint-disable-next-line no-undef
            const _this = this
            await new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            // if-statement logic to ensure user cant break by spam clicking
              if (_this.currentlyOpen === true) {
                _this.currentlyOpen = false
              } else {
                _this.currentlyOpen = true
              }
            })
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#slide-out-nav {
    height: 50px;
    display: flex;

    & .activator {
        padding: .75em;
        border-radius: 100%;
        cursor: pointer;
        background: rgb(30,33,41);

        -webkit-transition: background 0.75s ease-out;
        -moz-transition: background 0.75s ease-out;
        -o-transition: background 0.75s ease-out;
        transition: background 0.75s ease-out;

        &:hover {
            background: rgb(50,56,68);
        }

        &.activator-active {
            background: #805ad5;
        }
    }

    &.nav-screen-left {
        left: 10px;
    }
    &.nav-screen-right {
        right: 10px;
    }
}

img {
    width: 100%;
    max-width: 45px;
    height: auto;
}

slide {
    background: rgb(41,46,56);
    ul {
        margin: 0;
        margin-top: 0.3em;
        display: flex;
        list-style-type: none;
        padding: 0;
        height: fit-content;
        width: fit-content;

        li a {
            display: block;
            padding: .5em;
            margin: 0 .5em;
            border-radius: 50%;

            &:hover {
                background: rgb(50,56,68);
            }
            img {
                max-width: 20px;
                opacity: 0;
            }
        }
    }
}

#slide-right {
    border-radius: 0 5em 5em 0;
    clip-path: ellipse(50% 50% at -50% 50%);
    & img {
        transform: translateX(-10px);
    }
}
#slide-left {
    border-radius: 5em 0 0 5em;
    clip-path: ellipse(50% 50% at 150% 50%);
    & img {
        transform: translateX(10px);
    }
}
</style>
