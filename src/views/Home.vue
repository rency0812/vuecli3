<style lang="scss" scoped>
  .home{
    position: relative;
    h2{
      font-size: 50px;
      color: dodgerblue;
    }
    .tag-box{
      position: absolute;
      top: 20px;
      left: 30px;
      border: 1px solid #eeeeee;
      background: #fff;
    }
    .form-box{
      left: auto;
      right: 30px;
    }
  }
</style>

<template>
  <div class="home">
    <h2>{{nTime}}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App 3.0"/>
    <div v-if="data" class="tag-box">
      <div v-for="v in data" :key="v.id">
        <el-tag>{{v.id}}</el-tag>
        <el-tag type="success">{{v.name}}</el-tag>
        <el-tag type="info">{{v.age}}</el-tag>
      </div>
      <!-- <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag> -->
    </div>
    <div class="form-box tag-box">
      <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input type="text" v-model.number="ruleForm2.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
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
      nTime: null,
      data: null,
      ruleForm2: {
        name: '',
        age: ''
      }
    }
  },
  methods: {
    getData () {
      axios.get('/api/getValue').then(res => {
        this.data = res.data
      })
    },
    add () {
      if (!this.ruleForm2.name || !this.ruleForm2.age) {
        this.$message({
          message: '不能为空，请填写',
          type: 'warning'
        })
        return
      }
      if (!Number.isInteger(this.ruleForm2.age)) {
        this.$message('请输入纯数字')
        return
      }
      axios.get('/api/addValue', { params: this.ruleForm2 }).then(res => {
        if (res.data.code === 0) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
          this.getData()
        } else {
          this.$message({
            message: '添加失败',
            type: 'error'
          })
        }
      })
    },
    reset () {
      Object.keys(this.ruleForm2).forEach(k => {
        this.ruleForm2[k] = ''
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
