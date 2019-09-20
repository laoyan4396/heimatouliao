<template>
  <div class="login">
      <!-- 使用elementUi 组件 -->
     <el-card class="login-card">
         <!--  匿名插槽  -->
         <div class="title">
             <img src="../../assets/img/logo_index.png" alt="">
         </div>
         <!-- 表单由el from 包裹的 -->
         <el-form >
              <el-form-item>
                   <el-input></el-input>
              </el-form-item>
            <el-form-item>
                 <!-- 上面验证码 下面发送验证码 -->
             <el-input style="width:65%"></el-input>
             <el-button style="float:right">发送验证码</el-button>
            </el-form-item>
            <el-form-item>
                 <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%">登录</el-button>
            </el-form-item>
         </el-form>
     </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 // scoped  只会对当前的的页面插入
// 如果在style里面写 less 就要给一个lang 属性
.login {
  background-image: url('../../assets/img/login_bg.jpg');
  height:100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  //后面三个属性就是改变样式的 记住会好很多的

  .login-card {
      width:440px ;
      height: 330px;
     .title {
         text-align: center;
         img {
             height: 45px;
         }
     }
  }
  /* 自适应图片 */
}

</style>
