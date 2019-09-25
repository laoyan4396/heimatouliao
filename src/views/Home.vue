<template>
<!-- 定义一个容器 -->
  <el-container>
 <!-- 先放置一个左侧的容器 -->
  <el-aside>左侧容器</el-aside>
  <!-- 右侧大容器 -->
  <el-container>
    <el-header>头部</el-header>
    <el-main>
      <!-- 中补区域 -->
       <router-view></router-view>
    </el-main>
    <!-- 二级路由容器 -->
     <router-view></router-view>
  </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
