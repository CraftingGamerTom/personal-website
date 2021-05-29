<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Interactive Graphs</h2>
        <p>
          To add a special touch and enable users to find their own conclusions using Worcester's Crime data multiple interactive graphs were created. For a better user experience these graphs open up in a different tab. Follow any of the links below to view the interactive graphs.
        </p>
        <br>
      </b-col>
      <b-col cols="md-6 sm-12" />
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-6 sm-12">
        <h2>
          Crime Type Bargraph
        </h2>
        <p>
          This bar graph depicts the number of each crime type using all data from 2003 to 2019. We can expect the ratio of incident count to incident type to remain pretty constant - as it has over many years.
        </p>
        <p>
          <a target="_blank" href="/page/edu/wsu/cs/483-big-data-capstone/crime-type-bargraph.html">View Graph</a>
        </p>
        <b-button v-b-toggle.collapse-toc-1a class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc-1a" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              <pre>
## By Primary Type
by_type = crimes %>% group_by(IBR_TYPE_DESC) %>% summarise(Total = n()) %>% arrange(desc(Total))

##Crime types
hchart(by_type, "column", hcaes(IBR_TYPE_DESC, y = Total, color = Total)) %>%
  hc_colorAxis(stops = color_stops(n = 10, colors = c("#440154", "#21908C", "#FDE725"))) %>%
  hc_add_theme(hc_theme_darkunica()) %>%
  hc_title(text = "Crime Types") %>%
  hc_credits(enabled = TRUE, text = " Sources: City of Worcester Administration and the Worcester Police Department ", style = list(fontSize = "12px")) %>%
  hc_legend(enabled = FALSE)
              </pre>
            </code>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/interactive-maps/crime-type-bargraph.png" fluid alt="crime-type-bargraph" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-6 sm-12">
        <h2>
          Locations with the Most Crimes
        </h2>
        <p>
          The streets with the most crimes are Main Street, Lincoln Street, and Park Ave. From this data we may infer these areas are the least safe, perhaps we need more data. Taking a set away from the dataset being utilized: Many of these areas are typically safe from experience. What makes these roads stand out so much is how long they are and the population density. It may be more precise to divide up the city into blocks and find the most dangerous areas. For more information on this check out <nuxt-link to="http://localhost:3000/edu/wsu/cs/383-cloud/ranking-areas">
            Ranked Data
          </nuxt-link> from our Cloud Project.
        </p>
        <p>
          <a target="_blank" href="/page/edu/wsu/cs/483-big-data-capstone/locations-with-most-crimes.html">View Graph</a>
        </p>
        <b-button v-b-toggle.collapse-toc-2a class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc-2a" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              <pre>
#Locations with most crimes
hchart(by_location[1:20,], "column", hcaes(x = PRIMARY_STREET_NAME, y = Total, color = Total)) %>%
  hc_colorAxis(stops = color_stops(n = 10, colors = c("#440154", "#21908C", "#FDE725"))) %>%
  hc_add_theme(hc_theme_darkunica()) %>%
  hc_title(text = "Locations with most Crimes - Top 20") %>%
  hc_credits(enabled = TRUE, text = "Sources: City of Worcester Administration and the Worcester Police Department", style = list(fontSize = "12px")) %>%
  hc_legend(enabled = FALSE)
              </pre>
            </code>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/interactive-maps/locations-with-the-most-crimes.png" fluid alt="locations-with-the-most-crimes" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-6 sm-12">
        <h2>
          Top 4 Crimes
        </h2>
        <p>
          An additional interactive graph was created to show the top 4 crimes over time. This graph is fun because the range is modifiable - check it out via the link below. It also shoes that even the top crimes are decreasing in number over time. Less incidents are occurring (or at least being reported) every year - which is awesome.
        </p>
        <p>
          <a target="_blank" href="/page/edu/wsu/cs/483-big-data-capstone/top-4-crimes.html">View Graph</a>
        </p>
        <b-button v-b-toggle.collapse-toc-3a class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc-3a" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              <pre>
##Crime types
hchart(by_type, "column", hcaes(IBR_TYPE_DESC, y = Total, color = Total)) %>%
  hc_colorAxis(stops = color_stops(n = 10, colors = c("#440154", "#21908C", "#FDE725"))) %>%
  hc_add_theme(hc_theme_darkunica()) %>%
  hc_title(text = "Crime Types") %>%
  hc_credits(enabled = TRUE, text = " Sources: City of Worcester Administration and the Worcester Police Department ", style = list(fontSize = "12px")) %>%
  hc_legend(enabled = FALSE)

##top crimes time series

damage = crimes[crimes$IBR_TYPE_DESC=="Destruction/Damage/Vandalism of Property",]
## Creating timeseries
damage_by_Date = na.omit(damage) %>% group_by(ACTUAL_DTE) %>% summarise(Total = n())
damage_tseries = xts(damage_by_Date$Total, order.by=as.POSIXct(damage_by_Date$ACTUAL_DTE))

assault = crimes[crimes$IBR_TYPE_DESC =="Simple Assault",]
## Creating timeseries
assault_by_Date = na.omit(assault) %>% group_by(ACTUAL_DTE) %>% summarise(Total = n())
assault_tseries = xts(assault_by_Date$Total, order.by=as.POSIXct(assault_by_Date$ACTUAL_DTE))

burglary = crimes[crimes$IBR_TYPE_DESC =="Burglary/Breaking & Entering",]
## Creating timeseries
burglary_by_Date = na.omit(burglary) %>% group_by(ACTUAL_DTE) %>% summarise(Total = n())
burglary_tseries = xts(burglary_by_Date$Total, order.by=as.POSIXct(burglary_by_Date$ACTUAL_DTE))

other = crimes[crimes$IBR_TYPE_DESC =="All Other Thefts",]
## Creating timeseries
other_by_Date = na.omit(other) %>% group_by(ACTUAL_DTE) %>% summarise(Total = n())
other_tseries = xts(other_by_Date$Total, order.by=as.POSIXct(other_by_Date$ACTUAL_DTE))

hchart(damage_tseries, name = "Destruction/Damage/Vandalism of Property") %>%
  hc_add_series(assault_tseries, name = "Simple Assault") %>%
  hc_add_series(burglary_tseries, name = "Burglary/Breaking & Entering") %>%
  hc_add_series(other_tseries, name = "All Other Thefts") %>%
  hc_add_theme(hc_theme_darkunica()) %>%
  hc_credits(enabled = TRUE, text = "Sources: City of Worcester Administration and the Worcester Police Department", style = list(fontSize = "12px")) %>%
  hc_title(text = "Crimes in (Destruction/Damage/Vandalism of Property)/ Simple Assault/(Burglary/Breaking & Entering )/ All Other Thefts ") %>%
  hc_legend(enabled = TRUE)
              </pre>
            </code>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/interactive-maps/top-4-crimes.png" fluid alt="top-4-crimes" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Time Series</h2>
        <p>A Time Series graph of all crimes across all the years.</p>
        <br>
        <p>
          <a target="_blank" href="/page/edu/wsu/cs/483-big-data-capstone/time-series.html">View Graph</a>
        </p>
        <br>
        <b-button v-b-toggle.collapse-toc-4a class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc-4a" class="mt-2">
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
        <b-img src="~/assets/page/edu/wsu/cs/483-big-data-capstone/interactive-maps/time-series.png" fluid alt="time-series" @click="$parent.$parent.expandImage" />
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
        text: 'Projects',
        to: '/projects'
      }, {
        text: 'Worcester State University',
        to: '/projects/wsu'
      }, {
        text: 'CS483 - Big Data Capstone',
        to: '/projects/wsu/483-big-data-capstone'
      }, {
        text: 'Interactive Graphs',
        active: true
      }
    ]
  }
}
</script>
