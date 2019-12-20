import Vue from 'vue'
import Tempvue from './components/temp.vue'
import Tempvue2 from './components/temp2.vue'
const Temp = Vue.extend(Tempvue)

const o = new Temp({
  el: document.createElement('div')
})
const msg = msg => {
  if (msg) {
    o.type = 'message'
    o.msg = msg
  }
}
msg.error = msg => {
  if (msg) {
    o.type = 'error'
    o.msg = msg
  }
}

export default {
  install (Vue) {
    Vue.component('v-temp', Tempvue)
    Vue.component('v-temp2', Tempvue2)
    document.body.appendChild(o.$el)
    Vue.prototype.$msg = msg
  }
}
