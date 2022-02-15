<template>
  <div>Home</div>
  <button @click="counter.add()">新增</button>
  <button @click="counter.addNum(2)">新增指定数量</button>
  <p>新增数量{{ counter.count }}</p>
</template>

<script setup lang="ts">
import { userCountStore } from '../store'
const counter = userCountStore()
</script>
