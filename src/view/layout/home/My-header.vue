<template>
  <div class="my-header">
    <div @click="getMenus.isCollapse=!getMenus.isCollapse" class="header-icon">
      <el-icon :size="25" v-if="getMenus.isCollapse">
        <expand/>
      </el-icon>
      <el-icon :size="25" v-else>
        <Fold/>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Fold, Expand} from '@element-plus/icons-vue'
import {menus} from "/@/../store";

const getMenus = menus()
</script>
<style scoped>
.my-header {
  @apply w-full h-50px box-border
}

.header-icon {
  @apply text-gray-500 w-50px h-50px  flex justify-center  items-center  hover:bg-gray-500/5;
}
</style>
