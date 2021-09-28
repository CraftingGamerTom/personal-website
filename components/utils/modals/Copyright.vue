<template>
  <div style="margin-top:25px;">
    <p style="text-align:center;">
      <nuxt-link :to="'/licenses'">
        Licenses
      </nuxt-link>
      |
      <nuxt-link :to="'/changelog'">
        Changelog
      </nuxt-link>
    </p>
    <h5 id="copyright" style="text-align:center;">
      &copy; Thomas Rokicki
      <script>
        document
        .getElementById("copyright")
        .appendChild(document.createTextNode(new Date().getFullYear()));
      </script>
    </h5>
    <h5 style="text-align:center;">
      Made with
      <QuickIcon
        :location="''"
        :color="'red'"
        :name="'love_2154176'"
        :width="'20'"
        :size="'1'"
        viewBox="0 0 100 100"
      />
      in Worcester, MA
    </h5>
  </div>
</template>

<script>
import { QuickIcon } from '@craftinggamertom/webslack-bits'
export default {
  components: {
    QuickIcon
  }
}
</script>
