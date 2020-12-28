<!-- Inspired by DesignCourse: https://www.youtube.com/watch?v=n4_s0DpiHjQ -->
<template>
    <div class="slide-out-nav">
        <slide v-if="!displayRight">
            <ul>
                <li><a href="#github"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#bell"></a></li>
                <li><a href="#linked-in"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#beaker"></a></li>
                <li><a href="/contact"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#chat"></a></li>
                <li><a href="#color-picker"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#cloud-download"></a></li>
                <li><a href="/settings"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#cog"></a></li>
            </ul>
        </slide>
        <img class="activator" id="activator" src="//s.svgbox.net/hero-outline.svg?fill=fff#menu-alt-1" alt="">
        <slide v-if="displayRight">
            <ul>
                <li><a href="#"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#bell"></a></li>
                <li><a href="#"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#beaker"></a></li>
                <li><a href="#"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#chat"></a></li>
                <li><a href="#"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#cloud-download"></a></li>
                <li><a href="#"><img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#cog"></a></li>
            </ul>
        </slide>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayRight: false
        }
    },
    mounted() {
        var card = document.getElementById('activator');
        // eslint-disable-next-line
        var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        var toggle = false;

        tl.to('.activator', {
            background: '#805ad5',
            // 'borderRadius': '5em 0 0 5em' // TODO
            'borderRadius': '0 5em 5em 0'
        });
        tl.to('slide', {
            'clipPath': 'ellipse(100% 100% at 50% 50%)'
        }, "-=.5")
        tl.to('slide img', {
            opacity: 1,
            transform: 'translateX(0)',
            stagger: .05
        }, "-=.5")
        tl.pause();

        card.addEventListener('click', () => {
            toggle = !toggle;
            if (toggle ? tl.play() : tl.reverse());
        })
    },
}
</script>

<style lang="scss" scoped>

.slide-out-nav {
    height: 50px;
    display: flex;

    .activator {
        padding: 1em;
        border-radius: 100%;
        cursor: pointer;
        background: rgb(30,33,41);
        
        &:hover {
            background: rgb(50,56,68);
        }
    }
}

img {
    width: 100%;
    max-width: 45px;
    height: auto;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: fit-content;
    width: fit-content;
}

slide {
    background: rgb(41,46,56);
    // border-radius: 0 5em 5em 0; // TODO
    // clip-path: ellipse(50% 50% at -50% 50%); // TODO
    border-radius: 5em 0 0 5em;
    clip-path: ellipse(50% 50% at 150% 50%);

    ul {
        margin-top: 0.3em;
        display: flex;

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
                // transform: translateX(-10px); // TODO
                transform: translateX(10px);
            }
        }
    }
}
</style>