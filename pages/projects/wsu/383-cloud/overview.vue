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
            img-src="~/assets/page/edu/wsu/cs/383-cloud/overview/worcester.jpg"
            img-alt="worcester-img"
            text-variant="white"
            title="Analysing Worcester Crime Data using Amazon Web Services"
            title-tag="h1"
            title-text-variant="white"
            sub-title="Thomas Rokicki & Oresti Duro"
            sub-title-tag="h3"
            sub-title-text-variant="white"
            class="text-center"
          >
            <b-card-text>
              Cloud Final Project
              <br>
              Spring 2020
              <cite><a target="_blank" href="https://images.squarespace-cdn.com/content/v1/599045bb59cc681bb44b2672/1570913578388-J5RODIH4HM8PM1OJTWFD/ke17ZwdGBToddI8pDm48kPipPbz1MywG1-PB7aWaKvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcTaqKnC3B9BACTsC_CqadS_ucBwEFLvfhNErqSvMfRgEejIks295oVN--9IliyEWp/worcester-ma-public-insurance-adjusters-massachusetts.jpg?format=2500w">Image Source</a></cite>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
      <b-row style="margin:2.5%;">
        <b-col class="wrapper" cols="lg-6 sm-12">
          <b-row class="d-sm-block d-md-none">
            <b-col cols="12">
              <h1 class="text-center">
                Analyzing Worcester Crime Data using Amazon Web Services
              </h1>
              <h6 class="text-center">
                Oresti Duro & Thomas Rokicki
              </h6>
              <h6 class="text-center">
                Cloud Final Project
              </h6>
              <h6 class="text-center">
                Spring 2020
              </h6>
              <hr>
            </b-col>
          </b-row>
          <b-row>
            <h1>Abstract</h1>
            <p>Datasets of all Worcester crime incident records from 2003 to 2019 were obtained from Worcester City Hall. The goal of this project was to practice using tools on AWS, machine learning using python, and to predict how crimes rates may trend in the future. Python packages, such as Facebook's Prophet package, will be used to predict and visualize these trends of the future.</p>
            <p>
              For more information about this dataset see <nuxt-link to="/projects/wsu/483-big-data-capstone/overview">
                Worcester Crimes Data – Analysis and Predictions
              </nuxt-link> a project for a big data capstone assignment.
            </p>
          </b-row>
          <b-row>
            <h1>Goals</h1>
            <ul>
              <li>Become more familiar with SageMaker, import data from S3 and export results to S3</li>
              <li>Rank areas of Worcester by how dangerous they are over time</li>
              <li>Apply Association Mining to the Ranked Data to predict future dangerous areas</li>
              <li>Make a prediction and forecasting of how will the crimes be in the near future using the Prophet library in Python then visualize</li>
              <li>Stretch Goal: Based on the ranked crime areas find the safest route from one place to another</li>
              <li>Stretch Goal: Do ML using mahout to practice using Hadoop</li>
            </ul>
          </b-row>
          <b-row>
            <h1>Milestones</h1>
            <ul>
              <li>Become more familiar with SageMaker, import data from S3 and export results to S3</li>
              <ul>
                <li>Load Data from S3 or import Git Repository to access saved CSV files</li>
                <li>Write and Run Python code to run on SageMaker</li>
                <li>Export the data to S3</li>
              </ul>
              <li>Rank areas of Worcester by how dangerous they are over time</li>
              <ul>
                <li>Group areas of the city into bins (by latitude / longitude & time)</li>
                <li>Apply weights to each crime type to better represent danger</li>
                <li>Scale each sum of weighted incidents from 0 to 1 to normalize the crime rates over time</li>
              </ul>
              <li>Apply Association Mining to the Ranked Data to predict future dangerous areas</li>
              <ul>
                <li>Using the Ranked Data now stored in S3, apply Association Mining and report Accuracy</li>
              </ul>
              <li>Prophet Forecasting and Visualization</li>
              <ul>
                <li>Implement Forecasting for our data</li>
                <li>Plot the data and the forecast to a time series graph</li>
              </ul>
            </ul>
          </b-row>
          <b-row>
            <h1>Stretch Goals</h1>
            <ul>
              <li>Determine least dangerous path to travel based on a starting and ending location</li>
              <li>Run Cluster or Association Rule Mining algorithm with our data using Hadoop</li>
              <li>Practice using Mahout for Machine Learning</li>
            </ul>

            <h1>Group Size Justification</h1>
            <p>A group of 2 is necessary as a means to do more with this real dataset from our home city. The goal is to analyze, clean, and transform the data into other useful information. Additionally, the hope is to have more practice with machine learning (association mining) and produce visualizations. All of this will be performed on AWS, which is unfamiliar territory requiring additional research.</p>
          </b-row>
        </b-col>
        <b-col class="wrapper" cols="lg-5 offset-lg-1 sm-12">
          <h1>The Dataset</h1>
          <b-img
            class="body-image"
            style="margin-bottom:25px;"
            src="~/assets/page/edu/wsu/cs/383-cloud/overview/overview-dataset.png"
            fluid
            alt="overview-dataset"
            @click="$parent.$parent.expandImage"
          />
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
        text: 'CS383 - Cloud, Parallel & Distributed Computing',
        to: '/projects/wsu/383-cloud'
      }, {
        text: 'Overview',
        active: true
      }
    ]
  }
}
</script>

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
