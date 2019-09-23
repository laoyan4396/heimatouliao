<template>
  <div class="login">
      <!-- 使用elementUi 组件 -->
     <el-card class="login-card">
         <!--  匿名插槽  -->
         <div class="title">
             <img src="../../assets/img/logo_index.png" alt="">
         </div>
         <!-- 表单由el from 包裹的 -->
         <el-form :model="loginForm" :rules="loginRules" style="margin-top:20px" >
              <el-form-item prop="mobile">
                  <!-- 手机号 绑定V-model -->
                   <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
              </el-form-item>
            <el-form-item prop="code">
                <!-- 数据校验需要prop agree rules -->
                 <!-- 上面验证码 下面发送验证码 -->
             <el-input  v-model="loginForm.code" placeholder="请输入验证码" style="width:65%"></el-input>
             <el-button style="float:right">发送验证码</el-button>
            </el-form-item>
            <el-form-item prop="agree">
                 <el-checkbox  v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
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
  data () { // rulr 当前规则 value当前的表单规则 callback 回调函数
    let validator = function (rule, value, callBack) {
      // 正常模式
      // if (value) {
      //   // 正确是勾线协议
      //   callBack()
      // } else {
      //   // budui 没勾选协议 Error对象就是提示你必须同意要不不能下一步
      //   callBack(new Error('您必须同意湖人总冠军'))
      // }
      // 三元表达式
      value ? callBack() : callBack(new Error('您必须同意湖人总冠军'))
    }
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议

      },
      loginRules: {
        // 决定着校准规则 key（字段名）：value（数组对象）=》 一个对象
        //   就是一个校准规则  required 为true 就表示了该字段必填 如果不填
        // 就会提示信息
        mobile: [{ required: true, message: '请输入你的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '请输入的你的验证码' },
        // 验证码为6位数字
          { pattern: /^\d{6}$/, message: '验证码为6位数字' } ],
        // 自定义函数 在上面给封装了
        agree: [{ validator }]

      } // 登录规则集合对象
    }
  }

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
