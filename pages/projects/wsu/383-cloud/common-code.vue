<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Common Code</h2>
        <p>Some code was used frequently for numerous parts of the project. Instead of showing the same code everywhere the common code is available here and referenced where needed.</p>
        <br>
        <h2>
          Table of Contents
        </h2>
        <b-list-group>
          <b-list-group-item>
            <nuxt-link to="#toc-1">
              Merge Data
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-2">
              Read Data (already merged)
            </nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="md-6 sm-12" />
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-10 offset-md-1 sm-12">
        <h2>
          Merge Data
        </h2>
        <p>
          The Worcester Resource Office provided data that was separated between years. This was not ideal for running analysis on all of it at once. Code was created to merge the data together then create a new csv file with the merged data in it.
        </p>
        <b-button v-b-toggle.collapse-toc1 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1" class="mt-2">
          <b-card class="codeblock">
            <pre>
            <code class="card-text">
# We will run this with python3. Open a python console with the command:
# > python3

# This requires pandas, numpy, & matplotlib. Run the command below to install:
# > pip3 install pandas
# > pip3 install numpy
# > pip3 install matplotlib

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
plt.style.use('seaborn')

# Path to the data on your computer
dataPath = '/media/tcrokicki/MainDrive/temp-school/capstone/'

crimes19 = pd.read_csv(dataPath + 'WorcesterData - 2019.csv',error_bad_lines=False)
crimes18 = pd.read_csv(dataPath + 'WorcesterData - 2018.csv',error_bad_lines=False)
crimes17 = pd.read_csv(dataPath + 'WorcesterData - 2017.csv',error_bad_lines=False)
crimes16 = pd.read_csv(dataPath + 'WorcesterData - 2016.csv',error_bad_lines=False)
crimes15 = pd.read_csv(dataPath + 'WorcesterData - 2015.csv',error_bad_lines=False)
crimes14 = pd.read_csv(dataPath + 'WorcesterData - 2014.csv',error_bad_lines=False)
crimes13 = pd.read_csv(dataPath + 'WorcesterData - 2013.csv',error_bad_lines=False)
crimes12 = pd.read_csv(dataPath + 'WorcesterData - 2012.csv',error_bad_lines=False)
crimes11 = pd.read_csv(dataPath + 'WorcesterData - 2011.csv',error_bad_lines=False)
crimes10 = pd.read_csv(dataPath + 'WorcesterData - 2010.csv',error_bad_lines=False)
crimes09 = pd.read_csv(dataPath + 'WorcesterData - 2009.csv',error_bad_lines=False)
crimes08 = pd.read_csv(dataPath + 'WorcesterData - 2008.csv',error_bad_lines=False)
crimes07 = pd.read_csv(dataPath + 'WorcesterData - 2007.csv',error_bad_lines=False)
crimes06 = pd.read_csv(dataPath + 'WorcesterData - 2006.csv',error_bad_lines=False)
crimes05 = pd.read_csv(dataPath + 'WorcesterData - 2005.csv',error_bad_lines=False)
crimes04 = pd.read_csv(dataPath + 'WorcesterData - 2004.csv',error_bad_lines=False)
crimes03 = pd.read_csv(dataPath + 'WorcesterData - 2003.csv',error_bad_lines=False)
unmergedData = [crimes03, crimes04, crimes05, crimes06, crimes07, crimes08, crimes09,
  crimes10, crimes11, crimes12, crimes13, crimes14, crimes15, crimes16, crimes17, crimes18, crimes19]

# concat the data
crimes = pd.concat(unmergedData, ignore_index=False, axis=0)

# Use to create new csv with the merged data
crimes.to_csv(dataPath + 'WorcesterData_07-19.csv')

# clean up references to unmerged data
for i in unmergedData:
del i

# notify the data is merged
print('Dataset concatenated..')
            </code>
            </pre>
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-2">
      <b-col cols="md-10 offset-md-1 sm-12">
        <h4>
          Read Data
        </h4>
        <p>
          This code reads in the saved csv file containing the merged data (2003-2019), converts the types, cleans the data, and sets the index to be the timestamp column - since this is time series data. In some cases it is not ideal for the data to be time series, this code was not used for every application of the project.
        </p>
        <b-button v-b-toggle.collapse-toc2 class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc2" class="mt-2">
          <b-card class="codeblock">
            <pre>
            <code class="card-text">
# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load in

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)

import folium
import matplotlib.pyplot as plt
import seaborn as sns
plt.style.use('seaborn')
%matplotlib inline

# Read the file
crimeDataCsvPath = '/media/tcrokicki/MainDrive/temp-school/capstone/WorcesterData_03-19.csv'
crimes = pd.read_csv(crimeDataCsvPath,error_bad_lines=False)

# Clean up duplicate information if it exists
print('Dataset Shape before drop_duplicate : ', crimes.shape)
crimes.drop_duplicates(subset=['P_INCID_NO'], inplace=True)
print('Dataset Shape after drop_duplicate: ', crimes.shape)

# Use line below to drop columns not needed, optional
# crimes.drop(['Year', 'P_INCID_NO'], inplace=True, axis=1)

# display first three rows to confirm we have what we expect
crimes.head(3)
#crimes.shape
#crimes.info()

# Below uses seconds (we dont have seconds) & capital Y instead of lowercase for last two digits of year
#crimes.ACTUAL_DTE = pd.to_datetime(crimes.ACTUAL_DTE, format='%m/%d/%Y %I:%M:%S %p')
#crimes.ACTUAL_DTE = pd.to_datetime(crimes.ACTUAL_DTE, format='%m/%d/%y %I:%M %p')
crimes.ACTUAL_DTE = pd.to_datetime(crimes.ACTUAL_DTE, format='%m/%d/%Y %H:%M:%S', infer_datetime_format=True)

# Set the index to the date time (FOR MAPS ONLY)
crimes = crimes.set_index(['ACTUAL_DTE'])

# Set the categorical data for pandas
crimes['PRIMARY_STREET_NAME']         = pd.Categorical(crimes['PRIMARY_STREET_NAME'])
crimes['PRIMARY_CITY']                = pd.Categorical(crimes['PRIMARY_CITY'])
crimes['PRIMARY_STATE_CD']            = pd.Categorical(crimes['PRIMARY_STATE_CD'])
crimes['PRIMARY_ZIP_CD']              = pd.Categorical(crimes['PRIMARY_ZIP_CD'])
crimes['PRIMARY_ADDR_NO']             = pd.Categorical(crimes['PRIMARY_ADDR_NO'])
crimes['IBR_TYPE']                    = pd.Categorical(crimes['IBR_TYPE'])
crimes['IBR_TYPE_DESC']               = pd.Categorical(crimes['IBR_TYPE_DESC'])

# Set the integer values (float by default)
crimes                                  = crimes.astype({'PRIMARY_STREET_NUM': 'Int32'})

# Done
print('You are ready to use the data')
            </code>
            </pre>
          </b-card>
        </b-collapse>
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
        text: 'Projects',
        to: '/projects'
      }, {
        text: 'Worcester State University',
        to: '/projects/wsu'
      }, {
        text: 'CS383 - Cloud, Parallel & Distributed Computing',
        to: '/projects/wsu/383-cloud'
      }, {
        text: 'Common Code',
        active: true
      }
    ]
  }
}
</script>
