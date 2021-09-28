<template>
  <div>
    <section>
      <b-row>
        <b-col cols="12">
          <b-container id="index-changelog" class="container--1">
            <h1 style="padding-top:25px;padding-bottom:0px;">
              Changelog
            </h1>
            <p>Last Update: {{ changelogContent.lastRelease }}</p>
            <p>Current Version: {{ changelogContent.currentVersion }}</p>
            <hr>
            <h3>Feature Requests</h3>
            <p style="padding-top:0px;padding-bottom:0px;margin-bottom:0px;text-align:left;" v-html="$md.render(changelogContent.featureRequests)" />
            <hr>
            <h3>Known Bugs</h3>
            <p style="padding-top:0px;padding-bottom:0px;margin-bottom:0px;text-align:left;" v-html="$md.render(changelogContent.knownBugs)" />
            <hr>
            <h3>Changelog History</h3>
            <p style="padding-top:0px;padding-bottom:0px;margin-bottom:0px;text-align:left;" v-html="$md.render(changelogContent.versionHistory)" />
          </b-container>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      changelogContent: {
        featureRequests: '',
        knownBugs: '',
        versionHistory: ''
      },
      convertedHTML: null
    }
  },
  async mounted () {
    try {
      this.changelogContent = await this.$strapi.$changelog.find()
    } catch (error) {
      this.$log.error(error)
    }
  }
}
</script>
