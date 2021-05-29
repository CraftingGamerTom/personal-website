<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Statistics</h2>
        <p>The bulk of the project was analyzing the incident data requested from the Worcester Resource Office. There are many metrics computed here. Visualizations were used to better support the statistics.</p>
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
              General Statistics
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-3">
              General Statistical Visualizations
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-4">
              Incidents Over Time
            </nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/top-10-streets-for-crime.png" fluid alt="top-10-streets-for-crime" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="12">
        <h2>
          Setting Up
        </h2>
        <p>
          Simply run the <nuxt-link to="/projects/wsu/483-big-data-capstone/common-code">
            Common Code
          </nuxt-link>.
        </p>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-2">
      <b-col cols="md-6 sm-12">
        <h2>
          General Statistics
        </h2>
        <br>
        <h4>Top 10 Streets for Crime</h4>
        <p>
          The streets with the most crimes we queried across all 16 years (2003 -> 2019). Main Street has the most, this may not be surprising as it is a long street, downtown. The problem with this statistic is that it does not accommodate population density or sections of the city vs the street name.
        </p><p>
          Check out our <nuxt-link to="/projects/wsu/383-cloud/overview">
            Cloud Project
          </nuxt-link> to see how we binned areas, grouped crime types, weighted them, then ranked areas by how dangerous they are in a time series.
        </p>
        <br>

        <h4>Top 10 Crime Types</h4>
        <p>Each crime type was counted, sorted by value, and the top 10 were pulled. This is a more interesting statistic and shows what crimes are most common across all of the years. However, it would be much more interesting to see this on a per-year basis. This kind of statistic is best represented as a visualization - which is provided below.</p>
        <br>

        <h4>Top 10 Addresses for Crime</h4>
        <p>Top three places for crime in Worcester are Walmart, the Greendale Mall, and Shaws (across all years). It would once again be more interesting to see how this changes over time. For example, the Greendale Mall is now closed - crime incidents likely have decreased at that location over time.</p>
        <br>

        <b-button v-b-toggle.collapse-toc2 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc2" class="mt-2">
          <b-card class="codeblock">
            <pre>
            <code class="card-text">
crimes = crimes.dropna()
df = crimes.drop(columns=['Unnamed: 0', 'P_INCID_NO', 'IBR_TYPE'], axis = 1)

# Print Locations
pd.value_counts(df['PRIMARY_STREET_NAME'])[:10]

# Print Types
pd.value_counts(df['IBR_TYPE_DESC'])[:10]

# Print Top 10 Addresses for Crime
pd.value_counts(df['PRIMARY_STREET_NUM'].astype(str) + ' ' + df['PRIMARY_STREET_NAME'].astype(str))[:10]

            </code>
            </pre>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="" cols="md-6 sm-12">
        <b-card class="codeblock">
          <pre>
            <code class="card-text">
# ----- TOP 10 STREETS FOR CRIME -----
MAIN ST          14693
LINCOLN ST        5724
PARK AV           5513
GRAFTON ST        4698
CHANDLER ST       4140
PLEASANT ST       4008
CAMBRIDGE ST      2439
MILLBURY ST       2434
W BOYLSTON ST     2413
BELMONT ST        2195
Name: PRIMARY_STREET_NAME, dtype: int64

# ----- TOP 10 CRIME TYPES -----
Destruction/Damage/Vandalism of Property    29054
Burglary/Breaking & Entering                24534
Simple Assault                              22084
All Other Thefts                            20231
Theft from Motor Vehicle                    18652
Aggravated Assault                          12645
Motor Vehicle Theft                         11036
Shoplifting                                 10147
Drug/Narcotic Violations                     9077
Assault - Intimidation                       8714
Name: IBR_TYPE_DESC, dtype: int64

# ----- TOP 10 ADDRESSES FOR CRIME -----
25 TOBIAS BOLAND WAY    1831
7 NEPONSET ST           1308
68 STAFFORD ST          1215
529 LINCOLN ST           984
50 CAMBRIDGE ST          636
455 MAIN ST              610
9 LINCOLN SQ             550
541 LINCOLN ST           542
701 MAIN ST              527
2 WASHINGTON SQ          502
dtype: int64
            </code>
            </pre>
        </b-card>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-3">
      <b-col cols="12">
        <h2>
          General Statistical Visualizations
        </h2>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <h4>Summary Visualizations</h4>
            <p>
              First the null values were found and visualized. This helped identify where there were errors in the dataset. In most cases NA values were either removed or ignored for statistics and visualizations.
            </p>
            <p>
              The number of crimes by type was also visualized. This is across all years we had data for. It would be more interesting if it were broken down by year.
            </p>
            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/uds5501/chicago-crime-mapping">Chicago Crime Mapping</a>
              <br>
              <a target="_blank" href="https://www.kaggle.com/coeyoner/chicago-crime-visualization">Chicago Crime Visualizations</a>
            </p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/view-null-values.png" fluid alt="view-null-values" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc3a class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc3a" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
plt.figure(figsize=(10,7))
sns.heatmap(crimes.isnull(), cbar = False, cmap = 'viridis').set_title("Null Values Visualized")
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crime-type-barplot.png" fluid alt="crime-type-barplot" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc3b class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc3b" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
df = crimes
df = df.dropna(); ## drop rows with missing data

#x = df.sample(30000) ##sampling a part of the dataset
#x['IBR_TYPE_DESC'].value_counts().plot.bar()

df['IBR_TYPE_DESC'].value_counts().plot.bar()

plt.title("Crimes")
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
            <h4>Correlation Heatmaps</h4>
            <p>
              A heatmap to represent correlation between each value type of the dataset was also created. It became clear that there is not a lot of strongly correlated fields - perhaps more types of data could highlight some ways crimes are related - like weather maybe.
            </p>
            <p>
              First heat map is for the main data set. The second was run against the ranked areas data set - see the <nuxt-link to="/projects/wsu/383-cloud/overview">
                Cloud Project
              </nuxt-link> for more details.
            </p><p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/coeyoner/chicago-crime-visualization">Chicago Crime Visualizations</a>
            </p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/heatmap-of-correlations.png" fluid alt="heatmap-of-correlations" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc3c class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc3c" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
df = crimes

def heatMap(df):
    #Create Correlation df
    corr = df.corr()
    #Plot figsize
    fig, ax = plt.subplots(figsize=(10, 10))
    #Generate Color Map, red & blue
    colormap = sns.diverging_palette(220, 10, as_cmap=True)
    #Generate Heat Map, allow annotations and place floats in map
    sns.heatmap(corr, cmap=colormap, annot=True, fmt=".2f")
    #Apply xticks
    plt.xticks(range(len(corr.columns)), corr.columns);
    #Apply yticks
    plt.yticks(range(len(corr.columns)), corr.columns)
    #show plot
    plt.show()

df = df.dropna(); ## drop rows with missing data

#x = df.sample(30000) ##sampling a part of the dataset
#heatMap(x) ## correlation between variables

heatMap(df) ## correlation between variables
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/heatmap-of-ranked-correlations.png" fluid alt="heatmap-of-ranked-correlations" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc3d class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc3d" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
df = dailyRankedCrimes

def heatMap(df):
    #Create Correlation df
    corr = df.corr()
    #Plot figsize
    fig, ax = plt.subplots(figsize=(10, 10))
    #Generate Color Map, red & blue
    colormap = sns.diverging_palette(220, 10, as_cmap=True)
    #Generate Heat Map, allow annotations and place floats in map
    sns.heatmap(corr, cmap=colormap, annot=True, fmt=".2f")
    #Apply xticks
    plt.xticks(range(len(corr.columns)), corr.columns);
    #Apply yticks
    plt.yticks(range(len(corr.columns)), corr.columns)
    #show plot
    plt.show()

df = df.dropna(); ## drop rows with missing data

#x = df.sample(30000) ##sampling a part of the dataset
#heatMap(x) ## correlation between variables

heatMap(df) ## correlation between variables
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
        </b-row>
        <br>
      </b-col>
    </b-row>
    <hr>

    <b-row id="toc-4">
      <b-col cols="12">
        <h2>
          Incidents Over Time (Time Series Type Statistics)
        </h2>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <h4>Time Series</h4>
            <p>
              Crime Incidents were visualized over time. These visualizations make it clear that crime overall has steadily decreased in Worcester over time. The first graph summarized the crimes by month and then were plotted, while the second graph is a rolling sum per day.
            </p>
            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/skeftical/chicago-crimes-eda-spatio-temporal">Chicago Crimes EDA Spatio/Temporal</a>
              <br>
              <a target="_blank" href="https://www.kaggle.com/djonafegnem/chicago-crime-data-analysis">Chicago Crime Data Analysis</a>
            </p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-per-month.png" fluid alt="crimes-per-month" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc4a class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc4a" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
plt.figure(figsize=(11,5))
crimes.resample('M').size().plot(legend=False)
plt.title('Number of crimes per month')
plt.xlabel('Months')
plt.ylabel('Number of crimes')
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/rolling-sum-of-crimes.png" fluid alt="rolling-sum-of-crimes" @click="$parent.$parent.expandImage" />
            <b-button v-b-toggle.collapse-toc4b class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc4b" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
plt.figure(figsize=(11,4))
crimes.resample('D').size().rolling(365).sum().plot()
plt.title('Rolling Sum of All Crimes')
plt.ylabel('Number of Crimes')
plt.xlabel('Days')
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
            <h4>Crimes By Hour</h4>
            <p>
              Knowing what time of day certain types of crimes occur is a great step towards understanding what to expect in the future. The first visualization is grouped by every incident type over a 24 hour period - for all years involved. It once again, may be interesting to see if this changes over time - this project did not include that kind of visualization.
            </p>
            <p>
              The second visualization shows the same data but with crimes placed into groups to make the visualization more readable - however, it is less precise.
            </p>
            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/txp142130/utd-crimes-in-chicago-with-choropleth-map">[UTD] Crimes in Chicago with Choropleth Map</a>
            </p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/all-crimes-by-hour.png" fluid alt="all-crimes-by-hour" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc4c class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc4c" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
df_crime = crimes

df_crime.groupby([df_crime['ACTUAL_DTE'].dt.hour,'IBR_TYPE_DESC',])['P_INCID_NO'].count().unstack().plot(marker='o')
plt.ylabel('Number of Crimes')
plt.xlabel('Hours of the day')
plt.xticks(np.arange(24))
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/all-grouped-crimes-by-hour.png" fluid alt="all-grouped-crimes-by-hour" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc4d class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc4d" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
df_crime = crimes

# --------------------------------------------------
# ----- Read in Crime Types with weighted values
# --------------------------------------------------

# let's read the data using the Pandas read_csv() function
from io import StringIO

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
INCIDENT_TYPE_GROUP;INCIDENT_TYPE_WEIGHT;
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

# --------------------------------------------------
# ----- Display Grouped Crimes by Hour
# --------------------------------------------------
grouped_crimes.groupby([grouped_crimes['ACTUAL_DTE'].dt.hour,'INCIDENT_TYPE_GROUP',])['P_INCID_NO'].count().unstack().plot(marker='o')
plt.ylabel('Number of Crimes')
plt.xlabel('Hours of the day')
plt.xticks(np.arange(24))
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
            <h4>Crimes Over Time</h4>
            <p>
              Visualizations were also created to show the breakdown of incident types over each year. This visualization is interesting because it has precision down to the day. However, because there are so many types it is hard to read these. This project does not included a grouped version of this data - it has been included in the future work section.
            </p>
            <p>
              First graph shows the data by incident description, the second by incident type. It is the same data but different levels of readability / clarity.
            </p>
            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/skeftical/chicago-crimes-eda-spatio-temporal">Chicago Crimes EDA Spatio/Temporal</a>
            </p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crime-over-time-by-type-description.png" fluid alt="crime-over-time-by-type-description" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4e class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4e" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
# This is very resource intensive to run
crimes_count_date = crimes.pivot_table('P_INCID_NO', aggfunc=np.size, columns='IBR_TYPE_DESC', index=crimes.index, fill_value=0)
crimes_count_date.index = pd.DatetimeIndex(crimes_count_date.index)
plo = crimes_count_date.rolling(365).sum().plot(figsize=(12, 30), subplots=True, layout=(-1, 3), sharex=False, sharey=False)

plt.figure(figsize=(11,4))
crimes_count_date.resample('D').size().rolling(365).sum().plot()
plt.title('Rolling sum of all crimes from 2007 - 2018')
plt.ylabel('Number of crimes')
plt.xlabel('Days')
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crime-over-time-by-type.png" fluid alt="crime-over-time-by-type" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4f class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4f" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
# This is very resource intensive to run
crimes_count_date = crimes.pivot_table('P_INCID_NO', aggfunc=np.size, columns='IBR_TYPE', index=crimes.index, fill_value=0)
crimes_count_date.index = pd.DatetimeIndex(crimes_count_date.index)
plo = crimes_count_date.rolling(365).sum().plot(figsize=(12, 30), subplots=True, layout=(-1, 3), sharex=False, sharey=False)

plt.figure(figsize=(11,4))
crimes_count_date.resample('D').size().rolling(365).sum().plot()
plt.title('Rolling sum of all crimes from 2007 - 2018')
plt.ylabel('Number of crimes')
plt.xlabel('Days')
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
            <h4>Crimes around certain times</h4>
            <p>
              To show how common specific crimes are around different times of the day visualizations were created to display the count for each incident type around midnight, noon, 3pm, and 7pm (respectively). This data is for all years included. It would have been easier to read if the crime incident type order on the X-Axis was static for all of the visualizations - that way it is easier to see how it changes over time. Instead each visualization's X-Axis is in order from largest to smallest Y-Axis value.
            </p>
            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/coeyoner/chicago-crime-visualization">Chicago Crime Visualization</a>
            </p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-committed-at-certain-times_midnight.png" fluid alt="crimes-committed-at-certain-times_midnight" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4g class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4g" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
x = crimes
x = x.set_index(['ACTUAL_DTE'])

color = (0.2, 0.4, 0.6, 0.6)

bars = x['IBR_TYPE_DESC'].unique()
bars = bars.sort_values(inplace=True)

x[x.index.hour == 0]['IBR_TYPE_DESC'].value_counts(normalize=True).plot.bar(color=color)
plt.title("Crimes commited around 24:00")
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-committed-at-certain-times_3am.png" fluid alt="crimes-committed-at-certain-times_3am" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4h class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4h" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
x = crimes
x = x.set_index(['ACTUAL_DTE'])

color = (0.2, 0.4, 0.6, 0.6)

bars = x['IBR_TYPE_DESC'].unique()
bars = bars.sort_values(inplace=True)

x[x.index.hour == 3]['IBR_TYPE_DESC'].value_counts(normalize=True).plot.bar(color=color)
plt.title("Crimes commited around 03:00")
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
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-committed-at-certain-times_12pm.png" fluid alt="crimes-committed-at-certain-times_12pm" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4i class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4i" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
x = crimes
x = x.set_index(['ACTUAL_DTE'])

color = (0.2, 0.4, 0.6, 0.6)

bars = x['IBR_TYPE_DESC'].unique()
bars = bars.sort_values(inplace=True)

x[x.index.hour == 12]['IBR_TYPE_DESC'].value_counts(normalize=True).plot.bar(color=color)
plt.title("Crimes commited around 12:00")
plt.show(
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-committed-at-certain-times_7pm.png" fluid alt="crimes-committed-at-certain-times_7pm" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4j class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4j" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
x = crimes
x = x.set_index(['ACTUAL_DTE'])

color = (0.2, 0.4, 0.6, 0.6)

bars = x['IBR_TYPE_DESC'].unique()
bars = bars.sort_values(inplace=True)

x[x.index.hour == 19]['IBR_TYPE_DESC'].value_counts(normalize=True).plot.bar(color=color)
plt.title("Crimes commited around 19:00")
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <br>
          <br>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <h4>Miscellaneous</h4>
            <p>
              The first three visualizations show the number of crimes by month of the year, number of crimes by hour of the day, and number of crimes by day of the week (respectively). Most crimes happen in July, least in February - maybe related to temperature? Two most common times of the day for crime is 12:00pm and 5:00pm. The least amount of crimes happen between 4:00am and 5:00am. The least amount of crimes happen on Sundays and Fridays have the most.
            </p>
            <p>
              Heat map of crime per month over each year is shown in the fourth visualization. It highlights crime has decreased over time. It shows that the month with the least crime in 2003 (February) has just about the same number of crimes as the month the with most crime in 2019 (July). That is an amazing change!
            </p>
            <p>
              Fifth Visualization shows a normalized distribution of theft types for all of the years. This shows how Breaking and Entering is almost x4 more common than theft from a building. There are other interpretations of this graph as well - check it out.
            </p>
            <p>
              The sixth visualization is a hex map of latitude and longitude values with a count of each prostitution incident. Prostitution was arbitrarily chosen, this visualization type was originally chosen to show all crimes but there were issues with implementation - so one incident type was chosen. This visualization shows where all prostitution incidents have occurred.
            </p>
            <p>
              Usage inspired by a Kaggle project(s):
              <br>
              <a target="_blank" href="https://www.kaggle.com/coeyoner/chicago-crime-visualization">Chicago Crime Visualization</a>
            </p>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-by-month-of-the-year.png" fluid alt="crimes-by-month-of-the-year" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4k class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4k" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
color = (0.2, 0.4, 0.6, 0.6)

x.groupby([x.index.month]).size().plot(kind='barh', color=color)
plt.ylabel('Month')
plt.xlabel('Number of crimes')
plt.title('Number of crimes by month of year')
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-by-hour-of-the-day.png" fluid alt="crimes-by-hour-of-the-day" @click="$parent.$parent.expandImage" />
            <b-button v-b-toggle.collapse-toc-4l class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4l" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
color = (0.2, 0.4, 0.6, 0.6)

x.groupby([x.index.hour]).size().plot(kind='barh', color=color)
plt.ylabel('Hour')
plt.xlabel('Number of crimes')
plt.title('Number of crimes by hour of day')
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
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-by-day-of-the-week.png" fluid alt="crimes-by-day-of-the-week" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4m class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4m" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
color = (0.2, 0.4, 0.6, 0.6)

days = ['Monday','Tuesday','Wednesday',  'Thursday', 'Friday', 'Saturday', 'Sunday']
x.groupby([x.index.dayofweek]).size().plot(kind='barh', color=color)
plt.ylabel('Day of week')
plt.yticks(np.arange(7), days)
plt.xlabel('Number of crimes')
plt.title('Number of crimes by day of week')
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/crimes-by-year-month.jpg" fluid alt="crimes-by-year-month" @click="$parent.$parent.expandImage" />
            <b-button v-b-toggle.collapse-toc-4n class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4n" class="mt-2">
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
        </b-row>
        <br>
        <b-row>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/normalized-thefts-barplot.png" fluid alt="normalized-thefts-barplot" @click="$parent.$parent.expandImage" />
          </b-col>
          <b-col cols="md-6 sm-12">
            <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/statistics/hexbin-of-crimes_prostitution.png" fluid alt="hexbin-of-crimes_prostitution" @click="$parent.$parent.expandImage" />
            <br>
            <b-button v-b-toggle.collapse-toc-4p class="view-code-btn" variant="secondary">
              View Code
            </b-button>
            <b-collapse id="collapse-toc-4p" class="mt-2">
              <b-card class="codeblock">
                <pre>
            <code class="card-text">
def heatMap(df):
    #Create Correlation df
    corr = df.corr()
    #Plot figsize
    fig, ax = plt.subplots(figsize=(10, 10))
    #Generate Color Map, red & blue
    colormap = sns.diverging_palette(220, 10, as_cmap=True)
    #Generate Heat Map, allow annotations and place floats in map
    sns.heatmap(corr, cmap=colormap, annot=True, fmt=".2f")
    #Apply xticks
    plt.xticks(range(len(corr.columns)), corr.columns);
    #Apply yticks
    plt.yticks(range(len(corr.columns)), corr.columns)
    #show plot
    plt.show()

#x = df.sample(30000) ##sampling a part of the dataset
x = df # We want the whole dataset not a sample

df.dropna(); ## drop rows with missing data

x_theft = x[x['IBR_TYPE_DESC'].isin(("Motor Vehicle Theft", "Credit Card/Automatic Teller Fraud", "Shoplifting", "Burglary/Breaking & Entering", "Robbery", "Theft from Motor Vehicle", "Theft from Building", "All Other Thefts"))]
x_battery = x[x['IBR_TYPE_DESC'].isin(("Simple Assault", "Aggravated Assault", "Forcible Fondling", "Assault - Intimidation")) ]
x_cd = x[x['IBR_TYPE_DESC'].isin(("Destruction/Damage/Vandalism of Property", "XXX"))]
x_narc = x[x['IBR_TYPE_DESC'].isin(("Drug/Narcotic Violations", "XXX"))]
x_prostitution = x[x['IBR_TYPE_DESC'].isin(("Prostitution", "XXX"))]

print("Heat map over cooridantes of crimes")
x.plot.hexbin(x='LONGITUDE', y='LATITUDE', gridsize=10)
plt.title("Overall crimes")
plt.show()

x_theft.plot.hexbin(x='LONGITUDE', y='LATITUDE', gridsize=40)
plt.title("Theft")

x_battery.plot.hexbin(x='LONGITUDE', y='LATITUDE', gridsize=40)
plt.title("Battery")

x_cd.plot.hexbin(x='LONGITUDE', y='LATITUDE', gridsize=40)
plt.title("Criminal Damage")
plt.show()

x_narc.plot.hexbin(x='LONGITUDE', y='LATITUDE', gridsize=40)
plt.title("Narcotics")
plt.show()

x_prostitution.plot.hexbin(x='LONGITUDE', y='LATITUDE', gridsize=40)
plt.title("Prostitution")
plt.show()
            </code>
            </pre>
              </b-card>
            </b-collapse>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
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
        text: 'Incident Maps',
        active: true
      }
    ]
  }
}
</script>
