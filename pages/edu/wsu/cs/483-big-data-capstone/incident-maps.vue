<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Incident Maps</h2>
        <p>Maps are a great way to understand what is going on within an area. A number of methods to visualize incidents within Worcester were attempted. Ultimately two were chosen for display.</p>
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
              Folium Map
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-3">
              Spatial Map
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-4">
              Heat Map
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-5">
              Tableau Map
            </nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="~/assets/page/edu/wsu/cs/483-big-data-capstone/incident-maps/worcester-google-map.png" fluid alt="incident-maps-image" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="12">
        <h2>
          Setting Up
        </h2>
        <p>
          To begin, simply run the code in Common Code to load the data set into memory.
        </p>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-2">
      <b-col cols="md-6 sm-12">
        <h2>
          Folium
        </h2>
        <p>It was difficult to generate an interactive incident map with all of the years and every incident in it. Using the Folium method the HTML file became over 250MB and was a serious challenge to load - even locally.</p>
        <p>To speed up loading and show something, 2019 was sampled and this map was generated.</p>
        <p><a target="_blank" href="/page/edu/wsu/mapping-some-incidents.html">View the Interactive Map</a>.</p>
        <p>Read more about Folium <a target="_blank" href="https://python-visualization.github.io/folium/quickstart.html">here</a>.</p>
        <b-button v-b-toggle.collapse-toc-2a class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc-2a" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              <pre>
df = crimes.dropna()
df = df.drop(columns=['P_INCID_NO', 'IBR_TYPE'], axis = 1)

worcester_map = folium.Map(location=[42.2626,71.8023], zoom_start=11, tiles="CartoDB dark_matter")

df['primary_address'] = (df['PRIMARY_STREET_NUM'].astype(str) + " " + df['PRIMARY_STREET_NAME'].astype(str))

primary_addresses = df['primary_address']

df['new_locations'] = list(zip(df.LATITUDE, df.LONGITUDE))
new_locations = df['new_locations']

for i in range(len(new_locations)):
    lat = new_locations.iloc[i][0]
    long = new_locations.iloc[i][1]
    popup_text = """Community Index : {}<br>Arrest : {}<br>Location Description : {}<br>"""
    popup_text = popup_text.format(new_locations.index[i], new_locations.iloc[i][-1], new_locations.iloc[i][-2])
    folium.CircleMarker(location = [lat, long], popup= popup_text, fill = True).add_to(worcester_map)

worcester_map.save('/media/tcrokicki/MainDrive/temp-school/capstone/crime_data.html')
              </pre>
            </code>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img
          class="body-image"
          src="~/assets/page/edu/wsu/cs/483-big-data-capstone/incident-maps/folium.png"
          fluid
          alt="incident-map-folium"
          @click="$parent.$parent.expandImage"
        />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-3">
      <b-col cols="md-6 sm-12">
        <h2>
          Spatial Map
        </h2>
        <p>
          The idea of a spatial map is to graph incidents based on latitude and longitude values. In this case the map was created correctly but the scale of the graph was not ideal. The graph was using whole number so all of the incidents appear in one place. It would be ideal to adjust the code to zoom in and us decimal values.
        </p>
        <p>Usage inspired by a Kaggle project. Check it out <a target="_blank" href="https://www.kaggle.com/skeftical/chicago-crimes-eda-spatio-temporal">here</a>.</p>
        <b-button v-b-toggle.collapse-toc-3a class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc-3a" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              <pre>
plt.figure(figsize=(12,12))
sns.jointplot(x=crimes['LATITUDE'].values, y=crimes['LONGITUDE'].values, size=10, kind='hex')
plt.ylabel('Longitude', fontsize=12)
plt.xlabel('Latitude', fontsize=12)
plt.show()
              </pre>
            </code>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/incident-maps/spatial-map.png" fluid alt="sagemaker-saving-data" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-4">
      <b-col cols="md-6 sm-12">
        <h2>
          Heat Map
        </h2>
        <p>
          A heat map - created out of incidents - gives clear indication of where the most crimes have occurred over the many years analyzed.
        </p>
        <p>Usage inspired by a number of Kaggle projects. Check them out <a target="_blank" href="https://www.kaggle.com/currie32/crimes-in-chicago/kernels">here</a>.</p>
        <b-button v-b-toggle.collapse-toc-4a class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc-4a" class="mt-2">
          <b-card class="codeblock">
            <code class="card-text">
              <pre>
import numpy as np

import pandas as pd

from subprocess import check_output

crimes = pd.read_csv('WorcesterData_03_19.csv',error_bad_lines=False)

crimes['IBR_TYPE_DESC'].unique()
Out[5]:
array(['Theft of Motor Vehicle Parts', 'Non-NIBRS Offense',
       'All Other Thefts', 'Prostitution', 'Drug/Narcotic Violations',
       'Motor Vehicle Theft', 'Theft from Motor Vehicle', 'Robbery',
       'Destruction/Damage/Vandalism of Property', 'Theft from Building',
       'Assault - Intimidation', 'Aggravated Assault',
       'Burglary/Breaking & Entering', 'Forcible Fondling',
       'Disorderly Conduct', 'Impersonation', 'Simple Assault',
       'Shoplifting', 'Weapon Law Violation', 'All Other Offenses',
       'Wire Fraud', 'Trespass of Real Property',
       'Driving Under the Influence', 'Runaway', 'Counterfeiting/Forgery',
       'Arson', 'Credit Card/Automatic Teller Fraud',
       'Liquor Law Violation', 'Drug Equipment Violations',
       'Family Offenses, Nonviolent', 'Resisting Arrest', 'Forcible Rape',
       'Statutory Rape (Nonforcible Sex Offense)', 'Forcible Sodomy',
       'False Pretense/Swindle/Confidence Game',
       'Stolen Property Offenses', 'Murder & Nonnegligent Manslaughter',
       'Theft from Coin-operated Machine', 'Kidnapping/Abduction',
       'Embezzlement', 'Other Agencies (Mental Health)',
       'Purse Snatching', 'Pornography/Obscene Material',
       'Sexual Assault with an Object',
       'Incest (Nonforcible Sex Offense)',
       'Contributing to the Delinquency of a Minor', 'Pocket Picking',
       'Drunkenness', 'Extortion/Blackmail', 'Bad Checks',
       'VOI (Added during conversion)', 'Gambling Equipment Violations',
       'Operating/Promoting/Assisting Gambling', 'Betting/Wagering',
       'Assisting or Promoting Prostitution', 'Incorrigible',
       'Identity Theft', 'Animal Cruelty', 'Hacking/Computer Invasion',
       'Human Trafficking, Commercial Sex Acts', 'Zx',
       'Human Trafficking, Involuntary Servitude',
       'Curfew/Loitering/Vagrancy', 'Welfare Fraud'], dtype=object)

crimes.columns.get_loc('LATITUDE')
Out[6]: 10

minLat = crimes['LATITUDE'].mean() - crimes['LATITUDE'].std()
maxLat = crimes['LATITUDE'].mean() + crimes['LATITUDE'].std()
minLon = crimes['LONGITUDE'].mean() - crimes['LONGITUDE'].std()
maxLon = crimes['LONGITUDE'].mean() + crimes['LONGITUDE'].std()
ndf = crimes[crimes['LATITUDE'] LESSTHANOREQUAL maxLat]
ndf = ndf[ndf['LATITUDE'] >= minLat]
ndf  = ndf[ndf['LONGITUDE'] LESSTHANOREQUAL maxLon]
ndf  = ndf[ndf['LONGITUDE']>minLon]

import matplotlib.pyplot as plt
import seaborn as sns
n3df = ndf[ndf['Year']>=2003]
nd3df = ndf[ndf['Year'] LESSTHANOREQUAL 2019]
nnhdf = n3df[(n3df['IBR_TYPE_DESC']!= 'Destruction/Damage/Vandalism of Property') &
            (n3df['IBR_TYPE_DESC']!=  'Simple Assault') &
            (n3df['IBR_TYPE_DESC']!= 'Burglary/Breaking & Entering')]
nhdf = n3df[n3df['IBR_TYPE_DESC']=='Destruction/Damage/Vandalism of Property']
ntdf = n3df[(n3df['IBR_TYPE_DESC']=='Simple Assault')|
           (n3df['IBR_TYPE_DESC']=='Burglary/Breaking & Entering')]

f,ax= plt.subplots(1,1,figsize=(12,10))
plt.ylim(42.1,42.4)
plt.xlim(-72.0,-71.6)
other = ax.scatter(nnhdf['LONGITUDE'],nnhdf['LATITUDE'], s=0.4, alpha=1, label = 'other crimes')
homicides = ax.scatter(nhdf['LONGITUDE'],nhdf['LATITUDE'], s=5, alpha=1,color='red', label='homicides')
tr = ax.scatter(ntdf['LONGITUDE'],ntdf['LATITUDE'], s=0.3, alpha=0.4,color='yellow',label='thefts and robberies')
plt.title('Crimes Map - From 2003 to 2019')
lgnd = plt.legend(handles=[homicides, tr,other])

              </pre>
            </code>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/483-big-data-capstone/incident-maps/heat-map.png" fluid alt="sagemaker-saving-data" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-5">
      <b-col cols="md-6 sm-12">
        <h2>
          Tableau Map
        </h2>
        <p>
          The data was imported and run in a very powerful graphing tool called Tableau. Using a student license, a number of amazing visualizations were created. There is so many different types of analyses available, these were kept basic as it was just a fun thing to try out. Tableau makes visualizations quickly, it is pretty awesome.
        </p>
        <p>Check out <a target="_blank" href="https://www.tableau.com/">Tableau</a>.</p>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <div id="viz1588437271331" class="tableauPlaceholder" style="position: relative">
          <noscript><a href='#'><img alt=' ' src='https://public.tableau.com/static/images/Bo/Book1_15866598444370/Sheet1/1_rss.png' style='border: none' /></a></noscript><object class="tableauViz" style="display:none;"><param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F"> <param name="embed_code_version" value="3"> <param name="path" value="views/Book1_15866598444370/Sheet1?:embed=y&amp;:display_count=y&amp;publish=yes"> <param name="toolbar" value="yes"><param name="static_image" value="https://public.tableau.com/static/images/Bo/Book1_15866598444370/Sheet1/1.png"> <param name="animate_transition" value="yes"><param name="display_static_image" value="yes"><param name="display_spinner" value="yes"><param name="display_overlay" value="yes"><param name="display_count" value="yes"><param name="filter" value="publish=yes"></object>
        </div>                <script type="text/javascript">
          var divElement = document.getElementById('viz1588437271331');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);
        </script>
      </b-col>
    </b-row>
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
        text: 'Education',
        to: '/edu'
      }, {
        text: 'Worcester State University',
        to: '/edu/wsu'
      }, {
        text: 'CS483 - Big Data Capstone',
        to: '/edu/wsu/cs/483-big-data-capstone'
      }, {
        text: 'Incident Maps',
        active: true
      }
    ]
  }
}
</script>
