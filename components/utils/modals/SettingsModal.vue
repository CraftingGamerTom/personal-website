<template>
  <b-modal ref="settings-modal" v-model="modalShow" hide-footer title="Site Settings">
    <!-- <div class="d-block text-center">
        <h5>Thanks for checking out my site!</h5>
      </div> -->
    <br>
    <div class="d-block">
      <h6>Theme</h6>
      <b-button-group>
        <b-button @click="emitTheme('light')">
          Light
        </b-button>
        <b-button @click="emitTheme('dark')">
          Dark
        </b-button>
      </b-button-group>
    </div>
    <br>
    <!-- <div class="d-block text-center">
        <h5>Super Secret Settings</h5>
        <b-button-group>
            <b-button>Light</b-button>
            <b-button>Dark</b-button>
        </b-button-group>
      </div> -->
  </b-modal>
</template>

<script>
export default {
  data () {
    return {
      modalShow: false
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    this.$root.$on('opensettings', (filter) => { this.modalShow = true })
  },
  methods: {
    emitTheme (themeString) {
      this.$root.$emit('changethemeviasettings', { theme: themeString })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
