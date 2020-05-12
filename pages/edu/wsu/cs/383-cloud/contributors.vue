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
          <b-card-text style="font-size:0.8rem;">
            Full Stack Software Developer
          </b-card-text>

          <b-card-text style="text-align:left; font-size:0.6rem;">
            <p>Responsibilities</p>
            <ul>
              <li>
                Created Ranked Data
              </li>
              <li>
                Visualized Ranked Data
              </li>
              <li>
                Created Website using Nuxt & Vue
              </li>
              <li>
                Association Rule Mining using Python
              </li>
              <li>
                Set up Git Repository and used on SageMaker
              </li>
            </ul>
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
          <b-avatar class="text-center" rounded="lg" src="~/assets/page/edu/wsu/cs/383-cloud/contributors/oduro.jpeg" />
          <b-card-text style="font-size:0.8rem;">
            Data Scientist
          </b-card-text>

          <b-card-text style="text-align:left; font-size:0.6rem;">
            <p>Responsibilities</p>
            <ul>
              <li>
                Ran computations on Hadoop Cluster
              </li>
              <li>
                Computed Recommendations using Ranked Data
              </li>
              <li>
                Created Slideshow for Presentation
              </li>
              <li>
                Forecasted Number of Crimes beyond 2019
              </li>
              <li>
                Created multiple Time Series Visualizations
              </li>
            </ul>
          </b-card-text>

          <a href="https://www.linkedin.com/in/oresti-duro-a7473513a/" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'linkedin']" /></a>
          <a href="https://github.com/oduro22" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'github']" /></a>
          <a href="https://gitlab.com/oduro" target="_blank"><font-awesome-icon class="avatar-social" :icon="['fab', 'gitlab']" /></a>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6 offset-3">
        <p class="text-center">
          We would also like to thank those who contribute to Kaggle. It was a great point of reference for this project. Specifically we used the following links for sure. But there may be more.
        </p>
        <p>
          <ul>
            <li>
              <a target="_blank" href="https://www.kaggle.com/currie32/crimes-in-chicago/kernels">Crimes in Chicago</a>
            </li>
          </ul>
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDataFrame: false
    }
  },
  meta: {
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
}
</script>

<style scoped>
.b-avatar {
  width: 100px!important;
  height: 100px!important;
  margin-bottom: 15px;
  /* top: -19vh;
  position: relative;
  text-align: center */
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
