<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Conclusions</h2>
        <p>
          <span style="font-weight:800;">Statistics</span>
          <ul>
            <li>
              Specified the most dangerous places in Worcester
            </li>
            <li>
              Crime Incidents (reported) are steadily decreasing
            </li>
          </ul>
        </p>
        <span style="font-weight:800;">Forecasting</span>
        <ul>
          <li>
            The forecasting shows that the crime rates will continue to decrease after 2019
          </li>
          <li>
            COVID-19 may play a significant role in how much or how little crime occurs this year
          </li>
        </ul>
        <p>
          <span style="font-weight:800;">Weather</span>
          <ul>
            <li>
              Overall, crime goes down when it rains. White collar crime and Violent Crime are pretty steady no matter the amount of rain.
            </li>
            <li>
              Property Crimes occur more on warm days, Violent Crimes are more prevalent on warm days, and Low Risk crimes occur about the same all the time.
            </li>
          </ul>
        </p>

        <br>

        <h2>Future Work</h2>
        <p>
          <span style="font-weight:800;">Statistics</span>
          <ul>
            <li>
              Crimes by hour visualization for each year to see if time for certain types of crime has changed over time
            </li>
            <li>
              Crimes over time but with grouped incidents to make it easier to read
            </li>
          </ul>
        </p>
        <p>
          <span style="font-weight:800;">Weather</span>
          <ul>
            <li>
              Use weather and crime data to predict future crime and check for accuracy increase vs just incident data
            </li>
            <li>
              Forecast crime based on weather and incidents - hard to do because we would need to know what the weather will be
            </li>
          </ul>
        </p>

        <br>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="https://ihg.scene7.com/is/image/ihg/holiday-inn-express-worcester-4063689404-2x1?wid=940&hei=470&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0" fluid alt="conclusion-image" @click="$parent.$parent.expandImage" />
        <br>
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
        text: 'CS483 - Big Data Capstone',
        to: '/edu/wsu/cs/483-big-data-capstone'
      }, {
        text: 'Conclusions',
        active: true
      }
    ]
  }
}
</script>
