<template>
<div class="temp">
  <div>
    <slot name="head">
      <p :class="[type]">{{msg}}你好啊</p>
    </slot>
  </div>
  <p>
    <slot name="main">我好啊</slot>
  </p>
</div>
</template>
<script>
export default {
  name: 'Temp',
  data () {
    return {
      msg: 'Hello',
      type: null
    }
  }
}
</script>
<style lang="scss" scoped>
.error {
  color: red;
}
</style>
