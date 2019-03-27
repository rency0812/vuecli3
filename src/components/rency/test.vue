<template>
  <div class="rency-component">
    <slot name="rency-header" class="rency-header">
      <div>这是插槽的头部</div>
    </slot>
    <slot name="main-content" class="main-content">
      <div>这是主内容区</div>
    </slot>
    <slot name="rency-footer" class="rency-footer">
      <div>这是页脚</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'rency-test',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .rency-header{
    height: 70px;
    background: #ccc;
    text-align: center;
  }
  .main-content{
    text-align: center;
  }
  .rency-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #000;
    text-align: center;
    color: #fff;
  }
</style>
