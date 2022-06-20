<template>
  <div class="min-h-screen min-w-screen justify-center flex items-center">
    <el-card shadow="hover" class="w-100 opacity-80">
      <template #header>
        <div class="text-center pink-200 text-hex-C75450">登录</div>
      </template>
      <el-form ref="ruleFormRef" :model="form" status-icon :rules="rules" label-width="70">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input show-password v-model="form.password" clearable type="password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="w-full" type="primary" @click="goHome(ruleFormRef)">
        登录
      </el-button>
    </el-card>
    <div class="videoContainer">
      <video class="min-w-screen min-h-screen" autoplay loop muted>
        <source src="https://img-baofun.zhhainiao.com/market/133/2366564fa6b83158208eb3181752a8d6_preview.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>


<script setup lang="ts">
import type {FormInstance, FormRules} from 'element-plus'
import router from "/@/router";

type form = { username: String, password: String }
const ruleFormRef = ref<FormInstance>()//获取ref
const form: form = reactive({username: '', password: ''})
const rules = reactive<FormRules>({
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {pattern: /^(\w){5,25}$/, message: '只能输⼊5-25个字母、数字、下划线'}
  ]
})
// 点击登录按钮校验并且跳转到home页面
const goHome = async (formName: FormInstance | undefined) => {
  console.log(formName);
  if (!formName) return
  await formName.validate((valid, fields) => {
    if (valid) {
      router.push('/home');
    } else {
      console.log('返回了错误的数组', fields)
    }
  })
}
</script>


<style lang="less" scoped>
.videoContainer {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -100;

}

/deep/.el-aside {
  transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -moz-transition: width 0.15s;
  -o-transition: width 0.15s;
}

.videoContainer:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  top: 0;
  left: 0;
  background: rgba(25, 29, 34, .65);
}
</style>
