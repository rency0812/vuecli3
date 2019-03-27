<template>
  <div class="about">
    <rency-test>
      <div slot="rency-header" class="rency-header"></div>
      <div slot="main-content" class="main-content"></div>
      <div slot="rency-footer" class="rency-footer"></div>
    </rency-test>
    <h1>This is an about page</h1>
    <h2>{{aTime}}</h2>
    <p>这是使用vuecli3.0构建</p>
    <p>作者：rency</p>
    <p>{{num}}</p>
    <p>...........</p>
  </div>
</template>
<script>
// import bus from '../eventBus.js'

export default {
  name: 'about',
  data () {
    return {
      aTime: null,
      num: 0
    }
  },
  mounted () {
    this.aTime = this.$store.state.token
  },
  watch: {
    '$store.state.token' (v) {
      this.aTime = v
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
