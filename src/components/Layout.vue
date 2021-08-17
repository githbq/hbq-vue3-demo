<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <slot name="left"></slot>
    </el-aside>
    <el-container>
      <el-header style="text-align: left; font-size: 12px">
        <slot name="top"></slot>
      </el-header>
      <el-main><slot name="center"></slot></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {},
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
