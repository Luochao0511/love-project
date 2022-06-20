<template>
  <div class="w-full h-full">
    <div @click="getMenus.isCollapse=!getMenus.isCollapse" class="header-icon">

      <el-icon v-if="getMenus.isCollapse">
        <svg class="el-icon-delete"></svg>
      </el-icon>
      <el-icon v-else>
          <Fold/>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Fold} from '@element-plus/icons-vue'
import {menus} from "/@/../store";

const getMenus = menus()
</script>


<style scoped>
.header-icon {
  @apply text-gray-500 w-20 flex justify-items-center leading-none rounded-2xl py-1 items-center
}
</style>
