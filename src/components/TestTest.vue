<template>
    <div class="container">
        <div class="node-box" v-for="(item, index) of groups" :key="index">
            <p class="node-box__title">{{ item }}</p>
            <template v-for="(elem, indexElem) of inputData" :key="indexElem">
                <div class="node-box__item" v-if="elem.group === item">
                    <p class="node-box__title">{{ elem.name }}</p>
                    <input type="text">
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { uniqueNameGroups } from '../helpers/uniqueGroups'

export default {
  props: ['modelValue', 'inputData'],
  emits: ['update:modelValue'],

  computed: {
    groups () {
      return uniqueNameGroups(this.inputData)
    }
  }
}
</script>

  <style>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
  }
  .node-box__title{
    color: green
  }
  .node-box__item{
    border: 1px solid #000;
    margin: 14px 0;
    padding: 10px;
  }
  </style>
