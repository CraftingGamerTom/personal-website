<template>
  <b-row>
    <b-col cols="12" offset="0" md="6" offset-md="3">
      <b-container id="index-recent-projects" class="container--1">
        <h1 style="padding-top:25px;">What's Up?</h1>
        <h5 style="padding-top:15px;padding-bottom:40px;">
          Looking to build something together? Let's get started!
        </h5>

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
          <b-col cols="8" offset="2">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="What should I call you?"
                label-for="input-name"
              >
                <b-form-input
                  id="input-name"
                  v-model="form.name"
                  placeholder="Your name"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="How may I respond?"
                label-for="input-email"
              >
                <b-form-input
                  id="input-email"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
                <br />
                <b-form-input
                  id="input-phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Message"
                label-for="input-message"
              >
                <b-form-textarea
                  id="input-message"
                  v-model="form.message"
                  placeholder="Type your message here"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-col>
        </b-row>

        <b-button style="margin-bottom:15px;" :to="'/projects'"
          >View All</b-button
        >
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
// validate the fields before post (like number being the ciorrect number of digits)
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
