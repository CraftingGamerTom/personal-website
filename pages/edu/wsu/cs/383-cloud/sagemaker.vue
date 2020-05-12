<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>SageMaker</h2>
        <p>Amazon SageMaker is a service that provides many components to make computing and deploying machine learning models quickly and in a distributed fashion. Although we did not need to make use of Spark across a distributed Livy server, it was a great opportunity to become more familiar with how to use SageMaker.</p>
        <p>Read more about SageMaker <a target="_blank" href="https://aws.amazon.com/sagemaker/">here</a>.</p>
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
              Using Conda Python Kernal
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-3">
              Importing Packages
            </nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="#toc-4">
              Saving Data
            </nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="md-6 sm-12">
        <b-img src="https://d1.awsstatic.com/re19/Sagemaker/Rhinestone%20SageMaker%20Studio%20Page%202%20-%20v2_full%20size.5390b79fd038865e0816b7275b73b1abaad21121.png" fluid alt="sagemaker-image" @click="$parent.$parent.expandImage" />
        <cite><a target="_blank" href="https://aws.amazon.com/sagemaker/">Image Source</a>
        </cite>
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-1">
      <b-col cols="md-6 sm-12">
        <h2>
          Setting Up
        </h2>
        <p>
          Using our AWS Student accounts we chose to run on a free-tier ml.t2.medium instance. For Analyzing, Ranking, and some of the machine learning the total cost was under $3. Using small Servers for the relatively small amount of work is perfect and much faster than running locally.
        </p>
        <p>
          During this set up process we opted to set up a Git repository on the SageMaker instance to make collaborating easier and faster. By putting our Git repository on the instance we can push our code to the project and share it with each other. It is also very convenient because if we decide we need a more powerful server to run some code in the future we can easily deploy the code without much setup on the new instance.
        </p>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img
          class="body-image"
          src="~/assets/page/edu/wsu/cs/383-cloud/sagemaker/setting-up.png"
          fluid
          alt="sagemaker-setting-up"
          @click="$parent.$parent.expandImage"
        />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-2">
      <b-col cols="md-6 sm-12">
        <h2>
          Using Conda Python Kernal
        </h2>
        <p>
          We ran a Conda Python Kernel to have a simple interface to run our analysis and visualizations. By doing this we did not need to worry about starting a cluster in AWS EMR and connect to it via a Livy Server.
        </p>
        <p>
          This was confusing at first because we are not very experienced with SageMaker. At first I was trying to use a PySpark kernel but that of course resulted in errors because there was no cluster to talk to. Once I switched to a Conda Python kernel everything was very straightforward and fast.
        </p>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img
          class="body-image"
          src="~/assets/page/edu/wsu/cs/383-cloud/sagemaker/using-conda-python.png"
          fluid
          alt="sagemaker-using-conda-python"
          @click="$parent.$parent.expandImage"
        />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-3">
      <b-col cols="md-6 sm-12">
        <h2>
          Importing Packages
        </h2>
        <p>
          SageMaker python kernels come with many common packages already installed - like pandas. However, it obviously does not have everything. For this reason we need to install libraries we want to use. There are many ways that this can be achieved but we found an easy way that does not require opening another kernel or terminal. You can run bash scripts in the python notebook by creating a new section and appending "!" to the beginning of the line. Then run it like any other code. This was very useful to us.
        </p>
        <p> To name a few packages we needed to import, we needed Facebook's <span style="font-weight:700">Prophet</span> for time series visualizations and <span style="font-weight:700">Apyori</span> for association rule mining.</p>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/sagemaker/importing-packages.png" fluid alt="sagemaker-saving-data" @click="$parent.$parent.expandImage" />
      </b-col>
    </b-row>
    <hr>
    <b-row id="toc-4">
      <b-col cols="md-6 sm-12">
        <h2>
          Saving Data
        </h2>
        <p>
          We saved data in three different ways.
          <ul>
            <li>
              We used code to generate new CSV files to streamline the process of machine learning and visualizations whenever we wanted to. The data sets are available on the <a href="https://github.com/CraftingGamerTom/wsu-computer-science/tree/master/CS-383_Cloud-Computing_2020-Spring" target="_blank">Github</a> for the project.
            </li>
            <li>
              As mentioned above, we set up our instance with our Git Repository. This made it fast and easy to share code with each other. To share we simply pushed the code to Git and we could pull each others code to our own instance and run it right away. No emails, messages, or copy-paste required. This is also convenient because we can share out notebook files with anyone. Check it out <a href="https://github.com/CraftingGamerTom/wsu-computer-science/tree/master/CS-383_Cloud-Computing_2020-Spring" target="_blank">here</a>.
            </li>
            <li>
              Finally, we also saved data to AWS S3 from the SageMaker Instance to practice keeping data in AWS for other purposes. This is extremely useful if we wanted to use other AWS Services to do other processing on the data. <a href="https://aws.amazon.com/quicksight/" target="_blank">AWS QuickSight</a> can connect to S3 to pull in data to create dashboard quickly.
            </li>
          </ul>
        </p>
      </b-col>
      <b-col style="text-align:center;" cols="md-6 sm-12">
        <b-img class="body-image" src="~/assets/page/edu/wsu/cs/383-cloud/sagemaker/saving-data.png" fluid alt="sagemaker-saving-data" @click="$parent.$parent.expandImage" />
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
        text: 'CS383 - Cloud, Parallel & Distributed Computing',
        to: '/edu/wsu/cs/383-cloud'
      }, {
        text: 'SageMaker',
        active: true
      }
    ]
  }
}
</script>
