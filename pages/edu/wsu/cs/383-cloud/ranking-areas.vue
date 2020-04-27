<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Ranking Areas</h2>
        <p>forecasting</p>
        <p>Take a look at the Kaggle exercise that was critical to this project <a target="_blank" href="#">here</a>.</p>
        <p>ADD LINK TO KAGGLE</p>
        <br>
        <h2>
          Table of Contents
        </h2>
        <p><a href="#">test</a></p>
        <b-list-group>
          <b-list-group-item>
            <nuxt-link to="#toc-1">
              Example1
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-2">
              Example2
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-3">
              Example3
            </nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="https://d1.awsstatic.com/re19/Sagemaker/Rhinestone%20SageMaker%20Studio%20Page%202%20-%20v2_full%20size.5390b79fd038865e0816b7275b73b1abaad21121.png" fluid alt="sagemaker-image" />
        <cite><a target="_blank" href="https://aws.amazon.com/sagemaker/">Image Source</a>
        </cite>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-8 sm-12">
        <h2>
          Example1
        </h2>
        <p>
          Lorem ipsum dolor sit amet, lobortis prodesset an sea, ei possit eleifend patrioque vel. Cum semper quodsi habemus te, ad eam ludus regione gloriatur. Iriure vulputate his te. Debitis maluisset incorrupte mea in, graece latine an sit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, lobortis prodesset an sea, ei possit eleifend patrioque vel. Cum semper quodsi habemus te, ad eam ludus regione gloriatur. Iriure vulputate his te. Debitis maluisset incorrupte mea in, graece latine an sit.
        </p>
        <p>
          Ei aliquid volumus adversarium sea, eos modus facilisi eu. Duo an atqui verear. Ne platonem aliquando reformidans eam, mea ex omnis vulputate argumentum, pri homero dicunt latine ne. Discere erroribus vulputate ea mea, id feugait expetenda qui. Duo te paulo splendide, id vel antiopam mediocrem. Ex vix incorrupte consectetuer, est ne eros nonumy liberavisse, cu natum dicat persequeris eos. Et nulla consetetur eum.
        </p>
      </b-col>
      <b-col style="text-align:center;" cols="md-4 sm-12">
        <b-img style="height:250px; width:auto;" src="~/assets/page/edu/wsu/cs/383-cloud/sagemaker/setting-up.png" fluid alt="sagemaker-setting-up" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-2">
      <b-col style="text-align:center;" cols="12">
        <b-img style="height:350px; width:auto;" src="~/assets/page/edu/wsu/cs/383-cloud/sagemaker/setting-up.png" fluid alt="sagemaker-setting-up" />
      </b-col>
      <b-col cols="md-10 offset-md-1 sm-12">
        <h4>
          Example2
        </h4>
        <p>
          Lorem ipsum dolor sit amet, lobortis prodesset an sea, ei possit eleifend patrioque vel. Cum semper quodsi habemus te, ad eam ludus regione gloriatur. Iriure vulputate his te. Debitis maluisset incorrupte mea in, graece latine an sit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, lobortis prodesset an sea, ei possit eleifend patrioque vel. Cum semper quodsi habemus te, ad eam ludus regione gloriatur. Iriure vulputate his te. Debitis maluisset incorrupte mea in, graece latine an sit.
        </p>
        <p>
          Ei aliquid volumus adversarium sea, eos modus facilisi eu. Duo an atqui verear. Ne platonem aliquando reformidans eam, mea ex omnis vulputate argumentum, pri homero dicunt latine ne. Discere erroribus vulputate ea mea, id feugait expetenda qui. Duo te paulo splendide, id vel antiopam mediocrem. Ex vix incorrupte consectetuer, est ne eros nonumy liberavisse, cu natum dicat persequeris eos. Et nulla consetetur eum.
        </p>
        <b-button v-b-toggle.collapse-toc2 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc2" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              Collapse contents Here
            </code>
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-3">
      <b-col cols="md-8 sm-12">
        <h2>
          Example3
        </h2>
        <p>
          Lorem ipsum dolor sit amet, lobortis prodesset an sea, ei possit eleifend patrioque vel. Cum semper quodsi habemus te, ad eam ludus regione gloriatur. Iriure vulputate his te. Debitis maluisset incorrupte mea in, graece latine an sit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, lobortis prodesset an sea, ei possit eleifend patrioque vel. Cum semper quodsi habemus te, ad eam ludus regione gloriatur. Iriure vulputate his te. Debitis maluisset incorrupte mea in, graece latine an sit.
        </p>
        <p>
          Ei aliquid volumus adversarium sea, eos modus facilisi eu. Duo an atqui verear. Ne platonem aliquando reformidans eam, mea ex omnis vulputate argumentum, pri homero dicunt latine ne. Discere erroribus vulputate ea mea, id feugait expetenda qui. Duo te paulo splendide, id vel antiopam mediocrem. Ex vix incorrupte consectetuer, est ne eros nonumy liberavisse, cu natum dicat persequeris eos. Et nulla consetetur eum.
        </p>
      </b-col>
      <b-col style="text-align:center;" cols="md-4 sm-12">
        <b-img style="height:250px; width:auto;" src="~/assets/page/edu/wsu/cs/383-cloud/sagemaker/setting-up.png" fluid alt="sagemaker-setting-up" />
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
          text: 'Ranking Areas',
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
