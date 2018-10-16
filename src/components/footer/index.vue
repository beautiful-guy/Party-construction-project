<template>
    <div>
        <div class="footer">
            <div :class="'/index' == $route.path ? 'footer-ceil change-color' : 'footer-ceil'" @click="skipToIndex">
                <span class="iconfont icon-renwu"></span>
                <p>首页</p>
            </div>
            <div :class="'/inform' == $route.path ? 'footer-ceil change-color' : 'footer-ceil'" @click="skipToInform">
                <span class="iconfont icon-danghui-copy"></span>
                <p>通知早知道</p>
            </div>
            <div :class="'/userinfo' == $route.path ? 'footer-ceil change-color' : 'footer-ceil'" @click="skipToUserinfo">
                <span class="iconfont icon-bubble"></span>
                <p>我的党建</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    methods:{
      skipToIndex(){
        this.$router.push('/index');
      },
      skipToInform(){
        this.$router.push('/inform');
      },
      skipToUserinfo(){
        this.$router.push('/userinfo')
      },
    }
  }
</script>

<style scoped lang="scss">
    .footer{
        display: flex;
        justify-content: space-around;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        background-color: #fff;
        .footer-ceil{
            width: 125px;
            color: #8a8a8a;
            text-align: center;
            cursor: pointer;
            span{
                display: inline-block;
                font-size: 21px;
                padding-top: 6px;
            }
            p{
                font-size: 10px;
            }
        }
        .change-color{
            color: red;
            border-top: 1px solid red;
        }

    }
</style>