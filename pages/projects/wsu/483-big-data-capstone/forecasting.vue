<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Forecasting</h2>
        <p>Facebook's Python library, Prophet, was used to predict what the future crime ratings may be - based on the past crime rating. It became clear from the results that perhaps having more types of data would be helpful in making good recommendations.</p>
        <p>Take a look at the Kaggle exercises that was critical to this project: <a target="_blank" href="https://www.kaggle.com/currie32/crimes-in-chicago/kernels">Crimes in Chicago</a> & <a target="_blank" href="https://facebook.github.io/prophet">Prophet</a></p>
        <br>
        <b-button v-b-toggle.collapse-toc1 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              <pre>
m = prophet(df)
future = make_future_dataframe(m, periods = 365 * 4)
head(future)
tail(future)
forecast = predict(m, future)
tail(forecast[c('ds', 'yhat', 'yhat_lower', 'yhat_upper')])
plot(m, forecast)
prophet_plot_components(m, forecast)
              </pre>
            </code>
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols="md-6 sm-12">
        <b-img src="~/assets/page/edu/wsu/cs/483-big-data-capstone/forecasting/forecasting1.jpg" fluid alt="forecasting" @click="$parent.$parent.expandImage" />
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="~/assets/page/edu/wsu/cs/483-big-data-capstone/forecasting/forecasting2.jpg" fluid alt="forecasting" @click="$parent.$parent.expandImage" />
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
