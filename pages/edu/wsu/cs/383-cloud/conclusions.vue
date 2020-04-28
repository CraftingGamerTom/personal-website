<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Conclusions</h2>
        <p>
          <span style="font-weight:800;">Ranking Areas</span>
          <ul>
            <li>
              Task seemed successful. However, using more data to calculate ranks would be ideal. Incorporating weather data, demographics, perhaps family income, population density, and much more would be interesting to see how things correlate.
            </li>
            <li>
              The Visualization made on Tableau was really fun to make.
            </li>
          </ul>
        </p>
        <p>
          <span style="font-weight:800;">Prophet Forecasting</span>
          <ul>
            <li>
              Forecasting Crime Rating had inconclusive results. It is hard to understand how the algorithm came up with the data it did.
            </li>
            <li>
              When forecasting the total crime incidents for a separate project the trend was much more clear and easy to understand.
            </li>
          </ul>
        </p>
        <p>
          <span style="font-weight:800;">Association Rule Algorithm</span>
          <ul>
            <li>
              The Rules that were created do not seem overly useful. They may be more useful if we created many more rules.
            </li>
            <li>
              I interpret this as we really do not have enough variables to properly predict where and when crime will occur. Just part crime is not a great way to measure future crime.
            </li>
          </ul>
        </p>
        <p>
          <span style="font-weight:800;">Mahout Prediction Algorithm</span>
          <ul>
            <li>
              After running the recommender many times, including all the columns, and selecting certain columns to compute a result I had the same tuples results.
            </li>
            <li>
              The way to interpret them is the first column is the year, then inside the brackets are the tuples containing the month and the days which comes as an average as I see(30.714018).
            </li>
            <li>
              The recommender looks for similarity patterns on the data and creates the tuples with that.
            </li>
          </ul>
        </p>

        <br>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="https://ihg.scene7.com/is/image/ihg/holiday-inn-express-worcester-4063689404-2x1?wid=940&hei=470&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0" fluid alt="conclusion-image" @click="$parent.expandImage" />
        <cite><a target="_blank" href="https://www.ihg.com/holidayinnexpress/hotels/us/en/worcester/orhwr/hoteldetail">Image Source</a>
        </cite>
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
          text: 'Conclusions',
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
