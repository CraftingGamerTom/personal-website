<template>
  <div>
    <b-row>
      <b-col cols="md-6 sm-12">
        <h2>SageMaker</h2>
        <p>Amazon SageMaker is a service that provides many components to make computing and deploying machine learning models quickly and in a distributed fashion. Although the use of a Spark distributed Livy server was not required for this small dataset, it was a great opportunity to become more familiar with how to use SageMaker.</p>
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
          Using AWS Student accounts to run on a free-tier ml.t2.medium instance for Analyzing, Ranking, and some of the machine learning was cheap for this project. The total cost was under $3. Using small Servers for the relatively small amount of work is perfect and much faster than running locally.
        </p>
        <p>
          During the set up process a Git repository was used on the SageMaker instance to make collaborating easier and faster. By putting a Git repository on the instance latest changes could be pushed and shared. It is also very convenient for scaling. If a more powerful server was required to run some code in the future a simple <code>git clone</code> can easily deploy the code on the new instance.
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
          A Conda Python Kernel provided a simple interface to run analysis and visualizations. By doing this there was no need to worry about starting and connecting to a cluster in AWS EMR via a Livy Server.
        </p>
        <p>
          This was confusing with little previous experience with SageMaker. At first, a PySpark kernel was used but it resulted in errors because there was no cluster to talk to. After switching to a Conda Python kernel everything was very straightforward and fast.
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
          SageMaker python kernels come with many common packages already installed - like pandas. However, by default, it did not have many libraries installed, so manual installation of required. There are many ways that this can be achieved. An easy way that does not require opening another kernel or terminal is to run bash scripts in the python notebook by creating a new section and appending "!" to the beginning of the line. Then run it like any other code.
        </p>
        <p> To name a few packages that were imported; Facebook's <span style="font-weight:700">Prophet</span> for time series visualizations and <span style="font-weight:700">Apyori</span> for association rule mining.</p>
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
          Data was saved in three different ways.
          <ul>
            <li>
              Code was created to generate new CSV files and streamline the process of machine learning and visualizations. The data sets are available on the <a href="https://github.com/CraftingGamerTom/wsu-computer-science/tree/master/CS-383_Cloud-Computing_2020-Spring" target="_blank">Github</a> for the project.
            </li>
            <li>
              As mentioned above, a Git repository was set up on the instance. This made it fast and easy to share code with each other. To share we simply pushed the code to Git and we could pull the remote code to the instance in need then run it right away. No emails, messages, or copy-paste required. This is also convenient sharing notebook files and code with anyone. Check it out <a href="https://github.com/CraftingGamerTom/wsu-computer-science/tree/master/CS-383_Cloud-Computing_2020-Spring" target="_blank">here</a>.
            </li>
            <li>
              Finally, data was saved to AWS S3 from the SageMaker Instance to practice keeping data in AWS for other purposes. S3 can be extremely useful when using other AWS Services to do other processing on data. <a href="https://aws.amazon.com/quicksight/" target="_blank">AWS QuickSight</a> can connect to S3 to pull in data to create dashboard quickly.
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
        text: 'Projects',
        to: '/projects'
      }, {
        text: 'Worcester State University',
        to: '/projects/wsu'
      }, {
        text: 'CS383 - Cloud, Parallel & Distributed Computing',
        to: '/projects/wsu/383-cloud'
      }, {
        text: 'SageMaker',
        active: true
      }
    ]
  }
}
</script>
