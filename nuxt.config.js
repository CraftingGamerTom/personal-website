import webpack from 'webpack'
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */

  head: {
    title: 'Thomas Rokicki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'Thomas Rokicki' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'description', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Let's Build Something!", name: 'description' },
      { hid: 'ogTitle', content: 'Thomas Rokicki', property: 'og:title' },
      { hid: 'ogDescription', name: 'description', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Let's Build Something!", property: 'og:description' },
      { hid: 'ogUrl', content: 'https://www.thomasrokicki.com/', property: 'og:url' },
      { hid: 'ogImage', content: 'https://www.thomasrokicki.com/v2/resources/img/header-bg.jpg', property: 'og:image' },
      { hid: 'siteName', content: 'Thomas Rokicki', property: 'og:site_name' },
      { hid: 'propName', content: 'Thomas Rokicki', itemprop: 'name' },
      { hid: 'propDescription', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Technology / Let's Build Something!", itemprop: 'description' },
      { hid: 'propImage', content: 'https://www.thomasrokicki.com/v2/resources/img/header-bg.jpg', itemprop: 'image' },
      { hid: 'twitterCard', content: 'summary_large_image', name: 'twitter:card' },
      { hid: 'twitterTitle', content: 'Thomas Rokicki', name: 'twitter:title' },
      { hid: 'twitterDescription', content: "Full Stack Software Engineer / Java Developer / Spring Boot Experience / Computer Science Major / Worcester State University / Quinsigamond Community College / Snowboarding / Gardening / Farming / Plant Lover / Let's Build Something!", name: 'twitter:description' },
      { hid: 'twitterImage', content: 'https://www.thomasrokicki.com/v2/resources/img/header-bg.jpg', name: 'twitter:image' },
      { hid: 'application_url', name: 'application-url', content: 'https://www.thomasrokicki.com' },
      { hid: 'citation_author', name: 'citation_author', content: 'Thomas Rokicki' },
      { hid: 'citation_author_email', name: 'citation_author_email', content: 'tcrokicki@gmail.com' },
      { hid: 'geo_region', name: 'geo.region', content: 'US-MA' },
      { hid: 'license', name: 'license', content: 'MIT' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      // TODO Host font files ourselves https://stackoverflow.com/questions/51436344/how-to-embed-font-to-all-page-with-nuxt-js
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900&display=swap' }
    ],
    script: [
      // {
      //   hid: 'jquery',
      //   src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js',
      //   type: 'text/javascript',
      //   callback: () => { this.isJqueryLoaded = true }
      // }, {
      //   hid: 'textfit', src: '~/static/common/js/libs/jquery/fittext.js', defer: true
      // },
      { // slide-out-navigation
        hid: 'gsap',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js',
        defer: true
      }, { // slide-out-navigation
        hid: 'cssruleplugin',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js',
        defer: true
      }
    ]
  },
  /*
  ** Router Settings
  */
  router: {
    trailingSlash: false,
    middleware: [
      'breadcrumbItems'
      //      'theme'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    'nuxt-animejs',
    ['@nuxtjs/dotenv', { systemvars: true, filename: '.env' }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-logger',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources', // https://strapi.io/documentation
    '@nuxtjs/svg',
    'nuxt-logger',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/redirect-module
    '@nuxtjs/redirect-module',
    // Doc: https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // Doc: https://www.npmjs.com/package/nuxt-fontawesome
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  styleResources: {
    scss: [
      '~assets/style/_constants.scss',
      '~assets/style/_media.scss',
      '~assets/style/_colors.scss',
      '~assets/style/_fonts.scss',
      '~assets/style/_borders.scss',
      '~assets/style/transitions.scss',
      '~assets/style/global/common.scss',
      '~assets/style/global/components.scss',
      '~assets/style/global/grid.scss',
      '~assets/style/global/scroll.scss',
      '~assets/style/global/forms/checkbox.scss',
      '~assets/style/global/forms/input.scss'
    ]
  },
  logger: {
    isEnabled: true, // true or false, defaults to true
    logLevel: 'debug' // debug, info, warn or error, defaults to debug
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: '/api'
  },
  /*
  * Strapi Configuration
  */
  strapi: {
    entities: ['educations', 'projects', 'jobs', 'categories', 'tags', 'licenses', 'changelog'],
    url: process.env.STRAPI_DOMAIN
  },
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it,
  markdownit: {
    runtime: true // Support `$md()`
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/,
          use: [{
            loader: require.resolve('eslint-loader'),
            options: {
              emitWarning: true,
              failOnError: false
            }
          }]
        })
      }
    },
    /*
    ** Include libraries
    */
    vendor: [],
    /*
    ** webpack config
    */
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]

  },
  /*
  ** Redirect Users from link with a trailin slash, will break pages if removed
  ** See https://github.com/nuxt-community/redirect-module
  */
  redirect: [
    {
      // eslint-disable-next-line
      from: '(?!^\/$|^\/[?].*$)(.*\/[?](.*)$|.*\/$)',
      to: (from, req) => {
        const base = req._parsedUrl.pathname.replace(/\/$/, '') // We take pathname instead of req.url because of the query parameters
        const search = req._parsedUrl.search
        return base + (search != null ? search : '')
      },
      statusCode: 301
    }
  ],
  serverMiddleware: ['~/api/contact.js']
}
