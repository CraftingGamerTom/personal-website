<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Forecasting</h2>
        <p>Facebook's Python library, Prophet, was used to predict what the future crime ratings may be - based on the past crime rating. It became clear from the results that perhaps having more types of data would be helpful in making good recommendations.</p>
        <p>Take a look at the Kaggle exercises that was critical to this project: <a target="_blank" href="https://www.kaggle.com/currie32/crimes-in-chicago/kernels">Crimes in Chicago</a> & <a target="_blank" href="https://facebook.github.io/prophet">Prophet</a></p>
        <br>
        <p>
          <a target="_blank" href="/page/edu/wsu/cs/483-big-data-capstone/time-series.html">View Graph</a>
        </p>
        <br>
        <b-button v-b-toggle.collapse-toc1 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              <pre>
install.packages('prophet')
install.packages("highcharter")
library(dplyr)
library(prophet)
library(xts)
library(highcharter)
#loading the dataset
crimes = read.csv("WorcesterData_03_19.csv")
#changing the data format
crimes$ACTUAL_DTE = as.Date(crimes$ACTUAL_DTE, format = "%m/%d/%Y")
by_Date = na.omit(crimes) %>% group_by(ACTUAL_DTE) %>% summarise(Total = n())
tseries = xts(by_Date$Total, order.by=as.POSIXct(by_Date$ACTUAL_DTE))
 df = crimes %>% group_by(ACTUAL_DTE) %>% summarise(y = n()) %>% mutate(y = log(y))
 names(df) = c("ds", "y")
 df$ds = factor(df$ds)
hchart(tseries, name = "Crimes Number") %>%
  hc_add_theme(hc_theme_darkunica()) %>%
  hc_credits(enabled = TRUE, text = "Sources: City of Worcester Administration and the Worcester Police Department", style = list(fontSize = "12px")) %>%
  hc_title(text = "Times Series plot of Worcester Crimes") %>%
  hc_legend(enabled = TRUE)
              </pre>
            </code>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="~/assets/page/edu/wsu/cs/483-big-data-capstone/forecasting/forecasting.png" fluid alt="forecasting" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
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
