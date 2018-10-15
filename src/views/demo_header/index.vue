<template>
    <div class="wrapper">
        <div class="demo-header">
            <div class="header-img">
                <img src="../../assets/header_img.png" alt="">
            </div>
            <div class="header-login">
                <span>登录</span>
            </div>
        </div>
        <div class="demo-swiper">
            <mt-swipe :auto="2000">
                <mt-swipe-item>
                    <div class="swiper1">
                        <img class="imgs" src="../../assets/swiper1.png" alt="">
                        <div class="intro">讲形势指方向——图解读习近平这次对省部级干部说了啥</div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="swiper1">
                        <img class="imgs" src="../../assets/swiper2.png" alt="">
                        <div class="intro">习近平：“永远做人民公仆、时代先锋、民族脊梁”</div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="swiper1">
                        <img class="imgs" src="../../assets/swiper3.png" alt="">
                        <div class="intro">校长谭贞在信息工程学院作学习中央31号文件精神专题报告</div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="swiper1">
                        <img class="imgs" src="../../assets/swiper4.png" alt="">
                        <div class="intro">水調歌頭—慶祝黨的十九大勝利召開</div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="content-main">
            <div class="content-main-top">
                <div class="main1 width1">
                    <img src="../../assets/icon1.png" alt="">
                    <div>信工新闻眼</div>
                </div>
                <div class="main1 width2">
                    <img src="../../assets/icon2.png" alt="">
                    <div>掌上组织生活</div>
                </div>
                <div class="main1 width3">
                    <img src="../../assets/icon3.png" alt="">
                    <div>党员云互动</div>
                </div>
            </div>
            <div class="content-main-bottom">
                <div class="main2 width4">
                    <img src="../../assets/icon4.png" alt="">
                    <div>党建一点通</div>
                </div>
                <div class="main2 width5">
                    <img src="../../assets/icon5.png" alt="">
                    <div>党员亮身份</div>
                </div>
                <div class="main2 width6">
                    <img src="../../assets/icon6.png" alt="">
                    <div>党史上的今天</div>
                </div>
            </div>
        </div>
        <div class="banner">
            <img src="../../assets/banner01.png" alt="">
        </div>
        <div class="allTable-ceil">
            <div class="table-ceil">
            </div>
            <div class="table-ceil">
                <div class="table-small-ceil">

                </div>
                <div class="table-small-ceil">

                </div>
            </div>
            <div class="table-ceil">
                <div class="table-small-ceil">

                </div>
                <div class="table-small-ceil">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
    export default {
        name: "index",
        components:{
          Swipe,
          SwipeItem
        }
    }
</script>

<style scoped lang="scss">
.wrapper{
    position: relative;
    .demo-header{
        height: 34px;
        padding: 5px;
        background-color: #c50206;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 1000;
        .header-img{
            float: left;
            img{
                width: 130px;
            }
        }
        .header-login{
            float: right;
            height: 34px;
            line-height: 34px;
            font-size: 18px;
            color: rgb(256,256,256);
            font-weight: 300;
        }
    }
    .demo-swiper{
        height: 193.5px;
        margin-top: 44px;
        .swiper1{
            position: relative;
            .intro{
                width: 100%;
                height: 30px;
                line-height: 30px;
                color: #fff;
                font-size: 12px;
                background-color: rgba(0,0,0,.3);
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                padding-left: 4px;
            }
        }
        .imgs{
            width: 100%;
            height: 193.5px;
        }
    }
    .content-main{
        background-image: url("../../assets/hh_bg.png");
        background-size: 100% 100%;
        color: rgba(0,0,0,.6);
        .content-main-top{
            height: 98px;
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
            .main1{
                height: 98px;
                text-align: center;
                img{
                    width: 50px;
                    height: 50px;
                }
                div{
                    margin-top: 5px;
                }
            }
            .width1{
                width: 110px;
            }
            .width2{
                width: 132px;
            }
            .width3{
                width: 133px;
            }
        }
        .content-main-bottom{
            height: 98px;
            display: flex;
            justify-content: space-around;
            padding-bottom: 10px;
            .main2{
                height: 98px;
                text-align: center;
                img{
                    width: 50px;
                    height: 50px;
                }
                div{
                    margin-top: 5px;
                }
            }
            .width4{
                width: 110px;
            }
            .width5{
                width: 132px;
            }
            .width6{
                width: 133px;
            }
        }
    }
    .banner{
        img{
            width: 100%;
            height: 90px;
        }
    }
    .allTable-ceil{
        height: 165px;
        background-image: url("../../assets/tese.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: space-around;
        margin-top: -4px;
        .table-ceil{
            width: 125px;
            height: 165px;
            .table-small-ceil{
                height: 82.5px;
            }
        }
    }
}
</style>