<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{aTime}}</h2>
    <p>这是使用vuecli3.0构建</p>
    <p>作者：rency</p>
    <p>...........</p>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      aTime: null
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
