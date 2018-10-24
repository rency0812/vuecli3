<style lang="scss" scoped>
  .home{
    h2{
      font-size: 50px;
      color: dodgerblue;
    }
  }
</style>

<template>
  <div class="home">
    <h2>{{nTime}}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App 3.0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import moment from 'moment'
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      nTime: null
    }
  },
  methods: {
    getData () {
      axios.get('/api/login', { params: { id: 1 } }).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    this.getData()
    setInterval(() => {
      this.nTime = moment().format('YYYY MM DD HH:mm:ss')
      this.$store.state.token = this.nTime
    }, 1000)
  },
  components: {
    HelloWorld
  }
}
</script>
