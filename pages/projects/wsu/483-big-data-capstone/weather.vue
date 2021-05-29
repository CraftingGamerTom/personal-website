<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Weather</h2>
        <p>
          It became clear in other parts of this project that incident data alone was not enough to correlate current or predict future crime incidents accurately. By bringing more types of data together with the incident data the accuracy should increase. We did not forecast with the weather data but we did at least start preliminary analysis.
        </p>
        <br>
        <h2>
          Table of Contents
        </h2>
        <b-list-group>
          <b-list-group-item>
            <nuxt-link to="#toc-1">
              Setting Up
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-2">
              Precipitation vs. Incident Count
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-3">
              Avg. Temperature vs. Incident Count
            </nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="~/assets/page/edu/wsu/cs/483-big-data-capstone/weather/worcester-snow.jpg" fluid alt="worcester-snow" @click="$parent.$parent.expandImage" />
        <br>
        <cite><a target="_blank" href="https://sunbeamwhdh.files.wordpress.com/2017/02/170209_worcester_snow_2.jpg">Image Source</a>
        </cite>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="12">
        <h2>
          Setting Up
        </h2>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <p>
              To set up the data set the common code was run first. Then an additional set of code was run to prepare the weather data.
            </p>

            <b-button v-b-toggle.collapse-toc-3b class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-3b" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
# ***** IMPORTANT *****
# *
# * Run read-all-crime-data
# *
# ***** IMPORTANT *****

# Then run this

# Examples from https://www.kaggle.com/samgdotson/is-crime-a-function-of-extreme-weather

import datetime as dt
from scipy import stats
from sklearn import preprocessing
from sklearn.model_selection import KFold
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# ----------------------------------------------------------------
# ----- Read in the weather data
# ----------------------------------------------------------------

weatherDataCsvPath = '/media/tcrokicki/MainDrive/workspaces/wsu/wsu-computer-science/CS-483_Big-Data-Analytics-Capstone_2020-Spring/original-datasets/weather/'
weather = pd.read_csv(weatherDataCsvPath + 'worcesterWeatherData.csv',error_bad_lines=False)

weather.info()
weather.head(3)

# Data Cleaning (remove what we dont need)
len(weather['STATION'].unique())
# 1
len(weather['NAME'].unique())
# 1
len(weather['LATITUDE'].unique())
# 1
len(weather['LONGITUDE'].unique())
# 1
len(weather['ELEVATION'].unique())
# 1
# We will remove all of these since they are redundant
del weather['STATION']
del weather['NAME']
del weather['LATITUDE']
del weather['LONGITUDE']
del weather['ELEVATION']

# ----------------------------------------------------------------
# ----- Create dictionary for column attributes
# ----------------------------------------------------------------
from io import StringIO

# Things that may be interesting

# PRCP;Precipitation;
# TMAX;Maximum temperature;
# SNOW;Snowfall;
# WT14;Drizzle;
# WT16;Rain (may include freezing rain, drizzle, and freezing drizzle);
# WT17;Freezing rain;
# WT18;Snow, snow pellets, snow grains, or ice crystals;
# AWND;Average wind speed;
# TAVG;Average Temperature;
# TMIN;Minimum temperature;

colDictionaryString = StringIO("""
COL_CODE;COL_DESC;
WT03;Thunder;
WV01;Fog, ice fog, or freezing fog (may include heavy fog);
WT04;Ice pellets, sleet, snow pellets, or small hail";
PRCP;Precipitation;
WT05;Hail (may include small hail);
WV03;Thunder;
WT06;Glaze or rime;
WT07;Dust, volcanic ash, blowing dust, blowing sand, or blowing obstruction;
WT08;Smoke or haze;
SNWD;Snow depth;
WT09;Blowing or drifting snow;
WDF2;Direction of fastest 2-minute wind;
WDF5;Direction of fastest 5-second wind;
PGTM;Peak gust time;
WT11;High or damaging winds;
TMAX;Maximum temperature;
WT13;Mist;
WSF2;Fastest 2-minute wind speed;
FMTM;Time of fastest mile or fastest 1-minute wind;
WSF5;Fastest 5-second wind speed;
SNOW;Snowfall;
WT14;Drizzle;
WT16;Rain (may include freezing rain, drizzle, and freezing drizzle);
WT17;Freezing rain;
WT18;Snow, snow pellets, snow grains, or ice crystals;
WT19;Unknown source of precipitation;
AWND;Average wind speed;
WT21;Ground fog;
WT22;Ice fog or freezing fog;
WT01;Fog, ice fog, or freezing fog (may include heavy fog);
WESD;Water equivalent of snow on the ground;
WT02;Heavy fog or heaving freezing fog (not always distinguished from fog);
TAVG;Average Temperature;
TMIN;Minimum temperature;
TSUN;Total sunshine for the period;
""")

column_dictionary = pd.read_csv(colDictionaryString, sep =";")
column_dictionary['COL_CODE'] = pd.Categorical(column_dictionary['COL_CODE'])
column_dictionary['COL_DESC'] = pd.Categorical(column_dictionary['COL_DESC'])

weather.DATE = pd.to_datetime(weather.DATE, format='%Y-%m-%d', infer_datetime_format=True)

# --------------------------------------------------
# ----- Read in Crime Types with weighted values
# --------------------------------------------------

# let's read the data using the Pandas read_csv() function

weightedIncidentsString = StringIO("""
INCIDENT_CODE;INCIDENT_DESC;INCIDENT_WEIGHT;
23G;Theft of Motor Vehicle Parts;7;
ZZZ;Non-NIBRS Offense;1;
23H;All Other Thefts;7;
40A;Prostitution;5;
35A;Drug/Narcotic Violations;5;
240;Motor Vehicle Theft;7;
23F;Theft from Motor Vehicle;7;
120;Robbery;7;
290;Destruction/Damage/Vandalism of Property;7;
23D;Theft from Building;7;
13C;Assault - Intimidation;9;
13A;Aggravated Assault;9;
220;Burglary/Breaking & Entering;7;
11D;Forcible Fondling;9;
26C;Impersonation;3;
13B;Simple Assault;9;
23C;Shoplifting;7;
520;Weapon Law Violation;5;
90C;Disorderly Conduct;5;
90Z;All Other Offenses;1;
26E;Wire Fraud;3;
90J;Trespass of Real Property;7;
90D;Driving Under the Influence;5;
90I;Runaway;2;
250;Counterfeiting/Forgery;3;
26B;Credit Card/Automatic Teller Fraud;3;
90G;Liquor Law Violation;3;
35B;Drug Equipment Violations;5;
90F;Family Offenses, Nonviolent;5;
90N;Resisting Arrest;9;
200;Arson;7;
11A;Forcible Rape;9;
36B;Statutory Rape (Nonforcible Sex Offense);2;
11B;Forcible Sodomy;9;
26A;False Pretense/Swindle/Confidence Game;3;
09A;Murder & Nonnegligent Manslaughter;9;
23E;Theft from Coin-operated Machine;7;
280;Stolen Property Offenses;7;
100;Kidnapping/Abduction;9;
270;Embezzlement;3;
90M;Other Agencies (Mental Health);1;
23B;Purse Snatching;9;
370;Pornography/Obscene Material;2;
11C;Sexual Assault with an Object;9;
36A;Incest (Nonforcible Sex Offense);2;
90P;Contributing to the Delinquency of a Minor;2;
23A;Pocket Picking;7;
90E;Drunkenness;5;
210;Extortion/Blackmail;3;
90A;Bad Checks;3;
39C;Gambling Equipment Violations;3;
90L;Truancy;2;
90K;Incorrigible;3;
VOI;VOI (Added during conversion);9;
40B;Assisting or Promoting Prostitution;5;
26F;Identity Theft;3;
720;Animal Cruelty;5;
26G;Hacking/Computer Invasion;3;
39B;Operating/Promoting/Assisting Gambling;3;
64A;Human Trafficking, Commercial Sex Acts;5;
64B;Human Trafficking, Involuntary Servitude;5;
90B;Curfew/Loitering/Vagrancy;2;
26D;Welfare Fraud;3;
Zx;Unknown;1;
""")

weighted_incidents = pd.read_csv(weightedIncidentsString, sep =";")
weighted_incidents['INCIDENT_CODE']              = pd.Categorical(weighted_incidents['INCIDENT_CODE'])
weighted_incidents['INCIDENT_DESC']              = pd.Categorical(weighted_incidents['INCIDENT_DESC'])

# --------------------------------------------------
# ----- Read in Crime Group Types
# --------------------------------------------------
incidentTypeGroupsString = StringIO("""
INCIDENT_TYPE_GROU
# total_crimes = pd.DataFrame()
# total_crimes.index = temp_total_crimes.index
# total_crimes['Incidents'] = temp_total_crimes[0]
# new_df = pd.DataFrame({'index':temp_total_crimes, 'Incidents':temp_total_crimes[0]}, )

# date = pd.date_range(start=start_date, end=end_date)
# new_df = pd.DataFrame({'Date':date, 'Incidents':total_crimes}, )
# new_dfP;INCIDENT_TYPE_WEIGHT;
Violent Incident;9;
Property Incident;7;
Non-Violent Incident;5;
White-Collar Incident;3;
Low-Risk Incident;2;
Other / Unkown Incident;1;
""")

incident_type_groups = pd.read_csv(incidentTypeGroupsString, sep =";")
incident_type_groups['INCIDENT_TYPE_GROUP'] = pd.Categorical(incident_type_groups['INCIDENT_TYPE_GROUP'])

# --------------------------------------------------
# ----- Join group types with the Type weight
# --------------------------------------------------
grouped_crimes = pd.merge(incident_type_groups, weighted_incidents[["INCIDENT_CODE","INCIDENT_WEIGHT"]], left_on="INCIDENT_TYPE_WEIGHT", right_on="INCIDENT_WEIGHT", how="left")

# --------------------------------------------------
# ----- Join incidents on the group types
# --------------------------------------------------
grouped_crimes = pd.merge(crimes, grouped_crimes[["INCIDENT_CODE","INCIDENT_TYPE_GROUP"]], left_on="IBR_TYPE", right_on="INCIDENT_CODE", how="left")

# ----------------------------------------------------------------
# ----- Create datasets from original datasets
# ----------------------------------------------------------------
grouped_crimes['DATE'] = grouped_crimes['ACTUAL_DTE'].dt.date
grouped_crimes['DATE'] = pd.to_datetime(grouped_crimes.DATE, format='%Y-%m-%d', infer_datetime_format=True)

temp_total_crimes = (grouped_crimes.groupby(['DATE', 'INCIDENT_TYPE_GROUP']).count())
# temp_total_crimes = temp_total_crimes.to_frame()
temp_total_crimes['Incidents'] = temp_total_crimes['Year']
temp_total_crimes.drop(temp_total_crimes.columns.difference(['INCIDENT_TYPE_GROUP','Incidents']), 1, inplace=True)
total_crimes = temp_total_crimes

# total_crimes[['INCIDENT_TYPE_GROUP','Incidents']] = pd.DataFrame(total_crimes.values.tolist(), index= total_crimes.index)

count_violent_crimes = (grouped_crimes[grouped_crimes.INCIDENT_TYPE_GROUP == 'Violent Incident'].groupby(['DATE']).count())
count_violent_crimes['Incidents'] = count_violent_crimes['Year']
count_violent_crimes.drop(count_violent_crimes.columns.difference(['Incidents']), 1, inplace=True)

count_property_crimes = (grouped_crimes[grouped_crimes.INCIDENT_TYPE_GROUP == 'Property Incident'].groupby(['DATE']).count())
count_property_crimes['Incidents'] = count_property_crimes['Year']
count_property_crimes.drop(count_property_crimes.columns.difference(['Incidents']), 1, inplace=True)

count_nonViolent_crimes = (grouped_crimes[grouped_crimes.INCIDENT_TYPE_GROUP == 'Non-Violent Incident'].groupby(['DATE']).count())
count_nonViolent_crimes['Incidents'] = count_nonViolent_crimes['Year']
count_nonViolent_crimes.drop(count_nonViolent_crimes.columns.difference(['Incidents']), 1, inplace=True)

count_whiteCollar_crimes = (grouped_crimes[grouped_crimes.INCIDENT_TYPE_GROUP == 'White-Collar Incident'].groupby(['DATE']).count())
count_whiteCollar_crimes['Incidents'] = count_whiteCollar_crimes['Year']
count_whiteCollar_crimes.drop(count_whiteCollar_crimes.columns.difference(['Incidents']), 1, inplace=True)

count_lowRisk_crimes = (grouped_crimes[grouped_crimes.INCIDENT_TYPE_GROUP == 'Low-Risk Incident'].groupby(['DATE']).count())
count_lowRisk_crimes['Incidents'] = count_lowRisk_crimes['Year']
count_lowRisk_crimes.drop(count_lowRisk_crimes.columns.difference(['Incidents']), 1, inplace=True)

count_other_crimes = (grouped_crimes[grouped_crimes.INCIDENT_TYPE_GROUP == 'Other / Unkown Incident'].groupby(['DATE']).count())
count_other_crimes['Incidents'] = count_other_crimes['Year']
count_other_crimes.drop(count_other_crimes.columns.difference(['Incidents']), 1, inplace=True)

temp_avg_weather = weather.groupby(['DATE']).mean()
avg_weather = pd.DataFrame({'Avg. Temp (F)':temp_avg_weather['TAVG'], 'Total Precipitation (in)':temp_avg_weather['PRCP']}, )

# Create merged dataframes per incident type (with weather data)
result_violent = count_violent_crimes.join(avg_weather)
result_property = count_property_crimes.join(avg_weather)
result_nonViolent = count_nonViolent_crimes.join(avg_weather)
result_whiteCollar = count_whiteCollar_crimes.join(avg_weather)
result_lowRisk = count_lowRisk_crimes.join(avg_weather)
result_other = count_other_crimes.join(avg_weather)

# Set column names
# result.columns = ['Incidents', 'Avg. Temp (F)', 'Total Precipitation (in)']

# Remove na values
result_violent = result_violent.dropna()
result_property = result_property.dropna()
result_nonViolent = result_nonViolent.dropna()
result_whiteCollar = result_whiteCollar.dropna()
result_lowRisk = result_lowRisk.dropna()
result_other = result_other.dropna()

# Define function for calculating linear regression line
def createLinearRegression( x_input, y_input ):
    regr = LinearRegression()
    X = pd.DataFrame(x_input)
    y = pd.DataFrame(y_input)
    regr.fit(X,y)
    return X, regr.predict(X);

alpha = 0.25

            </code>
            </pre>
              </b-card>
            </b-collapse>

            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/samgdotson/is-crime-a-function-of-extreme-weather">Is Crime a Function of Extreme Weather?</a>
            </p>
          </b-col>
        </b-row>
        <br>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-2">
      <b-col cols="12">
        <h2>
          Precipitation vs. Incident Count
        </h2>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <p>
              A scatterplot was created to show the number of incidents vs the amount of rain received in a day. This is interesting as you can see, the more rain there is, the less crimes. However, it cannot be ignored that it is possible that this is due to it raining less days than it is not raining. More available data would make it better to predict crime.
            </p>
            <p>
              It is more interesting to group the crimes into different overall types to better understand what crimes happen more when it is raining vs when it is not raining. It was found that overall crimes go down when it rains more. However, violent crimes and White Collar Crimes remain about the same level.
            </p>
            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/samgdotson/is-crime-a-function-of-extreme-weather">Is Crime a Function of Extreme Weather?</a>
            </p>

            <b-button v-b-toggle.collapse-toc-2a class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-2a" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
# Temperature Density Plot
result_violent.plot(x='Avg. Temp (F)', y='Incidents', c='r', label='Violent')
result_property.plot(x='Avg. Temp (F)', y='Incidents', c='g', label='Property')
result_nonViolent.plot(x='Avg. Temp (F)', y='Incidents', c='y', label='Non Violent')
result_whiteCollar.plot(x='Avg. Temp (F)', y='Incidents', c='b', label='White Collar')
result_lowRisk.plot(x='Avg. Temp (F)', y='Incidents', c='c', label='Low Risk')
result_other.plot(x='Avg. Temp (F)', y='Incidents', c='k', label='Other/Unknown')
plt.legend()
plt.title("Avg Temperature vs Incident Count - Density Plot")
plt.xlabel("Incidents")
plt.ylabel("Avg. Temp (F)")
plt.show()

# Total Precipitation vs Incidents
plt.scatter(result_violent['Total Precipitation (in)'], result_violent['Incidents'], alpha=alpha, c='r', label='Violent')
plt.scatter(result_property['Total Precipitation (in)'], result_property['Incidents'], alpha=alpha, c='g', label='Property')
plt.scatter(result_nonViolent['Total Precipitation (in)'], result_nonViolent['Incidents'], alpha=alpha, c='y', label='Non Violent')
plt.scatter(result_whiteCollar['Total Precipitation (in)'], result_whiteCollar['Incidents'], alpha=alpha, c='b', label='White Collar')
plt.scatter(result_lowRisk['Total Precipitation (in)'], result_lowRisk['Incidents'], alpha=alpha, c='c', label='Low Risk')
plt.scatter(result_other['Total Precipitation (in)'], result_other['Incidents'], alpha=alpha, c='k', label='Other/Unknown')
plt.legend()
plt.title("Total Precipitation vs Incident Count")
plt.xlabel("Total Precipitation (in)")
plt.ylabel("Incidents")

X, pred = createLinearRegression(result_violent['Total Precipitation (in)'], result_violent['Incidents'])
plt.plot(X, pred, color='r')
X, pred = createLinearRegression(result_property['Total Precipitation (in)'], result_property['Incidents'])
plt.plot(X, pred, color='g')
X, pred = createLinearRegression(result_nonViolent['Total Precipitation (in)'], result_nonViolent['Incidents'])
plt.plot(X, pred, color='y')
X, pred = createLinearRegression(result_whiteCollar['Total Precipitation (in)'], result_whiteCollar['Incidents'])
plt.plot(X, pred, color='b')
X, pred = createLinearRegression(result_lowRisk['Total Precipitation (in)'], result_lowRisk['Incidents'])
plt.plot(X, pred, color='c')
X, pred = createLinearRegression(result_other['Total Precipitation (in)'], result_other['Incidents'])
plt.plot(X, pred, color='k')

plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/weather/weather-vs-crime-scatterplots_total-rain-incident.png" fluid alt="weather-vs-crime-scatterplots_total-rain-incident" @click="$parent.$parent.expandImage" />
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/weather/weather-vs-crime-scatterplots_precipitation-incident_grouped-linear-regression.png" fluid alt="weather-vs-crime-scatterplots_precipitation-incident_grouped-linear-regression" @click="$parent.$parent.expandImage" />
          </b-col>
        </b-row>
        <br>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-3">
      <b-col cols="12">
        <h2>
          Avg. Temperature vs. Incident Count
        </h2>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <p>
              The first graph shows a density plot for crimes based on the temperature. It may not be the most precise measure of knowing how weather affects the likelihood of a crime as it does not account for the fact that perhaps certain temperatures are more common than others.
            </p>
            <p>
              A scatter plot was created to show how many crimes occur based on the average temperature. Initially this is pretty hard to interpret - check the next plots to understand it more clearly.
            </p>
            <p>
              In the third scatter plot the incidents were color coded based on the overall group they could fit into.
            </p>
            <p>
              Finally in the fourth plot a linear regression line was applied to the plot. This shows that low risk crimes occur about the same amount no matter the average temperature. However, Violent and Property crimes seem to increase as the temperature rises.
            </p>
            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/samgdotson/is-crime-a-function-of-extreme-weather">Is Crime a Function of Extreme Weather?</a>
            </p>

            <b-button v-b-toggle.collapse-toc-3a class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-3a" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
# Temperature vs Incidents
plt.scatter(result_violent['Avg. Temp (F)'], result_violent['Incidents'], alpha=alpha, c='r', label='Violent')
plt.scatter(result_property['Avg. Temp (F)'], result_property['Incidents'], alpha=alpha, c='g', label='Property')
plt.scatter(result_nonViolent['Avg. Temp (F)'], result_nonViolent['Incidents'], alpha=alpha, c='y', label='Non Violent')
plt.scatter(result_whiteCollar['Avg. Temp (F)'], result_whiteCollar['Incidents'], alpha=alpha, c='b', label='White Collar')
plt.scatter(result_lowRisk['Avg. Temp (F)'], result_lowRisk['Incidents'], alpha=alpha, c='c', label='Low Risk')
plt.scatter(result_other['Avg. Temp (F)'], result_other['Incidents'], alpha=alpha, c='k', label='Other/Unknown')
plt.legend()
plt.title("Avg Temperature vs Incident Count")
plt.xlabel("Incidents")
plt.ylabel("Avg. Temp (F)")

X, pred = createLinearRegression(result_violent['Avg. Temp (F)'], result_violent['Incidents'])
plt.plot(X, pred, color='r')
X, pred = createLinearRegression(result_property['Avg. Temp (F)'], result_property['Incidents'])
plt.plot(X, pred, color='g')
X, pred = createLinearRegression(result_nonViolent['Avg. Temp (F)'], result_nonViolent['Incidents'])
plt.plot(X, pred, color='y')
X, pred = createLinearRegression(result_whiteCollar['Avg. Temp (F)'], result_whiteCollar['Incidents'])
plt.plot(X, pred, color='b')
X, pred = createLinearRegression(result_lowRisk['Avg. Temp (F)'], result_lowRisk['Incidents'])
plt.plot(X, pred, color='c')
X, pred = createLinearRegression(result_other['Avg. Temp (F)'], result_other['Incidents'])
plt.plot(X, pred, color='k')

plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/weather/weather-vs-crime-scatterplots_temp-density-plot.png" fluid alt="weather-vs-crime-scatterplots_temp-density-plot" @click="$parent.$parent.expandImage" />
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/weather/weather-vs-crime-scatterplots_temp-incident-1.png" fluid alt="weather-vs-crime-scatterplots_temp-incident-1" @click="$parent.$parent.expandImage" />
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/weather/weather-vs-crime-scatterplots_temp-incident_grouped.png" fluid alt="weather-vs-crime-scatterplots_temp-incident_grouped" @click="$parent.$parent.expandImage" />
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/weather/weather-vs-crime-scatterplots_temp-incident_grouped-linear-regression.png" fluid alt="weather-vs-crime-scatterplots_temp-incident_grouped-linear-regression" @click="$parent.$parent.expandImage" />
          </b-col>
        </b-row>
        <br>
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
        text: 'Weather',
        active: true
      }
    ]
  }
}
</script>
