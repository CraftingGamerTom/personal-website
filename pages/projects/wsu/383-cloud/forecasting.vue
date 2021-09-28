<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Forecasting</h2>
        <p>Facebook's Python library, Prophet, was used to predict what the future crime ratings may be - based on the past crime rating. It became clear from the results that perhaps having more types of data would be helpful in making good recommendations.</p>
        <p>Take a look at the Kaggle exercises that was critical to this project: <a target="_blank" href="https://www.kaggle.com/currie32/crimes-in-chicago/kernels">Crimes in Chicago</a> & <a target="_blank" href="https://facebook.github.io/prophet">Prophet</a></p>
        <br>
        <!-- <h2>
          Table of Contents
        </h2>
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
        </b-list-group> -->
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-12.png" fluid alt="sagemaker-image" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-1.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-2.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-7.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-13.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-3.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-4.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-5.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-6.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-8.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-10.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-9.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/forecasting/prophet-11.png" fluid alt="sagemaker-setting-up" @click="$parent.$parent.expandImage" />
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
        text: 'Projects',
        to: '/projects'
      }, {
        text: 'Worcester State University',
        to: '/projects/wsu'
      }, {
        text: 'CS383 - Cloud, Parallel & Distributed Computing',
        to: '/projects/wsu/383-cloud'
      }, {
        text: 'Forecasting',
        active: true
      }
    ]
  }
}
</script>

<style scoped>
.body-image {
  margin-bottom:50px!important;
}
</style>
