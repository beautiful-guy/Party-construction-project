<template>
    <div class="login-wrapper">
        <div class="login-header">
            <img src="../../assets/left_arrow2.png" @click="skipToIndex" >
            <span>登录</span>
        </div>
        <div class="login-main">
            <div class="img-wrapper">
                <img src="../../assets/header_img.png" alt="">
            </div>
            <form class="oneOfForm">
                <input class="form-item" type="text" placeholder="身份证号">
                <input class="form-item form-item2" type="password" placeholder="密码">
                <mt-button type="danger" size="large">登录</mt-button>
            </form>
        </div>
    </div>
</template>

<script>
  import { Button  } from 'mint-ui';
  export default {
    name: "index",
    component:{
      Button
    },
    data(){
      return{

      }
    },
    methods:{
      skipToIndex(){
        this.$router.push('/index')
      }
    }
  }
</script>

<style scoped lang="scss">
.login-wrapper{
    background-color: #c50206;
    .login-header{
        height: 43px;
        text-align: center;
        padding-left: 10px;
        color: #fff;
        line-height: 43px;
        font-size: 18px;
        font-weight: 500;
        img{
            float: left;
            width: 25px;
            margin-top: 8px;
        }
    }
    .login-main{
        width: 100%;
        height: 624px;
        text-align: center;
        .img-wrapper{
            width: 203px;
            height: 55px;
            margin: 30px auto;
            img{
                width: 203px;

            }
        }
        .oneOfForm{
            width: 300px;
            height: 155px;
            margin: 0 auto;
            .form-item{
                width: 288px;
                height: 40px;
                padding: 0 7px;
                border: 1px solid rgba(255,255,0,.7);
                border-radius: 4px;
                background-color: transparent;
            }
            .form-item::-webkit-input-placeholder{
                color: #fff;
                font-size: 16px;
                font-weight: 300;
            }
            .form-item2{
                margin: 10px 0;
            }

        }
    }
}
</style>