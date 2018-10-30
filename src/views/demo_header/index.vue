<template>
    <div class="wrapper">
        <div class="demo-header">
            <div class="header-img">
                <img src="../../assets/header_img.png" alt="">
            </div>
            <div class="header-login" v-if="!$store.state.token"  @click="skipToLogin">
                <span>登录</span>
            </div>
        </div>
        <div class="demo-swiper" v-if="swiperIntro">
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="item in swiperIntro" :key="item.url" >
                    <div class="swiper1" @click="skipToDetail(item.url)">
                        <img class="imgs" :src="item.imgUrl" alt="">
                        <div class="intro">{{item.title}}</div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="content-main">
            <div class="content-main-top">
                <div class="main1 width1" @click="skipToNewseye">
                    <img src="../../assets/icon1.png" alt="">
                    <div>信工新闻眼</div>
                </div>
                <div class="main1 width2" @click="skipToZslive">
                    <img src="../../assets/icon2.png" alt="">
                    <div>掌上组织生活</div>
                </div>
                <div class="main1 width3" @click="skipToInteraction">
                    <img src="../../assets/icon3.png" alt="">
                    <div>党员云互动</div>
                </div>
            </div>
            <div class="content-main-bottom">
                <div class="main2 width4" @click="skipToOneclick">
                    <img src="../../assets/icon4.png" alt="">
                    <div>党建一点通</div>
                </div>
                <div class="main2 width5" @click="skipToIdentity">
                    <img src="../../assets/icon5.png" alt="">
                    <div>党员亮身份</div>
                </div>
                <div class="main2 width6" @click="skipToPartytoday">
                    <img src="../../assets/icon6.png" alt="">
                    <div>党史上的今天</div>
                </div>
            </div>
        </div>
        <div class="banner">
        </div>
        <div class="allTable-ceil">
            <div class="table-ceil">
            </div>
            <div class="table-ceil">
                <div class="table-small-ceil" @click="skipToEveryStudy">
                </div>
                <div class="table-small-ceil" @click="skipToSystem">
                </div>
            </div>
            <div class="table-ceil">
                <div class="table-small-ceil" @click="skipToPhoto">
                </div>
                <div class="table-small-ceil" @click="skipToActivity">
                </div>
            </div>
        </div>
        <publicFooter></publicFooter>
    </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import publicFooter from '../../components/footer';
  import '../../iconfont/iconfont.css';
    export default {
        name: "index",
        components:{
          Swipe,
          SwipeItem,
          publicFooter
        },
        data(){
          return{
            swiperIntro:[],
            title:'随时随地学',
          }
        },
        methods:{
          skipToLogin(){
            this.$router.push('/login')
          },
          skipToInteraction(){
            this.$router.push('/interaction')
          },
          skipToZslive(){
            this.$router.push('/zs_live')
          },
          skipToOneclick(){
            this.$router.push('/one_click')
          },
          skipToIdentity(){
            this.$router.push('/showidentity')
          },
          skipToPartytoday(){
            this.$router.push('/partyToday')
          },
          skipToEveryStudy(){
            this.$router.push('/every_study')
          },
          skipToSystem(){
            this.$router.push('/system')
          },
          skipToActivity(){
            this.$router.push('/activity')
          },
          skipToPhoto(){
            this.$router.push('/anytimephoto')
          },
          skipToDetail(id){
            this.$router.push(`/news_detail?title=${this.title}&id=${id}`)
          },
          skipToNewseye(){
            this.$router.push('/newseye')
          },
          getSwiperData(){
            this.$axios.get('/carousel/carouselList.do').then(res=>{
              if(res.code == 1){
                this.swiperIntro = res.rows
              }
            }).catch(err=>{
              console.log(err)
            })
          }
        },
        created(){
          this.getSwiperData();
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
        background-image: url("../../assets/banner01.png");
        background-size: 100% 100%;
        width: 100%;
        height: 90px;
    }
    .allTable-ceil{
        height: 165px;
        background-image: url("../../assets/tese.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: space-around;
        margin-top: -4px;
        margin-bottom: 44px;
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