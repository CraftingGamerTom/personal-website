<template>
  <p class="animate1">
    <span class="text-wrapper">
      <span class="letters">Test</span>
    </span>
  </p>
</template>

<style>
.animate1 {
  display: inline-block;
  position: relative;
  font-weight: 900;
  font-size: 3.7em;
  border-bottom: 1px solid black;
}
.animate1 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
.animate1 .letter {
  transform-origin: 0 100%;
  display: inline-block;
  line-height: 1em;
}
</style>

<script>
export default {
  data () {
    return {
      alreadyInitialized: false,
      animation: {},
      styleindex: 0,
      stylearray: [
        'APIs',
        'an app',
        'an experience',
        'a website',
        'better tests',
        'libraries',
        'a process',
        'tech',
        'a relationship'
      ]
    }
  },
  mounted () {
    this.setLetters()
    this.initLetters()
    this.runAnimation()
  },
  beforeDestroy () {
    this.$log.debug('run beforeDestroy')
    this.$anime.remove('.animate1 .letter')
    this.animation = {}
    this.alreadyInitialized = false
    this.styleindex = 0
  },
  methods: {
    runAnimation () {
      this.$log.debug('RUN ANIMATION')
      const anime = this.$anime

      const _this = this
      anime
        .timeline({
          loop: false
        })
        .add({
          targets: '.animate1 .letter',
          translateY: ['1.1em', 0],
          translateX: ['0.55em', 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: 'easeOutExpo',
          delay: (el, i) => 50 * i
        })
        .add({
          targets: '.animate1 .letter',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
          complete (anim) {
            console.log('Animation loop complete')
            _this.setLetters()
            _this.initLetters()
            anim.remove('.animate1 .letter')
            _this.runAnimation()
          }
        })
    },

    setLetters () {
      console.log('STYLEINDEX = ' + this.styleindex)

      const textWrapper = document.querySelector('.animate1 .letters')
      if (textWrapper) {
        textWrapper.innerText = this.stylearray[this.styleindex]
      }

      this.styleindex++
      if (this.styleindex >= this.stylearray.length) {
        this.styleindex = 0
      }
    },
    initLetters () {
      this.$log.debug('INIT LETTERS')
      // Wrap every letter in a span
      const textWrapper = document.querySelector('.animate1 .letters')
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        )
      }
    }
  }
}
</script>
