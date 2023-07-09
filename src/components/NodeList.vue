<template>
  <div class="node-wrapper">
    <div class="node-box" v-for="(item, index) of groups" :key="index">
      <p class="node-box__title">{{ item.group }}</p>
      <div
        class="node-box__item"
        v-for="(itemNode, indexNode) of item.items"
        :key="indexNode"
      >
        <p v-if="itemNode.name && !itemNode.isNew" class="node-box__title">
          {{ itemNode.name }}
        </p>
        <input
          class="node-box__input"
          type="text"
          v-else
          :value="itemNode.name"
          @input="inputItemNodeNameValue($event.target.value,itemNode)"
        />
        <input
          class="node-box__input"
          type="text"
          :value="itemNode.value"
          @input="inputItemNodeValue($event.target.value,itemNode)"
        />
      </div>
      <button
        class="btn-plus"
        @click="addItemNode(item.group, inputData.length)"
      >+</button>
    </div>
  </div>
</template>

<script>
import { objectNode } from '../helpers/objectNode'

export default {
  props: ['modelValue', 'inputData'],
  emits: ['update:modelValue'],
  data () {
    return {
      ChangedData: ''
    }
  },
  methods: {
    inputItemNodeNameValue (newValue, item) {
      this.ChangedData[item.id].name = newValue
      this.sendData()
    },
    inputItemNodeValue (newValue, item) {
      this.ChangedData[item.id].value = newValue
      this.sendData()
    },
    addItemNode (nameGroup, id) {
      this.ChangedData.push({
        group: nameGroup,
        name: '',
        value: '',
        id,
        isNew: true
      })
      this.sendData()
    },
    sendData () {
      this.$emit('update:modelValue', this.ChangedData)
    }
  },
  watch: {
    ChangedData () {
      this.ChangedData = this.inputData
    }
  },
  computed: {
    groups () {
      return objectNode(this.inputData)
    }
  },
  mounted () {
    this.ChangedData = this.inputData
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.node-box__title {
  color: green;
}
.node-box__input {
  margin: 10px 0;
}
.node-box__item {
  border: 1px solid #000;
  margin: 14px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-plus {
  color: #fff;
  background-color: #008080;
  border: none;
  width: 100%;
  cursor: pointer;
}
</style>
