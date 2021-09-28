<template>
  <div>
    <section>
      <b-row>
        <b-col cols="12">
          <b-container id="index-licenses" class="container--1">
            <h1 style="padding-top:25px;padding-bottom:0px;">
              Licenses
            </h1>
            <hr>
            <p style="padding-top:0px;padding-bottom:0px;margin-bottom:0px;" v-html="$md.render(licenseContent.body)" />
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
      licenseContent: {
        body: ''
      },
      convertedHTML: null
    }
  },
  async mounted () {
    try {
      this.licenseContent = await this.$strapi.$licenses.find()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
