<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>Machine Learning</h2>
        <p>We wanted to practice running machine learning algorithms we have learned this semester on SageMaker and Hadoop as a means to practice using cloud services to run computations. We ran association rule mining against the ranked area data and we ran recommendation computation code using mahout to suggest the safest area to go.</p>
        <br>
        <h2>
          Table of Contents
        </h2>
        <b-list-group>
          <b-list-group-item>
            <nuxt-link to="#toc-1">
              Association Rule Mining
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-2">
              Mahout Recommendation
            </nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="~/assets/page/edu/wsu/cs/383-cloud/machine-learning/mahout-3.png" fluid alt="mahout-3" @click="$parent.expandImage" />
        </cite>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-6 sm-12">
        <h2>
          Association Rule Mining
        </h2>
        <p>
          <span style="font-weight:700;">
            Setting Up
          </span>
        </p>
        <p>
          We are using the Ranked Area data that we created in the <nuxt-link to="/edu/wsu/cs/383-cloud/ranking-areas">
            Ranking Areas
          </nuxt-link> section. First step is to read in the data and import the needed libraries.
        </p>
        <p>
          We had a goal to practice applying machine learning algorithms to our data. I opted to use the Apyori Library for python to perform Association Rule Mining. I ran into some issues that made it a great learning experience.
        </p>
        <p>
          First step is to read the data into memory. We will be running these rules against the ranked areas data sets we made before. I only ran these against the Daily and the Yearly data sets because they are the largest and smallest data sets created, respectively.
        </p>
        <b-button v-b-toggle.collapse-toc1a class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1a" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# Apriori Algorithm for Association Rule Mining

# ----------------------------------------------------------------
# ------------------ SETTING UP THE RANKED DATA ------------------
# ----------------------------------------------------------------

# Install assocation rule mining library
# pip3 install apyori

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from apyori import apriori

repositoryPath = '/media/tcrokicki/MainDrive/workspaces/wsu/wsu-computer-science/'
dataCsvPath = 'CS-383_Cloud-Computing_2020-Spring/area-ranking/output/'
dailyRankedCrimes = pd.read_csv(repositoryPath + dataCsvPath + "WorcesterData_BinRanked_Day.csv",error_bad_lines=False)
yearlyRankedCrimes = pd.read_csv(repositoryPath + dataCsvPath + "WorcesterData_BinRanked_Year.csv",error_bad_lines=False)

# Fix the Column names in the daily ranked crimes
# Found that this breaks association rule mining - related to using date?
#dailyRankedCrimes['ACTUAL_DTE'] = pd.to_datetime(dailyRankedCrimes['ACTUAL_DTE']*10000+dailyRankedCrimes['ACTUAL_DTE.1']*100+dailyRankedCrimes['ACTUAL_DTE.2'],format='%Y%m%d')
#del dailyRankedCrimes['ACTUAL_DTE.1']
#del dailyRankedCrimes['ACTUAL_DTE.2']
# Still an issue if converted to a nominal (category):
#dailyRankedCrimes['ACTUAL_DTE'] = dailyRankedCrimes['ACTUAL_DTE'].dt.strftime('%Y-%m-%d')
#dailyRankedCrimes['ACTUAL_DTE']              = pd.Categorical(dailyRankedCrimes['ACTUAL_DTE'])

# Done Loading Data
print('You are ready to use the data')
</code>
            </pre>
          </b-card>
        </b-collapse>
        <p>
          <span style="font-weight:700;">
            Attempt 1
          </span>
        </p>
        <p>
          Using a nested for loop across every value in the data set, I attempted to create a 2D array of values that would then have association rule mining ran against it. For Yearly data it was slow but for daily data it ran for over 18 hours on my computer before I killed it because it was taking too long. I ran it on SageMaker (Like everything else after testing on my computer) and it ran in under 20 minutes.
        </p>
        <b-button v-b-toggle.collapse-toc1b class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1b" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# ----------------------------------------------------------------
# ---------- ASSOCIATION RULE MINING : NOTEABLE ATTEMPT 1 ---------
# ----------------------------------------------------------------

# ------------------ DAILY DATASET --------------------

records = []
for i in range(0, 186123):
 records.append([str(dailyRankedCrimes.values[i,j]) for j in range(0, 4)])
 if(i%10000 == 0):
        print(i) # for progress logging

print("Created daily records")

# At this point it ran for many hours (on mny local machine) and never finished (not parallized) but on a i7 CPU with 16 GB of RAM
# We found that python arrays were just too inefficient

association_rules = apriori(dailyRankedCrimes, min_support=0.2, min_confidence=0.95, min_lift=3, min_length=4)
association_results = list(association_rules)
print(len(association_results))

# ------------------ YEARLY DATASET --------------------

# Before deciding it was too inefficient I decided to try it with a smaller dataset - the Yearly Ranked Crimes Data

records = []
for i in range(0, 6961):
 records.append([str(yearlyRankedCrimes.values[i,j]) for j in range(0, 5)])

association_rules = apriori(yearlyRankedCrimes, min_support=0.0045, min_confidence=0.95, min_lift=3, min_length=2)
association_results = list(association_rules)
print(len(association_results))
# 8741

# That is too many rules. I messed around with the variables and repeated
association_rules = apriori(rankedCrimes, min_support=0.2, min_confidence=0.95, min_lift=3, min_length=4)
association_results = list(association_rules)
print(len(association_results))
# 9

# I printed the Rules using the common commands (found in common-commands.py)
</code>
            </pre>
          </b-card>
        </b-collapse>
        <p>
          <span style="font-weight:700;">
            Attempt 2
          </span>
        </p>
        <p>
          In attempt number two (which I started before attempt 1 was complete) I wanted to find a way to speed up the algorithm. It was suggested to me by a friend to use pandas ".values" rather than using a python array as arrays are very slow for these kinds of operations. It was indeed much faster.
        </p>
        <b-button v-b-toggle.collapse-toc1c class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1c" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# ----------------------------------------------------------------
# ---------- ASSOCIATION RULE MINING : NOTEABLE ATTEMPT 2 ---------
# ----------------------------------------------------------------

# ------------------ DAILY DATASET --------------------

association_rules = apriori(dailyRankedCrimes.values, min_support=0.02, min_confidence=0.95, min_lift=3, min_length=4, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 17

# ------------------ YEARLY DATASET --------------------

association_rules = apriori(yearlyRankedCrimes.values, min_support=0.02, min_confidence=0.95, min_lift=3, min_length=4, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 2

# Not Many Rules, playing with the settings:

association_rules = apriori(yearlyRankedCrimes.values, min_support=0.0045, min_confidence=0.95, min_lift=1, min_length=2, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 41

# This is better

# I printed the Rules using the common commands (found in common-commands.py)
</code>
            </pre>
          </b-card>
        </b-collapse>
        <p>
          <span style="font-weight:700;">
            Attempt 3
          </span>
        </p>
        <p>
          I was not happy with the results I was getting. Im surprised there are not more rules and I begun to see that association rule mining is not great for crime data. As I grew more desperate I decided to remove the RANK column from the data set to see if it would come up with better rules.
        </p>
        <b-button v-b-toggle.collapse-toc1d class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1d" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# ----------------------------------------------------------------
# ---------- ASSOCIATION RULE MINING : NOTEABLE ATTEMPT 3 ---------
# ----------------------------------------------------------------

# ------------------ DAILY DATASET --------------------

# Remove the RANK column
del dailyRankedCrimes['RANK']

association_rules = apriori(dailyRankedCrimes.values, min_support=0.00045, min_confidence=0.8, min_lift=3, min_length=2, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 0

# Adjust settings
association_rules = apriori(yearlyRankedCrimes.values, min_support=0.00025, min_confidence=0.95, min_lift=3, min_length=2, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 5

# ------------------ YEARLY DATASET --------------------

# Remove the RANK column
del yearlyRankedCrimes['RANK']

association_rules = apriori(yearlyRankedCrimes.values, min_support=0.02, min_confidence=0.95, min_lift=3, min_length=4, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 0

# Adjust settings
association_rules = apriori(yearlyRankedCrimes.values, min_support=0.00045, min_confidence=0.8, min_lift=3, min_length=2, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 16
</code>
            </pre>
          </b-card>
        </b-collapse>
        <p>
          <span style="font-weight:700;">
            Attempt 4
          </span>
        </p>
        <p>
          Applying the same logic. trying to get better results I also tried running the algorithm with everything except the WEIGHTED_INCIDENT_SCORE column.
        </p>
        <b-button v-b-toggle.collapse-toc1e class="view-code-btn" variant="secondary">
          View Code
        </b-button>
        <b-collapse id="collapse-toc1e" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
# ----------------------------------------------------------------
# ---------- ASSOCIATION RULE MINING : NOTEABLE ATTEMPT 4 ---------
# ----------------------------------------------------------------

# ------------------ DAILY DATASET --------------------

# Remove the WEIGHTED_INCIDENT_SCORE column
del dailyRankedCrimes['WEIGHTED_INCIDENT_SCORE']

association_rules = apriori(dailyRankedCrimes.values, min_support=0.00045, min_confidence=0.95, min_lift=3, min_length=2, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 1

# Adjust Settings
association_rules = apriori(dailyRankedCrimes.values, min_support=0.00025, min_confidence=0.95, min_lift=3, min_length=2, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 5

# ------------------ YEARLY DATASET --------------------

# Remove the WEIGHTED_INCIDENT_SCORE column
del yearlyRankedCrimes['WEIGHTED_INCIDENT_SCORE']

association_rules = apriori(yearlyRankedCrimes.values, min_support=0.05, min_confidence=0.95, min_lift=3, min_length=2, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 0

# Adjust settings
association_rules = apriori(yearlyRankedCrimes.values, min_support=0.00045, min_confidence=0.95, min_lift=3, min_length=2, use_colnames = True)
association_results = list(association_rules)
print(len(association_results))
# 9
</code>
            </pre>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img
          class="body-image"
          src="~/assets/page/edu/wsu/cs/383-cloud/machine-learning/association-rule-1.png"
          fluid
          alt="sagemaker-setting-up"
          @click="$parent.expandImage"
        />
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/machine-learning/association-rule-2.png" fluid alt="sagemaker-setting-up" @click="$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-2">
      <b-col cols="md-6 sm-12">
        <h2>
          Mahout Recommendation
        </h2>
        <p>
          I used WinSCP to manage the Hadoop hdfs.
          Created a cluster and copied the ssh and used the key to WinSCP.
          I drag and dropped the dataset that I would perform mahout algorithm.
          The data set I used is generated from the original dataset of crimes.
        </p>
        <p>
          The first problem that I encountered with the recommender was that it does not read or process strings, only numbers because it uses the matrix and SIMILARITY_COSINE which processes nonzero instances.
          As a work-around I used the Ranked dataset because the original data set had many string instances and attributes and the date format was not numeric but was date object format.
          The mahout algorithm read the attribute names as strings, and it displayed an error.
        </p>
        <p>
          First I removed some columns I took out 5 of them (Data cleaning).
          <pre>
<code style="font-size:.65rem;">cat WorcesterData_BinRanked_Day1.csv | sed 's/ /,/g' | cut -f1-5 -d, > WorcesterData_BinRanked.csv</code>
          </pre>
          Then I put the file in a directory:
          <pre>
<code style="font-size:.65rem;">hadoop fs -put WorcesterData_BinRanked.csv /WorcesterData_BinRanked.csv</code>
          </pre>
          After that I run the recommender
          <pre>
<code style="font-size:.65rem;">mahout recommenditembased --input /WorcesterData_BinRanked.csv --output recommendations --numRecommendations 10 --outputPathForSimilarityMatrix similarity-matrix --similarityClassname SIMILARITY_COSINE</code>
          </pre>
        </p>
        <p>
          I merged everything in one output file:
          <pre>
<code style="font-size:.65rem;">hadoop fs -getmerge recommendations output.txt</code>
          </pre>
        </p>
        <p>
          I ran the recommender many times including all the columns. I also ran it only using some columns and I got the same tuples results.
        </p>
        <p>
          The way to interpret them is the first column is the year, then inside the brackets are the tuples containing the month and the days which comes as an average as I see(30.714018).
          The recommender looks for similarity patterns on the data and creates the tuples with that.
        </p>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/machine-learning/mahout-4.png" fluid alt="mahout-4" @click="$parent.expandImage" />
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/machine-learning/mahout-2.jpg" fluid alt="mahout-2" @click="$parent.expandImage" />
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/machine-learning/mahout-5.png" fluid alt="mahout-5" @click="$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
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
          text: 'Machine Learning',
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

<style scoped>
.body-image {
  margin-bottom:50px!important;
}
</style>
