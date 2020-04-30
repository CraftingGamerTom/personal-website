<template>
  <div>
    <p><em id="lastModified">Unknown Revised date</em></p>
  </div>
</template>

<script>
export default {
  mounted () {
    // Script to set the last modified date
    const value = document.lastModified
    console.log(value)
    document.getElementById('lastModified').innerHTML = 'Revised ' + value
  }
}
</script>
