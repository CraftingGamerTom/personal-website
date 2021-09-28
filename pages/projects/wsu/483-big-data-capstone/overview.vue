<template>
  <div>
    <b-row align="center">
      <b-col
        class="d-none d-md-block"
        cols="12"
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      >
        <div id="overview-title-card-parent">
          <b-card
            id="overview-title-card"
            overlay
            img-src="~/assets/page/edu/wsu/cs/483-big-data-capstone/overview/worcester.jpg"
            img-alt="worcester-img"
            text-variant="white"
            title="Worcester Crimes Data – Analysis and Predictions"
            title-tag="h1"
            title-text-variant="white"
            sub-title="Thomas Rokicki & Oresti Duro"
            sub-title-tag="h3"
            sub-title-text-variant="white"
            class="text-center"
          >
            <b-card-text>
              Capstone Project
              <br>
              Spring 2020
              <cite><a target="_blank" href="https://www.wbjournal.com/sites/default/files/styles/article_small_cover_image/public/2020-04/img_20200401_124853.jpg?h=c115cddf&itok=C97SaImn">Image Source</a></cite>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
      <b-row style="margin:2.5%;">
        <b-col class="wrapper" cols="lg-6 sm-12">
          <b-row class="d-sm-block d-md-none">
            <b-col cols="12">
              <h1 class="text-center">
                Worcester Crimes Data – Analysis and Predictions
              </h1>
              <h6 class="text-center">
                Oresti Duro & Thomas Rokicki
              </h6>
              <h6 class="text-center">
                Capstone Project
              </h6>
              <h6 class="text-center">
                Spring 2020
              </h6>
              <hr>
            </b-col>
          </b-row>
          <b-row>
            <h1>Abstract</h1>
            <p>The intent of this project is to understand a Worcester crime data set. Questions prompting this project: What are the most dangerous neighborhoods in Worcester? What week days and time of the day have the highest crime rates? Does a crime type depend of a geographical location? The project involves visualization and statistical analysis of the dataset. The use of heat maps serves a great role in understanding the most dangerous locations within the city. Facebook's Forecasting package, Prophet, as well as other R packages are being used for the visualization and statistical analysis. This project had a stretch goal to predict where a crime may occur in the future. We are using a variety of Data Mining algorithms to construct an effective prediction model. This would help the police move towards a proactive approach for policing rather than reactive approach. This can help us better understand how to make our city safer.</p>
            <p>
              For more information about this data set, or to view the data visit <nuxt-link to="/projects/wsu/383-cloud/overview">
                Cloud Project
              </nuxt-link>.
            </p>
          </b-row>
          <b-row>
            <h1>Goals</h1>
            <ul>
              <li>Better understand Worcester's Incident rate and locations</li>
              <li>Determine what areas are more dangerous than others</li>
              <li>Create graphs to visualize statistics for the data set</li>
              <li>Implement Facebook's Prophet Forecasting library (written in R) to predict crime rates</li>
              <li>Apply data Mining algorithms learned in class</li>
            </ul>
          </b-row>
          <b-row>
            <h1>Milestones</h1>
            <ul>
              <li>Generate statistics for the data set</li>
              <ul>
                <li>Calculate interesting statistics for Worcester</li>
                <li>Visualize statistics</li>
              </ul>
              <li>Create time series maps of crime incidents</li>
              <ul>
                <li>Use Python to create maps</li>
                <li>Try out Tableau as a quick way to create advanced models</li>
              </ul>
              <li>Determine if weather affects crime rates</li>
              <ul>
                <li>Obtain weather data for Worcester</li>
                <li>Merge time series data - incidents and weather</li>
                <li>Determine correlation between rain and incidents</li>
                <li>Determine correlation between average temperature and incidents</li>
              </ul>
              <li>Predict future crime rates</li>
              <ul>
                <li>Use Facebook's Prophet library to predict and visualize future crimes</li>
              </ul>
              <li>Create a website to share our findings with the world</li>
              <ul>
                <li>Use Git to share the code with the group and consolidate results</li>
                <li>Learn about and implement Nuxt / Vue application</li>
                <li>Write website content and include visualizations</li>
              </ul>
            </ul>
          </b-row>
          <b-row>
            <h1>Stretch Goals</h1>
            <ul>
              <li>Apply clustering or classification machine learning</li>
              <li>Predict where incidents will occur based on collected incident and weather history</li>
            </ul>
          </b-row>
        </b-col>
        <b-col class="wrapper" cols="lg-5 offset-lg-1 sm-12">
          <h1>The Dataset</h1>
          <b-img
            class="body-image"
            style="margin-bottom:25px;"
            src="~/assets/page/edu/wsu/cs/483-big-data-capstone/overview/overview-dataset.png"
            fluid
            alt="overview-dataset"
            @click="$parent.$parent.expandImage"
          />
          <h4>Information</h4>
          <p>
            <strong>Entries:</strong> 231999<br>
            <strong>Dates:</strong> <code>2003-01-08 08:37:00</code> to <code>2019-10-28 21:00:00</code><br>
            <strong>Size:</strong> 15.9 MB <br>
          </p>
          <h4>Attributes</h4>
          <p>
            Year <br>
            P_INCID_NO <br>
            ACTUAL_DTE <br>
            PRIMARY_STREET_NUM <br>
            PRIMARY_STREET_NAME <br>
            PRIMARY_CITY <br>
            PRIMARY_STATE_CD <br>
            PRIMARY_ZIP_CD <br>
            PRIMARY_ADDR_NO <br>
            LATITUDE <br>
            LONGITUDE <br>
            IBR_TYPE <br>
            IBR_TYPE_DESC <br>
          </p>
          <br>
          <h4>Frame to Google Sheet data</h4>
          <p>You may view the raw data below, or view it on <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSIkma8W0Nx6TKaNSIewGAzFxZnW5YT9PbkGkbvYfB66EsRJdehteDCyCRKkBNqGDMywG9qfmnuuIWx/pubhtml" target="_blank">Google Sheets</a>.</p>
          <b-alert variant="warning" show>
            <span style="font-weight:800">WARNING:</span> There is a lot of data. Make sure you are on wifi - this may be slow to load
          </b-alert>
          <b-col cols="12">
            <b-row v-if="!showDataFrame">
              <button @click="showDataFrame = !showDataFrame">
                Show Data
              </button>
            </b-row>
            <b-row v-if="showDataFrame">
              <button @click="showDataFrame = !showDataFrame">
                Hide Data
              </button>
              <iframe style="width:100%;height:80vh;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSIkma8W0Nx6TKaNSIewGAzFxZnW5YT9PbkGkbvYfB66EsRJdehteDCyCRKkBNqGDMywG9qfmnuuIWx/pubhtml?widget=true&amp;headers=false" />
            </b-row>
          </b-col>
        </b-col>
      </b-row>
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
  head () {
    return {
      script: [

      ]
    }
  },
  methods: {
    runFitText () {
      // window.$('#overview-title-card h1').fitText()
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
        text: 'CS483 - Big Data Capstone',
        to: '/projects/wsu/483-big-data-capstone'
      }, {
        text: 'Overview',
        active: true
      }
    ]
  }
}
</script>

<style scoped>
ul {
  width: 100%; /* fix overlap */
}
ul ul li {
  font-size: 0.75rem;
}
</style>

<style lang="css">
  #overview-title-card-parent {
    overflow: hidden;
    box-shadow: 0px 0px 15px #000;
  }
  #overview-title-card .card-body {
    background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    )
  }
    #overview-title-card .card-body h1, #overview-title-card .card-body h3, #overview-title-card .card-body p{
    text-shadow: 2px 2px 4px #000000;
  }
  #overview-title-card cite {
    position: absolute;
    bottom: 0px;
    right: 5px;
    font-size: 0.75rem;
  }

  .wrapper {
    text-align: left;
    padding-left:1%;
    padding-right:1%;
  }

</style>
