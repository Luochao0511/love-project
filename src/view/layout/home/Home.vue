<template>
  <el-container>
    <el-aside width="200px">
      <my-menu/>
    </el-aside>
    <el-container>
      <el-header class="bg-hex-c6e2ff">
        <MyHeader/>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import MyMenu from './My-Menu.vue'
import MyHeader from './My-header.vue'
import {defineComponent} from 'vue'

defineComponent([MyMenu, MyHeader]);
</script>


<style lang="less" scoped>
:deep(.el-aside) {
  width: auto;
}
</style>
