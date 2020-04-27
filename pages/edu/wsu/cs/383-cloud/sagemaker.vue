<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>SageMaker</h2>
        <p>Amazon SageMaker is a service that provides many components to make computing and deploying machine learning models quickly and in a distributed fashion. Although we did not need to make use of Spark across a distributed Livy server, it was a great oppertunity to become more familiar with how to use SageMaker.</p>
        <p>Read more about SageMaker <a target="_blank" href="https://aws.amazon.com/sagemaker/">here</a>.</p>
        <br>
        <h2>
          Table of Contents
        </h2>
        <p><a href="#">test</a></p>
        <b-list-group>
          <b-list-group-item>
            <nuxt-link to="#toc-1">
              Setting Up
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-2">
              Using Condas Python Kernal
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-3">
              Saving Data
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
          Setting Up
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
      <b-col cols="md-8 sm-12">
        <h2>
          Setting Up
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
    <b-row id="toc-3">
      <b-col cols="md-8 sm-12">
        <h2>
          Saving Data
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
  scrollToTop: true,
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
          text: 'SageMaker',
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
