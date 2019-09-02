<template>
    <div class="hello">
        <div class="logo">
            <img src="/static/icons/logo.png" alt="">
        </div>
        <div class="loginContent">
            
            <h4>用户登录</h4>
            <div class="loginForm">
                <el-form ref="ruleForm" :model="ruleForm" :rules="rules" >
                    <el-form-item  prop="userName" style=" margin-top:30px;">
                        <el-input v-model="ruleForm.userName" placeholder="请输入用户名称"  prefix-icon="element-icons el-iconyonghu" style="width:100%;"></el-input>
                    </el-form-item>
                    <el-form-item  prop="userPassword" style=" margin-top:30px;">
                        <el-input type="password" v-model="ruleForm.userPassword" placeholder="请输入登录密码"  prefix-icon="element-icons el-iconsuo" style="width:100%;color:#000" autocomplete="off"></el-input>
                    </el-form-item>

                </el-form>
              <div class="login-but"  
              @click="loginIndex('ruleForm')">登录</div>
            </div>
            
        </div>
    
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm:{
        userName: '',
        userPassword: ''
      },
      rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
             { min: 5, max: 12, message: '用户名须由字母开头的，5-12个数字和字母组成', trigger: 'change' }

          ],
          userPassword: [
             { required: true, message: '请输入登录密码', trigger: 'blur' },
          ]
        },
    };
  },
  methods:{
      loginIndex(ruleForm){
          this.$router.push({path:"/home/enterprise"});
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
    width: 100%;
    min-height: 100%;
    background-image: url(/static/icons/loginbg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.logo{
    width: 100%;
    min-height:200px;
    text-align: center;
    position: relative;
    img{
      
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
          display: inline-block;
        width:20%;
        height:44%;
        margin:auto;
    }
}
.loginContent{
    width: 580px;
    height: 360px;
    margin:auto ;
    vertical-align: middle;
    // background: url(/static/icons/login_contentbg.png) no-repeat;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    h4{
        font-size: 20px;
        margin:60px auto 10px;
    }
    .loginForm{
        width: 270px;
        height: 180px;
        margin:auto;
    }
    .login-but{
        width: 60%;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        border-radius:4px;
        color: #fff;
        background:url('/static/icons/logobtn.png') no-repeat;
        background-size: 100% 100%;
        margin:20px auto 0;
        border-radius: 4px;
        cursor: pointer;
    }
}
</style>
