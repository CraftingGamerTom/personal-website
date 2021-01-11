<template>
<div>
    <a @click="rotateTheme()">
        <svg width="24" height="24" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio,xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
    </a>
    <a @click="openSettings()">
        <svg width="24" height="24" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio,xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    </a>
</div>
</template>

<script>
import { CONST_STORAGE_KEY_THEME } from '~/utils/constants';

export default {
    methods: {
        rotateTheme() {
            let themeWheel = ['light', 'dark']

            let currentTheme = localStorage.getItem(CONST_STORAGE_KEY_THEME)
            let currentThemeIndex = themeWheel.indexOf(currentTheme)
            let newThemeIndex = 0
            if(currentThemeIndex >= themeWheel.length-1 || currentThemeIndex === -1) { 
                newThemeIndex = 0
            } else {
                newThemeIndex = currentThemeIndex+1
            }

            this.$root.$emit('changethemeviasettings', { theme: themeWheel[newThemeIndex] })
        },
        openSettings() {
            this.$root.$emit('opensettings', { })
        }
    },
}
</script>

<style lang="scss" scoped>
#user-actions-mobile-bar, #user-actions-desktop {
    & a {
        padding-right: 10px;
    }

    & svg {
        cursor: pointer;
        width: 24px;
        height: auto;
        transition: width .25s ease-in!important;

        &:hover {
            transition: width .25s ease-in!important;
            width: 26px;
            height: auto;
        }
    }
}
</style>


<style lang="scss" scoped>

html[theme="light"] {
    #user-actions-mobile-bar, #user-actions-desktop {
        & svg {
            @include theme-transition();
            color: color("light", text-accent);
            fill: none;

            &:hover {
                @include theme-transition();
                color: color("light", text);
                fill: color("light", tertiary);
            }
        }
    }
}
html[theme="dark"] {
    #user-actions-mobile-bar, #user-actions-desktop {
        & svg {
            @include theme-transition();
            color: color("dark", text-accent);
            fill: none;

            &:hover {
                @include theme-transition();
                color: color("dark", text);
                fill: color("dark", tertiary);
            }
        }
    }
}
</style>