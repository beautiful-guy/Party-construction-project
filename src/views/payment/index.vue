<template>
    <div class="payment-wrapper">
        <payment_header :title="title"></payment_header>
        <div class="modeOfPayment">
            <div class="main">
                请选择支付方式
            </div>
            <div class="main-item" @click="appearWX">
                <div>
                    <img src="../../assets/wx.png" alt="">
                    <span>微信</span>
                </div>
                <img class="right-arrow" src="../../assets/right_arrow.png" alt="">
            </div>
            <div class="main-item" @click="appearZFB">
                <div>
                    <img src="../../assets/zfb.png" alt="">
                    <span>支付宝</span>
                </div>
                <img class="right-arrow" src="../../assets/right_arrow.png" alt="">
            </div>
        </div>
        <div class="wx-hide" v-if="vx_isappear" @click="hideWX">
            <div class="wx-title">
                微信支付
            </div>
            <div class="wx-img">
                <img src="../../assets/wechat.png" alt="">
            </div>
        </div>
        <div class="wx-hide" v-if="zfb_isappear" @click="hideZFB">
            <div class="wx-title">
                支付宝支付
            </div>
            <div class="wx-img">
                <img src="../../assets/alipay.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import payment_header from '../../components/header_component'
  export default {
    name: "index",
    components:{
      payment_header
    },
    data(){
      return{
        title:'党费缴纳',
        vx_isappear:false,
        zfb_isappear:false
      }
    },
    methods:{
      hideWX(){
        this.vx_isappear = false
      },
      appearWX(){
        this.vx_isappear = true
      },
      hideZFB(){
        this.zfb_isappear = false
      },
      appearZFB(){
        this.zfb_isappear = true
      }
    }
  }
</script>

<style scoped lang="scss">
.payment-wrapper{
    position: relative;
    .modeOfPayment{
        .main{
            margin-top: 43px;
            padding: 20px 0 10px;
            font-size: 15px;
            border-bottom: 1px solid #ccc;
        }
        .main-item{
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #ccc;
            div{
                img{
                    width: 46px;
                    height: 46px;
                    vertical-align: middle;
                }
                span{
                    font-size: 16px;
                    margin-left: 10px;
                }
            }
            .right-arrow{
                width: 26px;
                height: 26px;
                margin-top: 10px;
            }
        }
    }
    .wx-hide{
        width: 100%;
        height: 100%;
        background-color: rgba(1,1,1,.4);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1005;
        text-align: center;
        .wx-title{
            display: inline-block;
            background-color: #fff;
            font-size: 20px;
            line-height: 40px;
            width: 300px;
            margin-top: 200px;
        }
        .wx-img{
            img{
                width: 300px;
                height: 300px;
            }
        }
    }
}
</style>