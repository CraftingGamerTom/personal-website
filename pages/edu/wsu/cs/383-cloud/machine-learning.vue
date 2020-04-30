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
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-6 sm-12">
        <h2>
          Association Rule Mining
        </h2>
        <p>
          Apriori Association Rule Mining works by finding records that meet our minimum support, confidence, and lift standard. Support refers to the popularity of an item (average number of times it shows up). Confidence refers the the accuracy of a particular rule. It is calculated by dividing the items in the entire by the values in one side of the rule. Lift refers to ratio between the parts of a rule. It is calculated by dividing the confidence of the rule by the support of the result of a rule. The output is similar to Naive Bayes algorithm. In fact, Naive Bayes may have been a better algorithm to apply for this kind of data. If I did it again I would try that algorithm instead.
        </p>
        <p>
          For more information about the Apriori Algorithm check out these awesome resources on <a target="_blank" href="https://adataanalyst.com/machine-learning/apriori-algorithm-python-3-0/">Data Analyst</a> and <a target="_blank" href="https://stackabuse.com/association-rule-mining-via-apriori-algorithm-in-python/">Stack Abuse</a>.
        </p>
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
        <b-button v-b-toggle.collapse-toc1b-rules class="view-code-btn" variant="secondary">
          View Rules
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
        <b-collapse id="collapse-toc1b-rules" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
Noteable Attempt 1

** Daily Data **

    Attempted to set up a list of lists using a python array to do assocation mining on but it ran for over 20 hours and still had not finished. The data that originally took up 7MB was now over 1.7GB and I constantly has 1 core of my CPU at 100%. At that point I terminated the command
    We got no results from this for daily locally.

    ---------------------------

    I ran it on SageMaker. It took about 20 minutes to run

    DATA INFO
    >>> dailyRankedCrimes.info()
    RangeIndex: 186124 entries, 0 to 186123
    Data columns (total 7 columns):
    ACTUAL_DTE                 186124 non-null int64
    ACTUAL_DTE.1               186124 non-null int64
    ACTUAL_DTE.2               186124 non-null int64
    latbin                     186124 non-null float64
    lonbin                     186124 non-null float64
    WEIGHTED_INCIDENT_SCORE    186124 non-null int64
    RANK                       186124 non-null float64
    dtypes: float64(3), int64(4)
    memory usage: 9.9 MB

    SETTINGS
    Min Support:      0.02
    Min Confidence:   0.95
    Min Lift:         3
    Min Length:       4

    RESULTS:
    Rule Count: 12

    RULES:
    RelationRecord(items=frozenset({'R', 'N'}), support=0.2857142857142857, ordered_statistics=[OrderedStatistic(items_base=frozenset({'N'}), items_add=frozenset({'R'}), confidence=1.0, lift=3.5), OrderedStatistic(items_base=frozenset({'R'}), items_add=frozenset({'N'}), confidence=1.0, lift=3.5)])
    Rule: ['N'] -> ['R']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['b'] -> ['i']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['b'] -> ['l']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['b'] -> ['n']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['i'] -> ['l']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['i'] -> ['n']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['l'] -> ['n']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['b'] -> ['i', 'l']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['b'] -> ['i', 'n']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['b'] -> ['l', 'n']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['i'] -> ['l', 'n']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================
    Rule: ['b'] -> ['i', 'l', 'n']
    Support: 0.2857142857142857
    Confidence: 1.0
    Lift: 3.5
    =====================================

** Yearly Data **
    I ran it with the yearly ranked crimes dataset because it was much smaller. We did get results for this but found them hard to understand due to the nature of the list of lists created in the for loop.

    DATA INFO
    >>> yearlyRankedCrimes.info()
    RangeIndex: 6962 entries, 0 to 6961
    Data columns (total 6 columns):
    #   Column                   Non-Null Count  Dtype
    ---  ------                   --------------  -----
    0   Unnamed: 0               6962 non-null   int64
    1   Year                     6962 non-null   int64
    2   latbin                   6962 non-null   float64
    3   lonbin                   6962 non-null   float64
    4   WEIGHTED_INCIDENT_SCORE  6962 non-null   int64
    5   RANK                     6962 non-null   float64
    dtypes: float64(3), int64(3)
    memory usage: 326.5 KB

    RUN #1
    SETTINGS
    Min Support:      0.0045
    Min Confidence:   0.95
    Min Lift:         3
    Min Length:       2

    RESULTS
    Rule Count:       8741

    RULES
    Too many to show, decided to change settings

    RUN #? (Tweaked settings a few times)

    SETTINGS
    Min Support:      0.02
    Min Confidence:   0.95
    Min Lift:         3
    Min Length:       4

    RESULTS
    Rule Count:       9

    RULES
    Rule: ['N'] -> ['R']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
    Rule: ['b'] -> ['i']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
    Rule: ['b'] -> ['l']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
    Rule: ['i'] -> ['l']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
    Rule: ['b'] -> ['l', 'i']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
    Rule: ['b'] -> ['n', 'i']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
    Rule: ['b'] -> ['l', 'n']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
    Rule: ['i'] -> ['l', 'n']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
    Rule: ['b'] -> ['l', 'n', 'i']
    Support: 0.3333333333333333
    Confidence: 1.0
    Lift: 3.0
    =====================================
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
        <b-button v-b-toggle.collapse-toc1c-rules class="view-code-btn" variant="secondary">
          View Rules
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
        <b-collapse id="collapse-toc1c-rules" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
Noteable Attempt 2
    Used pandas df.values variable to do assocation mining

    I found that these rules did not seem very useful for figuring out how much crime may occur based on an area. The Rules were finding a relationship between the weighted score and the rank. This is still interesting but we want to determine crime based on area.

** Daily Data **

    DATA INFO
    >>> dailyRankedCrimes.info()
    RangeIndex: 186124 entries, 0 to 186123
    Data columns (total 7 columns):
    #   Column                   Non-Null Count   Dtype
    ---  ------                   --------------   -----
    0   ACTUAL_DTE               186124 non-null  int64
    1   ACTUAL_DTE.1             186124 non-null  int64
    2   ACTUAL_DTE.2             186124 non-null  int64
    3   latbin                   186124 non-null  float64
    4   lonbin                   186124 non-null  float64
    5   WEIGHTED_INCIDENT_SCORE  186124 non-null  int64
    6   RANK                     186124 non-null  float64
    dtypes: float64(3), int64(4)
    memory usage: 9.9 MB

    SETTINGS
    Min Support:      0.02
    Min Confidence:   0.95
    Min Lift:         3
    Min Length:       4

    RESULTS
    Rule Count:       17

    RULES
    Rule: [0.012658227848101269] -> [3.0]
    Support: 0.05615611097977692
    Confidence: 1.0
    Lift: 6.242001475618753
    =====================================
    Rule: [0.02531645569620253] -> [5.0]
    Support: 0.07295136575616255
    Confidence: 1.0
    Lift: 5.507930871212121
    =====================================
    Rule: [0.05063291139240506] -> [9.0]
    Support: 0.18100836001805248
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.08227848101265822] -> [14.0]
    Support: 0.055054694719649265
    Confidence: 1.0
    Lift: 11.637113917719144
    =====================================
    Rule: [0.09493670886075947] -> [16.0]
    Support: 0.026665019019578344
    Confidence: 1.0
    Lift: 17.152704819832273
    =====================================
    Rule: [0.05063291139240506, -71.8] -> [9.0]
    Support: 0.020201586039414583
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, -71.795] -> [9.0]
    Support: 0.02077109883733425
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 3.0] -> [9.0]
    Support: 0.020900045131202853
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 4.0] -> [9.0]
    Support: 0.02074960778835615
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 5.0] -> [9.0]
    Support: 0.0225118738045604
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 6.0] -> [9.0]
    Support: 0.02142657583116632
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 7.0] -> [9.0]
    Support: 0.021415830306677267
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 8.0] -> [9.0]
    Support: 0.021152564956695537
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 10.0] -> [9.0]
    Support: 0.020325159571038663
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 12.0] -> [9.0]
    Support: 0.020018912123100727
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 42.25] -> [9.0]
    Support: 0.02453203240850186
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================
    Rule: [0.05063291139240506, 42.255] -> [9.0]
    Support: 0.02110421009649481
    Confidence: 1.0
    Lift: 3.616586351624436
    =====================================

** Yearly Data **

    DATA
    >>> yearlyRankedCrimes.info()
    RangeIndex: 6962 entries, 0 to 6961
    Data columns (total 6 columns):
    #   Column                   Non-Null Count  Dtype
    ---  ------                   --------------  -----
    0   Unnamed: 0               6962 non-null   int64
    1   Year                     6962 non-null   int64
    2   latbin                   6962 non-null   float64
    3   lonbin                   6962 non-null   float64
    4   WEIGHTED_INCIDENT_SCORE  6962 non-null   int64
    5   RANK                     6962 non-null   float64
    dtypes: float64(3), int64(3)
    memory usage: 326.5 KB

    SETTINGS
    Min Support:      0.0045
    Min Confidence:   0.95
    Min Lift:         1
    Min Length:       2

    RESULTS
    Rule Count:       41

    RULES
    Rule: [0.0005367686527106817] -> [3.0]
    Support: 0.010485492674518817
    Confidence: 1.0
    Lift: 94.08108108108108
    =====================================
    Rule: [0.0016103059581320453] -> [7.0]
    Support: 0.04955472565354783
    Confidence: 1.0
    Lift: 20.121387283236995
    =====================================
    Rule: [0.0021470746108427268] -> [9.0]
    Support: 0.017667336972134445
    Confidence: 1.0
    Lift: 56.145161290322584
    =====================================
    Rule: [0.0024154589371980675] -> [10.0]
    Support: 0.010629129560471129
    Confidence: 1.0
    Lift: 92.82666666666667
    =====================================
    Rule: [0.002952227589908749] -> [12.0]
    Support: 0.00790002872737719
    Confidence: 1.0
    Lift: 124.32142857142856
    =====================================
    Rule: [0.0034889962426194318] -> [14.0]
    Support: 0.031169204251651823
    Confidence: 1.0
    Lift: 31.93577981651376
    =====================================
    Rule: [0.0040257648953301115] -> [16.0]
    Support: 0.01565642056880207
    Confidence: 1.0
    Lift: 63.290909090909096
    =====================================
    Rule: [0.0042941492216854536] -> [17.0]
    Support: 0.008330939385234128
    Confidence: 1.0
    Lift: 118.0
    =====================================
    Rule: [0.004830917874396135] -> [19.0]
    Support: 0.008761850043091065
    Confidence: 1.0
    Lift: 112.29032258064517
    =====================================
    Rule: [0.005367686527106817] -> [21.0]
    Support: 0.018816432059752943
    Confidence: 1.0
    Lift: 52.74242424242424
    =====================================
    Rule: [0.005904455179817498] -> [23.0]
    Support: 0.01177822464808963
    Confidence: 1.0
    Lift: 83.87951807228916
    =====================================
    Rule: [0.006172839506172839] -> [24.0]
    Support: 0.0068945705257110025
    Confidence: 1.0
    Lift: 142.08163265306123
    =====================================
    Rule: [0.0064412238325281795] -> [25.0]
    Support: 0.00560183855214019
    Confidence: 1.0
    Lift: 174.04999999999998
    =====================================
    Rule: [0.0067096081588835215] -> [26.0]
    Support: 0.006463659867854065
    Confidence: 1.0
    Lift: 151.3478260869565
    =====================================
    Rule: [0.007246376811594203] -> [28.0]
    Support: 0.015512783682849756
    Confidence: 1.0
    Lift: 63.87155963302752
    =====================================
    Rule: [0.0077831454643048845] -> [30.0]
    Support: 0.012496409077851192
    Confidence: 1.0
    Lift: 79.11363636363636
    =====================================
    Rule: [0.008051529790660227] -> [31.0]
    Support: 0.00617638609594944
    Confidence: 1.0
    Lift: 158.22727272727272
    =====================================
    Rule: [0.008319914117015567] -> [32.0]
    Support: 0.007612754955472565
    Confidence: 1.0
    Lift: 128.92592592592592
    =====================================
    Rule: [0.008588298443370907] -> [33.0]
    Support: 0.007181844297615628
    Confidence: 1.0
    Lift: 136.50980392156862
    =====================================
    Rule: [0.009125067096081591] -> [35.0]
    Support: 0.010341855788566504
    Confidence: 1.0
    Lift: 95.36986301369863
    =====================================
    Rule: [0.009661835748792272] -> [37.0]
    Support: 0.009767308244757253
    Confidence: 1.0
    Lift: 100.89855072463769
    =====================================
    Rule: [0.009930220075147612] -> [38.0]
    Support: 0.005745475438092502
    Confidence: 1.0
    Lift: 169.8048780487805
    =====================================
    Rule: [0.010198604401502952] -> [39.0]
    Support: 0.00617638609594944
    Confidence: 1.0
    Lift: 158.22727272727272
    =====================================
    Rule: [0.010466988727858293] -> [40.0]
    Support: 0.006320022981901752
    Confidence: 1.0
    Lift: 154.7111111111111
    =====================================
    Rule: [0.011003757380568977] -> [42.0]
    Support: 0.008905486929043378
    Confidence: 1.0
    Lift: 110.50793650793649
    =====================================
    Rule: [0.011540526033279656] -> [44.0]
    Support: 0.010341855788566504
    Confidence: 1.0
    Lift: 95.36986301369863
    =====================================
    Rule: [0.011808910359634998] -> [45.0]
    Support: 0.005458201666187877
    Confidence: 1.0
    Lift: 178.5128205128205
    =====================================
    Rule: [0.012077294685990338] -> [46.0]
    Support: 0.005170927894283252
    Confidence: 1.0
    Lift: 188.16216216216216
    =====================================
    Rule: [0.01234567901234568] -> [47.0]
    Support: 0.005170927894283252
    Confidence: 1.0
    Lift: 188.16216216216216
    =====================================
    Rule: [0.012882447665056359] -> [49.0]
    Support: 0.007612754955472565
    Confidence: 1.0
    Lift: 128.92592592592592
    =====================================
    Rule: [0.013419216317767043] -> [51.0]
    Support: 0.0068945705257110025
    Confidence: 1.0
    Lift: 142.08163265306123
    =====================================
    Rule: [0.013687600644122385] -> [52.0]
    Support: 0.00502729100833094
    Confidence: 1.0
    Lift: 193.38888888888889
    =====================================
    Rule: [0.013955984970477724] -> [53.0]
    Support: 0.00502729100833094
    Confidence: 1.0
    Lift: 193.38888888888889
    =====================================
    Rule: [0.014224369296833066] -> [54.0]
    Support: 0.004740017236426314
    Confidence: 1.0
    Lift: 204.76470588235296
    =====================================
    Rule: [0.014761137949543746] -> [56.0]
    Support: 0.0053145647802355644
    Confidence: 1.0
    Lift: 183.21052631578948
    =====================================
    Rule: [0.015297906602254429] -> [58.0]
    Support: 0.005170927894283252
    Confidence: 1.0
    Lift: 188.16216216216216
    =====================================
    Rule: [0.01583467525496511] -> [60.0]
    Support: 0.00560183855214019
    Confidence: 1.0
    Lift: 174.04999999999998
    =====================================
    Rule: [0.01610305958132045] -> [61.0]
    Support: 0.004883654122378627
    Confidence: 1.0
    Lift: 198.9142857142857
    =====================================
    Rule: [0.01663982823403113] -> [63.0]
    Support: 0.006032749209997127
    Confidence: 1.0
    Lift: 161.90697674418604
    =====================================
    Rule: [0.017176596886741814] -> [65.0]
    Support: 0.005170927894283252
    Confidence: 1.0
    Lift: 188.16216216216216
    =====================================
    Rule: [0.018518518518518517] -> [70.0]
    Support: 0.004596380350474002
    Confidence: 1.0
    Lift: 210.96969696969697
    =====================================

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
        <b-button v-b-toggle.collapse-toc1d-rules class="view-code-btn" variant="secondary">
          View Rules
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
        <b-collapse id="collapse-toc1d-rules" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
Noteable Attempt 3
    This time to force the algorithm to find a relationship between longitude / latitude and the Rank I removed the Rank. Next time we will do the opposite (Remove Weighted Incident Score).

** Daily Data **

    I had to mess with the support a lot for this one. It was hard to find any rules at all. Once I did find rules I noticed their length was longer than most rules in the past.

    DATA INFO
    >>> dailyRankedCrimes.info()
    RangeIndex: 186124 entries, 0 to 186123
    Data columns (total 6 columns):
    #   Column                   Non-Null Count   Dtype
    ---  ------                   --------------   -----
    0   ACTUAL_DTE               186124 non-null  int64
    1   ACTUAL_DTE.1             186124 non-null  int64
    2   ACTUAL_DTE.2             186124 non-null  int64
    3   latbin                   186124 non-null  float64
    4   lonbin                   186124 non-null  float64
    5   WEIGHTED_INCIDENT_SCORE  186124 non-null  int64
    dtypes: float64(2), int64(4)
    memory usage: 8.5 MB

    SETTINGS
    Min Support:      0.00025
    Min Confidence:   0.95
    Min Lift:         3
    Min Length:       2

    RESULTS
    Rule Count:       5

    RULES
    Rule: [2.0, 42.21] -> [-71.8]
    Support: 0.00034922954589413507
    Confidence: 0.9558823529411764
    Lift: 8.771515409891215
    =====================================
    Rule: [42.21, 11.0] -> [-71.8]
    Support: 0.000451312028540113
    Confidence: 0.9545454545454545
    Lift: 8.759247556171088
    =====================================
    Rule: [42.21, 14.0] -> [-71.8]
    Support: 0.00031162021018245903
    Confidence: 0.9830508474576273
    Lift: 9.020823149051097
    =====================================
    Rule: [2009.0, 42.21] -> [-71.8]
    Support: 0.00029550192344888354
    Confidence: 0.9649122807017543
    Lift: 8.854377228878041
    =====================================
    Rule: [9.0, 42.21, 7.0] -> [-71.8]
    Support: 0.00034922954589413507
    Confidence: 0.9558823529411764
    Lift: 8.771515409891215
    =====================================

** Yearly Data **

    In this I had to play with the confidence because the Rules we were generating were not very interesting. Seems that based on weighted incident score and either latitude or longitude it can figure out the corresponding latitude or longitude.  Perhaps it is hard to find an assocation between area and how much crime? I did not want to go below 90% confidence.

    DATA INFO
    >>> yearlyRankedCrimes.info()
    RangeIndex: 6962 entries, 0 to 6961
    Data columns (total 5 columns):
    #   Column                   Non-Null Count  Dtype
    ---  ------                   --------------  -----
    0   Unnamed: 0               6962 non-null   int64
    1   Year                     6962 non-null   int64
    2   latbin                   6962 non-null   float64
    3   lonbin                   6962 non-null   float64
    4   WEIGHTED_INCIDENT_SCORE  6962 non-null   int64
    dtypes: float64(2), int64(3)
    memory usage: 272.1 KB

    SETTINGS
    Min Support:      0.00045
    Min Confidence:   0.8
    Min Lift:         3
    Min Length:       2

    RESULTS
    Rule Count:       16

    RULES
    Rule: [-77.025] -> [38.94]
    Support: 0.001005458201666188
    Confidence: 1.0
    Lift: 994.5714285714284
    =====================================
    Rule: [-75.22500000000002] -> [39.93]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 1740.5
    =====================================
    Rule: [42.2] -> [-71.83]
    Support: 0.001292731973570813
    Confidence: 1.0
    Lift: 26.674329501915707
    =====================================
    Rule: [42.34] -> [-71.79]
    Support: 0.001292731973570813
    Confidence: 1.0
    Lift: 16.458628841607563
    =====================================
    Rule: [-71.735] -> [42.235]
    Support: 0.0018672795173800632
    Confidence: 1.0
    Lift: 17.492462311557787
    =====================================
    Rule: [-71.72] -> [42.295]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 23.36241610738255
    =====================================
    Rule: [632.0] -> [42.27]
    Support: 0.0005745475438092502
    Confidence: 0.8
    Lift: 16.285380116959065
    =====================================
    Rule: [-71.885, 7.0] -> [42.275]
    Support: 0.0005745475438092502
    Confidence: 0.8
    Lift: 13.718226600985222
    =====================================
    Rule: [16.0, -71.855] -> [42.29]
    Support: 0.0005745475438092502
    Confidence: 0.8
    Lift: 17.625316455696204
    =====================================
    Rule: [9.0, 42.305] -> [-71.84]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 24.775800711743774
    =====================================
    Rule: [-71.805, 7.0] -> [42.32]
    Support: 0.0011490950876185005
    Confidence: 0.8
    Lift: 50.63272727272728
    =====================================
    Rule: [42.21, 7.0] -> [-71.79]
    Support: 0.0005745475438092502
    Confidence: 0.8
    Lift: 13.166903073286052
    =====================================
    Rule: [-71.77, 14.0] -> [42.22]
    Support: 0.0005745475438092502
    Confidence: 0.8
    Lift: 44.5568
    =====================================
    Rule: [96.0, 42.255] -> [-71.765]
    Support: 0.0005745475438092502
    Confidence: 0.8
    Lift: 20.253090909090908
    =====================================
    Rule: [16.0, -71.75] -> [42.245]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 17.147783251231527
    =====================================
    Rule: [-71.735, 7.0] -> [42.235]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 17.492462311557787
    =====================================

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
        <b-button v-b-toggle.collapse-toc1e-rules class="view-code-btn" variant="secondary">
          View Rules
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
        <b-collapse id="collapse-toc1e-rules" class="mt-2">
          <b-card class="codeblock">
            <pre>
<code class="card-text">
Noteable Attempt 4
    This time we are removing the Weighted Incident Score.
    Our data contains a Date, latitiude bin, longitude bin, and a Rank

** Daily Data **

    DATA INFO
    >>> dailyRankedCrimes.info()
    RangeIndex: 186124 entries, 0 to 186123
    Data columns (total 6 columns):
    #   Column        Non-Null Count   Dtype
    ---  ------        --------------   -----
    0   ACTUAL_DTE    186124 non-null  int64
    1   ACTUAL_DTE.1  186124 non-null  int64
    2   ACTUAL_DTE.2  186124 non-null  int64
    3   latbin        186124 non-null  float64
    4   lonbin        186124 non-null  float64
    5   RANK          186124 non-null  float64
    dtypes: float64(3), int64(3)
    memory usage: 8.5 MB

    SETTINGS
    Min Support:      0.00035
    Min Confidence:   0.95
    Min Lift:         3
    Min Length:       2

    RESULTS
    Rule Count:       5

    RULES
    Rule: [2.0, 42.21] -> [-71.8]
    Support: 0.00034922954589413507
    Confidence: 0.9558823529411764
    Lift: 8.771515409891215
    =====================================
    Rule: [9.0, 42.21] -> [-71.8]
    Support: 0.0004190754550729621
    Confidence: 0.9629629629629629
    Lift: 8.836489598112632
    =====================================
    Rule: [42.21, 11.0] -> [-71.8]
    Support: 0.000451312028540113
    Confidence: 0.9545454545454545
    Lift: 8.759247556171088
    =====================================
    Rule: [2009.0, 42.21] -> [-71.8]
    Support: 0.00029550192344888354
    Confidence: 0.9649122807017543
    Lift: 8.854377228878041
    =====================================
    Rule: [0.0379746835443038, 9.0, 42.21] -> [-71.8]
    Support: 0.0002901291612043584
    Confidence: 0.9642857142857142
    Lift: 8.848627633274873
    =====================================

** Yearly Data **

    DATA INFO
    >>> yearlyRankedCrimes.info()
    RangeIndex: 6962 entries, 0 to 6961
    Data columns (total 5 columns):
    #   Column      Non-Null Count  Dtype
    ---  ------      --------------  -----
    0   Unnamed: 0  6962 non-null   int64
    1   Year        6962 non-null   int64
    2   latbin      6962 non-null   float64
    3   lonbin      6962 non-null   float64
    4   RANK        6962 non-null   float64
    dtypes: float64(3), int64(2)
    memory usage: 272.1 KB

    SETTINGS
    Min Support:      0.00045
    Min Confidence:   0.95
    Min Lift:         3
    Min Length:       2

    RESULTS
    Rule Count:       9

    RULES
    Rule: [-77.025] -> [38.94]
    Support: 0.001005458201666188
    Confidence: 1.0
    Lift: 994.5714285714284
    =====================================
    Rule: [-75.22500000000002] -> [39.93]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 1740.5
    =====================================
    Rule: [42.2] -> [-71.83]
    Support: 0.001292731973570813
    Confidence: 1.0
    Lift: 26.674329501915707
    =====================================
    Rule: [42.34] -> [-71.79]
    Support: 0.001292731973570813
    Confidence: 1.0
    Lift: 16.458628841607563
    =====================================
    Rule: [-71.735] -> [42.235]
    Support: 0.0018672795173800632
    Confidence: 1.0
    Lift: 17.492462311557787
    =====================================
    Rule: [-71.72] -> [42.295]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 23.36241610738255
    =====================================
    Rule: [0.0021470746108427268, 42.305] -> [-71.84]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 24.775800711743774
    =====================================
    Rule: [-71.75, 0.0040257648953301115] -> [42.245]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 17.147783251231527
    =====================================
    Rule: [0.0016103059581320453, -71.735] -> [42.235]
    Support: 0.0005745475438092502
    Confidence: 1.0
    Lift: 17.492462311557787
    =====================================

</code>
            </pre>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/machine-learning/association-rule-apriori-steps.png" fluid alt="apriori-steps" @click="$parent.expandImage" />
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
code.card-text {
  font-size: .55rem;
  line-height: 1.5;
  display: block;
  font-weight: 600;
}
</style>
