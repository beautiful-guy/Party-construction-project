<template>
    <div class="userinfo-detail">
        <div class="userinfo-header">
            <span>我的党建</span>
        </div>
        <div class="userinfo-avatar">
            <div>
                <img src="../../assets/hh_bg.png" alt="">
            </div>
            <p>您还没有登录，请登录</p>
        </div>
        <div class="userinfo-list">
            <div class="list-item">
                <img class="list-icon" src="../../assets/list_icon1.png" alt="">
                <span>个人信息</span>
                <img class="list-arrow" src="../../assets/list_arrow1.png" alt="">
            </div>
            <div class="list-item">
                <img class="list-icon" src="../../assets/list_icon2.png" alt="">
                <span>个人量化积分</span>
                <img class="list-arrow" src="../../assets/list_arrow1.png" alt="">
            </div>
            <div class="list-item">
                <img class="list-icon" src="../../assets/list_icon3.png" alt="">
                <span>修改密码</span>
                <img class="list-arrow" src="../../assets/list_arrow1.png" alt="">
            </div>
            <div class="list-item">
                <img class="list-icon" src="../../assets/list_icon4.png" alt="">
                <span>党费缴纳</span>
                <img class="list-arrow" src="../../assets/list_arrow1.png" alt="">
            </div>
        </div>
        <footerItem></footerItem>
    </div>
</template>

<script>
  import footerItem from '../../components/footer';

  export default {
    name: "index",
    components:{
      footerItem
    }
  }
</script>

<style scoped lang="scss">
.userinfo-detail{
    position: relative;
    .userinfo-header{
        height: 43px;
        padding:0 10px;
        background-color:#c50206;
        text-align: center;
        line-height: 43px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
    }
    .userinfo-avatar{
        background-color:#c50206;
        height: 140.5px;
        text-align: center;
        div{
            height: 105px;
            img{
                width: 62.5px;
                height: 62.5px;
                border-radius: 50%;
                margin-top: 36.5px;
            }
        }
        p{
            color: #fff;
        }
    }
    .userinfo-list{
        .list-item{
            border-bottom: 1px solid #ccc;
            position: relative;
            display: flex;
            height: 54px;
            color: #666;
            .list-icon{
                width: 32px;
                height: 32px;
                margin: 10px 0 0 11px;
            }
            span{
                width: 267px;
                height: 20px;
                font-size: 16px;
                margin: 16px 0 0 11px;
            }
            .list-arrow{
                height: 12px;
                margin: 20px 0 0 30px;
            }
        }
    }
}
</style>