<template>
  <div>
    <b-row>
      <b-col cols="md-4 offset-md-2 sm-12">
        <b-card
          title="Thomas Rokicki"
          img-src="~/assets/page/edu/wsu/cs/383-cloud/contributors/trokicki-background.jpeg"
          img-alt="trokicki-background"
          img-height="160px"
          img-top
          tag="article"
          class="mb-2 text-center"
        >
          <b-avatar class="card-avatar" rounded="lg" src="~/assets/page/edu/wsu/cs/383-cloud/contributors/trokicki.jpeg" />
          <b-card-text>
            Software Nerd. Let's Build Something!
          </b-card-text>

          <a href="https://www.linkedin.com/in/tcrokicki/" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'linkedin']" /></a>
          <a href="https://github.com/CraftingGamerTom" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'github']" /></a>
          <a href="https://gitlab.com/CraftingGamerTom" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'gitlab']" /></a>
        </b-card>
      </b-col>

      <b-col cols="md-4 sm-12">
        <b-card
          title="Oresti Duro"
          img-src="~/assets/page/edu/wsu/cs/383-cloud/contributors/oduro-background.jpg"
          img-alt="oduro-background"
          img-height="160px"
          img-top
          tag="article"
          class="mb-2 text-center"
        >
          <b-avatar rounded="lg" src="~/assets/page/edu/wsu/cs/383-cloud/contributors/oduro.jpeg" />
          <b-card-text>
            Data Scientist
          </b-card-text>

          <a href="https://www.linkedin.com/in/oresti-duro-a7473513a/" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'linkedin']" /></a>
          <a href="https://github.com/oduro22" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'github']" /></a>
          <a href="https://gitlab.com/oduro" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'gitlab']" /></a>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDataFrame: false,
      breadcrumbItems: [
        {
          text: 'Education',
          to: '/edu'
        }, {
          text: 'Worcester State University',
          to: '/edu/wsu'
        }, {
          text: 'CS383 - Cloud, Parallel & Distributed Computing',
          to: '/edu/wsu/cs/383-cloud'
        }, {
          text: 'Contributors',
          active: true
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('breadcrumbs/set', this.breadcrumbItems)
  }
}
</script>

<style scoped>
.b-avatar {
  width: 100px!important;
  height: 100px!important;
  top: -19vh;
  position: relative;
  text-align: center
}
.b-avatar img {
}
.avatar-social {
  width: 2em;
  height: 2em;
  cursor: pointer;
  color: #a0a0a0
}
.avatar-social:hover {
  color: #000000
}
</style>
