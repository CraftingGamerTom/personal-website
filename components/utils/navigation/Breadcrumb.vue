<template>
  <div>
    <ol class="breadcrumb">
      <li>
        <!-- eslint-disable-next-line vue/attribute-hyphenation -->
        <!-- <Icon :name="'breadcrumb-icon'" :width="'10'" :size="'3'" viewBox="0 9 32 32" /> -->
      </li>
      <li v-for="crumb in breadcrumbItems" :key="crumb.text" class="breadcrumb-item">
        <nuxt-link :to="crumb.active ? '' : crumb.to">
          <span :class="{ 'active': crumb.active }">{{ crumb.text }}</span>
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
// import Icon from '~/components/utils/BlustreamIconCmp.vue'

export default {
  name: 'Breadcrumbs',
  // components: { Icon },
  computed: {
    breadcrumbItems () { return this.$store.state.breadcrumbs.crumbs }
  },
  mounted () {
    this.$log.debug('breadcrumbs: ', this.breadcrumbItems)
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  background-color: transparent;

  .active, .active:hover {
      cursor: default;
      text-decoration: none;
  }
  & span:hover {
      cursor: pointer;
      text-decoration: underline;
  }
}

a { // Prevent link from discoloring the text
    color: inherit;
    text-decoration: inherit;
    background-color: inherit;

  &:hover {
    background-color: inherit;
  }
}

// theme colors
html[theme="light"] {
  & .breadcrumb {
    @include theme-transition();
    background-color: transparent;
    color: color("light", text);

    & .active, & .active:hover {
      @include theme-transition();
      color: color("light", text-accent);
    }
    & span:hover {
      @include theme-transition();
      color: color("light", text-accent);
    }
  }
}
html[theme="dark"] {
  & .breadcrumb {
    @include theme-transition();
    background-color: transparent;
    color: color("dark", text);

    & .active, & .active:hover {
      @include theme-transition();
      color: color("dark", text-accent);
    }
    & span:hover {
      @include theme-transition();
      color: color("dark", text-accent);
    }
  }
}
</style>
