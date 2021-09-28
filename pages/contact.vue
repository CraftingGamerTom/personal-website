<template>
  <b-row>
    <b-col cols="12" offset="0" md="6" offset-md="3">
      <b-container v-if="submissionSuccess" class="container--1">
        <h2>You're Awesome!</h2>
        <p>I'll get back to you soon</p>
        <b-button class="container-bottom-btn" @click="onReset()">
          Reset
        </b-button>
      </b-container>
      <b-container v-else-if="submissionFailure" class="container--1">
        <h2>Could not process your request.</h2>
        <p>
          Try emailing me directly via tcrokicki@gmail.com.
          Your message:
        </p>
        <p>{{ form.message }}</p>
        <b-button class="container-bottom-btn" type="reset">
          Reset
        </b-button>
      </b-container>
      <b-container v-else id="index-contact-me" class="container--1">
        <h1 style="padding-top:25px;">
          What's Up?
        </h1>
        <h5 style="padding-top:15px;padding-bottom:40px;">
          Looking to build something together? Let's get started!
        </h5>

        <b-row>
          <b-col cols="8" offset="2">
            <b-form v-if="show" @submit="onSubmit" @reset="onReset">
              <b-form-group
                id="input-group-1"
                label="What should I call you?"
                label-for="input-name"
              >
                <b-form-input
                  id="input-name"
                  v-model="form.name"
                  placeholder="Your name"
                />
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
                />
                <br>
                <b-form-input
                  id="input-phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="Phone Number"
                />
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
                />
              </b-form-group>
              <b-button class="container-bottom-btn" type="submit">
                Submit
              </b-button>
            </b-form>
          </b-col>
        </b-row>

        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul style="text-align:left">
            <li v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
        </p>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
// validate the fields before post (like number being the ciorrect number of digits)
export default {
  data () {
    return {
      show: true,
      submissionSuccess: null,
      submissionFailure: null,
      errors: [],
      form: {
        name: null,
        email: null,
        phone: null,
        message: null
      }
    }
  },
  methods: {
    async onSubmit (event) {
      event.preventDefault()
      if (this.checkForm()) {
        const _this = this
        await this.$axios.post('/contact', this.form)
          .then((response) => {
            _this.$log.debug(response)
            _this.submissionSuccess = response.status
          }).catch((error) => {
            _this.$log.error(error)
            _this.submissionFailure = error.status
          })
      }
    },
    onReset () {
      // Reset our form values
      this.form.email = null
      this.form.name = null
      this.form.phone = null
      this.form.message = null
      this.errors = []
      this.submissionSuccess = null
      this.submissionFailure = null

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    checkForm () {
      this.errors = []

      if (!this.form.name) {
        this.errors.push('Name is required.')
      }
      if (!this.form.email && !this.form.phone) {
        this.errors.push('Phone number or email must be provided')
      }
      if (!this.form.message) {
        this.errors.push('Provide a message!')
      }

      if (this.errors.length) {
        return false
      }
      return true
    }
  }
}
</script>
