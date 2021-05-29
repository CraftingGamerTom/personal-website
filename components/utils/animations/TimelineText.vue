<template>
<p class="animate1">
    <span class="text-wrapper">
        <span class="letters"> </span>
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
    data() {
        return {
            alreadyInitialized: false,
            animation: {},
            styleindex: 0,
            stylearray: ["APIs","an app", "an experience", "a website", "better tests", "libraries", "a process", "tech", "a relationship"]

        }
    },
  mounted() {
    //   if(animation) {animation.remove()}
      if(!this.alreadyInitialized) {
          this.$log.debug("run mounted")
        // eslint-disable-next-line
    anime.remove( ".animate1 .letter" );
        this.alreadyInitialized = true;
        this.initLetters()
      } else {
          this.$log.debug("already initialized")
      }
  },
  beforeDestroy() {
          this.$log.debug("run beforeDestroy")
        // eslint-disable-next-line
    anime.remove( ".animate1 .letter" );
    this.animation = {};
  },
  updated() {
    // TODO fix case where making an update the the page causes overlapping animations
    // animation.remove('.animate1 .letter');
    // this.initLetters()
  },
  methods: {
      async runAnimation() {
          this.$log.debug("RUN ANIMATION")

          let _this = this
        // eslint-disable-next-line
        this.animation = anime.timeline({loop: false})
        .add({
            targets: '.animate1 .letter',
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
			opacity: [0,1],
            duration: 750,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i
        }).add({
            targets: '.animate1 .letter',
			opacity: [1,0],
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
            // eslint-disable-next-line
            complete: function(anim) {
        //   console.log("COMPLETE RUN ANIMATION")

                document.querySelector('.animate1 .letters').innerText = _this.stylearray[_this.styleindex];

                _this.styleindex++;
                if (_this.styleindex >= _this.stylearray.length) {
                    _this.styleindex = 0;
                }
                _this.initLetters();

            }
        });
      },
      async initLetters() {
        this.$log.debug("INIT LETTERS")
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.animate1 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        this.runAnimation();
      }
  }
}
</script>

