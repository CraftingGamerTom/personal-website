<template>
  <div>
    <section>
      <b-row>
        <b-col cols="12">
          <b-container id="index-recent-projects" class="container--1">
            <h2 style="padding-top:25px;padding-bottom:0px;">
              I'm a professional
            </h2>
            <p style="padding-top:0px;padding-bottom:0px;margin-bottom:0px;">
              Have a look for yourself with my resume customizer.
            </p>

            <b-row>
              <b-col cols="8" offset="2" md="6" offset-md="3">
                <div>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    @change="onCategorySelected()"
                    size="sm"
                    class="mt-3"
                  ></b-form-select>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </section>
    <section id="resume">
      <b-row>
        <b-col cols="12" offset="0" md="6" offset-md="3">
          <b-container
            id="index-recent-projects"
            class="container--1 resume-content"
          >
            <h3 style="padding-top:15px;">
              Thomas Rokicki <small style="font-size:1rem;">(he/him)</small>
            </h3>
            <h5 style="float:left">Rutland, MA</h5>
            <h5 style="float:right">thomasrokicki.com</h5>
            <hr style="clear:both;" />
            <h6 style="padding-top:15px;text-decoration: underline;">
              Experience
            </h6>
            <div v-for="job in jobs" :key="job.id">
              <b-row
                class="resume-item"
                v-if="
                  (selected == null && sortedProjects == null) ||
                    (sortedProjects != null && sortedProjects.has(job.id))
                "
              >
                <!-- only show job if relevant project -->
                <b-col cols="12">
                  <h5 style="float:left;font-weight:800;">
                    {{ job.employer }}
                  </h5>
                  <p style="float:right;">
                    {{ job.startDate | friendlyDate_Month_Year }} -
                    {{
                      job.endDate
                        | ifDateNullSetPresent
                        | friendlyDate_Month_Year
                    }}
                  </p>

                  <p style="clear:both;">
                    <strong>{{ job.position }}</strong>
                  </p>

                  <p class="resume-item-description">
                    {{ job.roleDescription }}
                  </p>

                  <!-- get stored project from main list or sorted list -->
                  <div v-if="selected == null && sortedProjects == null">
                    <p
                      v-for="project in job.projects"
                      :key="project.id"
                      class="resume-item-description"
                    >
                      {{ project.name }}
                    </p>
                  </div>
                  <div v-else>
                    <p
                      v-for="project in sortedProjects.get(job.id)"
                      :key="project.id"
                      class="resume-item-description"
                    >
                      {{ project.name }}
                    </p>
                  </div>
                </b-col>
              </b-row>
            </div>

            <h6 style="padding-top:15px;text-decoration: underline;">
              Education
            </h6>
            <div v-for="educationItem in educations" :key="educationItem.id">
              <b-row
                v-if="
                  (selected == null && sortedEducation == null) ||
                    (sortedEducation != null &&
                      sortedEducation.includes(educationItem.id))
                "
                class="resume-item"
              >
                <b-col cols="12">
                  <h5 style="float:left;font-weight:800;">
                    {{ educationItem.university }}
                  </h5>
                  <p style="float:right;">
                    {{ educationItem.startDate | friendlyDate_Year }} -
                    {{
                      educationItem.endDate
                        | ifDateNullSetPresent
                        | friendlyDate_Year
                    }}
                  </p>

                  <p style="clear:both;">
                    <strong
                      >{{ educationItem.degree }},
                      {{ educationItem.major }}</strong
                    >
                    {{ educationItem.gpa }} GPA
                  </p>

                  <p class="resume-item-description">
                    {{ educationItem.honors }}, {{ educationItem.groups }}
                  </p>
                </b-col>
              </b-row>
            </div>

            <h6 style="padding-top:15px;text-decoration: underline;">Skills</h6>

            <!-- <div v-if="recentProjects.fetchError" class="text--error">
                    <h3>Error loading recent projects</h3>
                    <p>tttt</p>
                    </div>
                    <b-row v-else>
                    <b-col cols="12" md="6" lg="3" v-for="project in recentProjects.projects" :key="project.id">
                        <b-container class="container--2"> 
                        <h1>t</h1>
                        </b-container>
                    </b-col>
                    </b-row> -->

            <b-row>
              <b-col cols="8" offset="2"> </b-col>
            </b-row>

            <b-row>
              <b-col style="text-align:center;" cols="12">
                <b-button style="margin-bottom:15px;" :to="'/contact'"
                  >Contact Me</b-button
                >
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "CV (All Experience)" },
        { value: "fullstack", text: "Full Stack Engineer" },
        { value: "frontend", text: "Web Frontend Developer" },
        { value: "mobile", text: "Mobile Developer" },
        { value: "backend", text: "Backend Engineer" },
        { value: "software-developer", text: "Software Developer" },
        { value: "test-engineer", text: "Test Engineer" },
        { value: "entry-level", text: "Entry Level" }
      ],
      jobs: [],
      educations: [],
      sortedProjects: null,
      sortedEducation: null
    };
  },
  async mounted() {
    try {
      this.jobs = await this.$strapi.$jobs.find({ _sort: "endDate:DESC" });
      this.educations = await this.$strapi.$educations.find({
        _sort: "endDate:DESC"
      });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async onCategorySelected() {
      if (this.selected) {
        const response = await this.$strapi.$categories.find({
          slug: this.selected
        });
        const category = response[0];

        // filter projects
        let projectsMap = new Map();
        for (let i = 0; i < category.projects.length; i++) {
          let project = category.projects[i];
          const jobId = project.job;
          if (projectsMap.has(jobId)) {
            let sorted = projectsMap.get(jobId);
            sorted.push(project);
            projectsMap.set(jobId, sorted);
          } else {
            projectsMap.set(jobId, [project]);
          }
        }
        this.sortedProjects = projectsMap;

        // filter educations
        let educationList = [];
        for (let i = 0; i < category.educations.length; i++) {
          educationList.push(category.educations[i].id);
        }
        this.sortedEducation = educationList;
      } else {
        this.sortedProjects = null;
        this.sortedEducation = null;
      }
    }
  },
  filters: {
    ifDateNullSetPresent(date) {
      if (date) {
        return date;
      } else {
        return "Present";
      }
    },
    friendlyDate_Year(date) {
      if (date === "Present") return date;
      let friendlyDate = new Date(date);
      return friendlyDate.getFullYear();
    },
    friendlyDate_Month_Year(date) {
      var month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      if (date === "Present") return date;
      let friendlyDate = new Date(date);
      return (
        month[friendlyDate.getUTCMonth()] + " " + friendlyDate.getFullYear()
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#resume {
  user-select: none;

  & .resume-content {
    // box-shadow: none;
    // border-radius: 1px;
    // background-color: aliceblue;
    text-align: left;
  }
  & .resume-item {
    padding-bottom: 20px;
    & h6,
    p {
      padding-top: 0;
      margin-bottom: 0;
    }
    & .resume-item-description {
      line-height: 1.1em;
      font-size: 0.9em;
      padding-top: 2px;
    }
  }
}
</style>
