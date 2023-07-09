<template>
  <div class="container">
    <div class="warpper">
      <NodeList class="col" v-if="fileds" :input-data="fileds" v-model="data"/>
      <div class="col show-object">{{ data }}</div>
    </div>
  </div>
</template>

<script>
import NodeList from './components/NodeList.vue'
import { getList } from './service/getNodeList'

export default {
  name: 'App',
  components: { NodeList },
  data () {
    return {
      data: '',
      fileds: null
    }
  },
  watch: {
    data (newValue) {
      this.fileds = newValue
    }
  },
  async mounted () {
    this.fileds = await getList()
    this.fileds.forEach((element, index) => {
      element.id = index
      element.value = ''
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.warpper{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.col{
  max-width: 210px;
  width: 100%;
}

.show-object{
  white-space: pre;
  text-align: left;
  font-weight: 700;
}
</style>
