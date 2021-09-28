export default {
  strapi: {
    domain: process.env.STRAPI_DOMAIN,
    roles: {
      contactMe: {
        token: process.env.STRAPI_API_KEY_CONTACT_ME
      }
    }
  }
}
