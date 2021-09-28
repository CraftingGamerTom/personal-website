<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Ranking Areas</h2>
        <p>
          It would be interesting if we could rank streets by how much crime occurs on them. This information could become very useful for suggesting areas people should go or should avoid when traveling. This is, however, a much more complex problem to solve than just looking at how much crime happens on each street.
        </p>
        <p>
          First of all, streets vary in length, one section of Main Street does not have the same amount or types of crimes as another section. For this reason it was best to break up the city into "chunks" (or "bins" or "sections") and look at how much crime occurs in each bin.
        </p>
        <p>
          This gets us closer to making accurate predictions about which areas of Worcester may be dangerous or benign, but we can go further. Some crimes that are handled by the police are less dangerous than others. For example, a murder is more dangerous than a child being truant from school. We decided it was necessary to apply a weight to each crime type to have more accurate prediction for dangerous areas.
        </p>
        <p>
          This problem is in fact, infinitely complex. With more data it could make this more precise and more accurate. <span style="font-weight:600;">Please take predictions and assumptions with a grain of salt, predictions are only as accurate as the amount of, and types of, data used.</span> There are many factors that have data which were not included in this project.
        </p>
        <br>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="~assets/page/edu/wsu/cs/383-cloud/ranking-areas/ranking-areas.png" fluid alt="ranking-areas" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-6 sm-12">
        <h2>
          Setting Up
        </h2>
        <p>
          First read the data into memory. View the
          <nuxt-link to="/projects/wsu/383-cloud/common-code">
            common code
          </nuxt-link>.
        </p>
        <p>
          Then make a copy of the data. It will be used transformed so this prevents the original data from being changed.
        </p>
        <b-button v-b-toggle.collapse-toc1 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# --------------------------------------------------
# ----- Create a copy of the crimes data set
# --------------------------------------------------
ranked_crimes = crimes.copy()
</code>
          </pre>
          </b-card>
        </b-collapse>
        <h2>
          Put Incidents into Bins
        </h2>
        <p>
          Incidents will be grouped into bins to create a better representation of an area's danger level.
        </p>
        <p>
          Now decide how big a bin should be (in latitude / longitude values). The size of the bin matters for precision. For this example <code>0.005</code> will be used. These bins are not too big but not so small that they are practically single points like the original data set.
        </p>
        <b-button v-b-toggle.collapse-toc2 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc2" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# --------------------------------------------------
# ----- Group the incidents into bins
# --------------------------------------------------
chunk_size = 0.005
to_bin = lambda x: np.floor(x / chunk_size) * chunk_size
ranked_crimes["latbin"] = ranked_crimes.LATITUDE.map(to_bin)
ranked_crimes["lonbin"] = ranked_crimes.LONGITUDE.map(to_bin)
# groups = ranked_crimes.groupby(("latbin", "lonbin"))
</code>
          </pre>
          </b-card>
        </b-collapse>
        <h2>
          Evaluate each Incident Type
        </h2>
        <p>
          In order to apply a weight to each type of crime a good look at all the types of incidents is required to categorize them. An arbitrary weight number to each group based on how they sounded - this introduces bias but its somewhere to start. The problem is this is a possible source for error in determining how dangerous an area may be. The code shows the numbers applied.
        </p>
        <b-button v-b-toggle.collapse-toc3 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc3" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# --------------------------------------------------
# ----- Determine the different types of incidents
# --------------------------------------------------
incident_values = ranked_crimes[["IBR_TYPE", "IBR_TYPE_DESC"]].values.ravel()
unique_incident_values =  pd.unique(incident_values)
print(unique_incident_values)

# --------------------------------------------------
# ----- Assign a danger value to each incident type
# --------------------------------------------------

['23G' 'Theft of Motor Vehicle Parts' 'ZZZ' 'Non-NIBRS Offense' '23H'
 'All Other Thefts' '40A' 'Prostitution' '35A' 'Drug/Narcotic Violations'
 '240' 'Motor Vehicle Theft' '23F' 'Theft from Motor Vehicle' '120'
 'Robbery' '290' 'Destruction/Damage/Vandalism of Property' '23D'
 'Theft from Building' '13C' 'Assault - Intimidation' '13A'
 'Aggravated Assault' '220' 'Burglary/Breaking & Entering' '11D'
 'Forcible Fondling' '26C' 'Impersonation' '13B' 'Simple Assault' '23C'
 'Shoplifting' '520' 'Weapon Law Violation' '90C' 'Disorderly Conduct'
 '90Z' 'All Other Offenses' '26E' 'Wire Fraud' '90J'
 'Trespass of Real Property' '90D' 'Driving Under the Influence' '90I'
 'Runaway' '250' 'Counterfeiting/Forgery' '26B'
 'Credit Card/Automatic Teller Fraud' '90G' 'Liquor Law Violation' '35B'
 'Drug Equipment Violations' '90F' 'Family Offenses, Nonviolent' '90N'
 'Resisting Arrest' '200' 'Arson' '11A' 'Forcible Rape' '36B'
 'Statutory Rape (Nonforcible Sex Offense)' '11B' 'Forcible Sodomy' '26A'
 'False Pretense/Swindle/Confidence Game' '09A'
 'Murder & Nonnegligent Manslaughter' '23E'
 'Theft from Coin-operated Machine' '280' 'Stolen Property Offenses' '100'
 'Kidnapping/Abduction' '270' 'Embezzlement' '90M'
 'Other Agencies (Mental Health)' '23B' 'Purse Snatching' '370'
 'Pornography/Obscene Material' '11C' 'Sexual Assault with an Object'
 '36A' 'Incest (Nonforcible Sex Offense)' '90P'
 'Contributing to the Delinquency of a Minor' '23A' 'Pocket Picking' '90E'
 'Drunkenness' '210' 'Extortion/Blackmail' '90A' 'Bad Checks' '39C'
 'Gambling Equipment Violations' '90L' 'Truancy' '90K' 'Incorrigible'
 'VOI' 'VOI (Added during conversion)' '40B'
 'Assisting or Promoting Prostitution' '26F' 'Identity Theft' '720'
 'Animal Cruelty' '26G' 'Hacking/Computer Invasion' '39B'
 'Operating/Promoting/Assisting Gambling' '64A'
 'Human Trafficking, Commercial Sex Acts' 'Zx' '64B'
 'Human Trafficking, Involuntary Servitude' '90B'
 'Curfew/Loitering/Vagrancy' '26D' 'Welfare Fraud']
</code>
          </pre>
          </b-card>
        </b-collapse>
        <h2>
          Apply Weights to Each Incident Type
        </h2>
        <p>
          A csv string was manually written based on the unique incident types and added a weight value that represents higher level group of incident types. This will simplify the process of visualizing as well as automatically create groups of incidents based on weight.
        </p>
        <pre>
<p>
# Key                       Value

# Violent Incident          9
# Property Incident         7
# Non-Violent Incident      5
# White-Collar Incident     3
# Low-Risk Incident         2
# Other / Unknown Incident   1
</p>
        </pre>
        <b-button v-b-toggle.collapse-toc4 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc4" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# import the StringIO function
# from io module
from io import StringIO

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

weighted_incidents['INCIDENT_CODE']         = pd.Categorical(weighted_incidents['INCIDENT_CODE'])
weighted_incidents['INCIDENT_DESC']         = pd.Categorical(weighted_incidents['INCIDENT_DESC'])

# --------------------------------------------------
# ----- Join incidents on the weighted incidents data
# --------------------------------------------------
# reference https://www.shanelynn.ie/merge-join-dataframes-python-pandas-index-1/
ranked_crimes = pd.merge(ranked_crimes, weighted_incidents[["INCIDENT_CODE","INCIDENT_WEIGHT"]], left_on="IBR_TYPE", right_on="INCIDENT_CODE", how="left")
</code>
          </pre>
          </b-card>
        </b-collapse>
        <h2>
          Rank Each Bin
        </h2>
        <p>
          Now it is time to create a new ranked data set. Merge the weighted incident list data frame with the original data, then run Aggregate functions on the data frame to get ranked Bins.
        </p>
        <p>
          To provide many options when working with the data creating three different functions were written to create three data sets: ranked bins by day, ranked bins by month, and ranked bins by year.
        </p>
        <p>
          Finally the data frames are saved as a csv files so they can be used in future jobs and share publicly. These data sets are available on <a href="https://github.com/CraftingGamerTom/wsu-computer-science/tree/master/CS-383_Cloud-Computing_2020-Spring" target="_blank">Github</a>.
        </p>
        <b-button v-b-toggle.collapse-toc5 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc5" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# --------------------------------------------------
# ----- Join incidents on the weighted incidents data
# --------------------------------------------------
# reference https://www.shanelynn.ie/merge-join-dataframes-python-pandas-index-1/
ranked_crimes = pd.merge(ranked_crimes, weighted_incidents[["INCIDENT_CODE","INCIDENT_WEIGHT"]], left_on="IBR_TYPE", right_on="INCIDENT_CODE", how="left")

# --------------------------------------------------
# ----- Determine the bin rank by year
# --------------------------------------------------
rankedBins_year = ranked_crimes.groupby(['Year','latbin','lonbin'], as_index=False).agg({"INCIDENT_WEIGHT": "sum"})
rankedBins_year = rankedBins_year.rename(columns={"INCIDENT_WEIGHT": "WEIGHTED_INCIDENT_SCORE"})

# > pip3 install sklearn
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
rankedBins_year['RANK'] = scaler.fit_transform(rankedBins_year[['WEIGHTED_INCIDENT_SCORE']])

# --------------------------------------------------
# ----- Determine the bin rank by day
# --------------------------------------------------

rankedBins_day = ranked_crimes.groupby([ranked_crimes.ACTUAL_DTE.dt.year,ranked_crimes.ACTUAL_DTE.dt.month,ranked_crimes.ACTUAL_DTE.dt.day,'latbin','lonbin'], as_index=True).agg({"INCIDENT_WEIGHT": "sum"})
rankedBins_day = rankedBins_day.rename(columns={"INCIDENT_WEIGHT": "WEIGHTED_INCIDENT_SCORE"})

# > pip3 install sklearn
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
rankedBins_day['RANK'] = scaler.fit_transform(rankedBins_day[['WEIGHTED_INCIDENT_SCORE']])

# --------------------------------------------------
# ----- Determine the bin rank by month
# --------------------------------------------------

rankedBins_month = ranked_crimes.groupby([ranked_crimes.ACTUAL_DTE.dt.year,ranked_crimes.ACTUAL_DTE.dt.month,'latbin','lonbin'], as_index=True).agg({"INCIDENT_WEIGHT": "sum"})
rankedBins_month = rankedBins_month.rename(columns={"INCIDENT_WEIGHT": "WEIGHTED_INCIDENT_SCORE"})

# > pip3 install sklearn
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
rankedBins_month['RANK'] = scaler.fit_transform(rankedBins_month[['WEIGHTED_INCIDENT_SCORE']])

# --------------------------------------------------
# ----- Save the data
# --------------------------------------------------

dataPath = '/media/tcrokicki/MainDrive/temp-school/capstone/'
rankedBins_year.to_csv(dataPath + 'WorcesterData_BinRanked_Year.csv')
rankedBins_month.to_csv(dataPath + 'WorcesterData_BinRanked_Month.csv')
rankedBins_day.to_csv(dataPath + 'WorcesterData_BinRanked_Day.csv')
</code>
          </pre>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/ranking-areas/ranking-areas-output.png" fluid alt="ranking-areas-output" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-5">
      <b-col cols="12">
        <h2>
          Results
        </h2>
        <p>
          In the end there are three new data sets. Each row represents a normalized danger level for a specific chunk per year, month, or year (described by data set name)
        </p>
        <pre>
<p>
Dataframe shape:

ACTUAL_DTE
ACTUAL_DTE
ACTUAL_DTE
latbin
lonbin
WEIGHTED_INCIDENT_SCORE
RANK
</p>
        </pre>
        <p>
          The new dataset was run in a very powerful graphing tool called Tableau. A student license was used to make a number of amazing visualizations. There is so much more available in Tableau than what was used in this project. If a visualization is needed quickly, Tableau is pretty awesome.
        </p>
      </b-col>
      <b-col cols="8 offset-2">
        <div id="viz1588055850151" class="tableauPlaceholder" style="position: relative">
          <noscript><a href='#'><img alt=' ' src='https://public.tableau.com/static/images/Bo/Book1_15866598444370/Sheet2/1_rss.png' style='border: none' /></a></noscript><object class="tableauViz" style="display:none;"><param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F"> <param name="embed_code_version" value="3"> <param name="path" value="views/Book1_15866598444370/Sheet2?:embed=y&amp;:display_count=y"> <param name="toolbar" value="yes"><param name="static_image" value="https://public.tableau.com/static/images/Bo/Book1_15866598444370/Sheet2/1.png"> <param name="animate_transition" value="yes"><param name="display_static_image" value="yes"><param name="display_spinner" value="yes"><param name="display_overlay" value="yes"><param name="display_count" value="yes"></object>
        </div>                <script type="text/javascript">
          var divElement = document.getElementById('viz1588055850151');
          var vizElement = divElement.getElementsByTagName('object')[0];
          vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.5)+'px';
          var scriptElement = document.createElement('script');
          scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement.parentNode.insertBefore(scriptElement, vizElement);
        </script>
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
        text: 'CS383 - Cloud, Parallel & Distributed Computing',
        to: '/projects/wsu/383-cloud'
      }, {
        text: 'Ranking Areas',
        active: true
      }
    ]
  }
}
</script>
