<template>
    <div class="live-wrapper">
        <liveHeader :title="this.title"></liveHeader>
        <div class="live-img">
            <img src="../../assets/live_icon.jpg" alt="">
        </div>
        <div class="main-content">
            <div class="content-item1">
                <div @click="skipToStudy">
                    <img src="../../assets/live_icon1.png" alt="">
                    <span>政治学习</span>
                </div>
                <div>
                    <img src="../../assets/live_icon2.png" alt="">
                    <span>思想汇报</span>
                </div>
                <div>
                    <img src="../../assets/live_icon3.png" alt="">
                    <span>心得总结</span>
                </div>
            </div>
            <div class="content-item2">
                <div>
                    <img src="../../assets/live_icon4.png" alt="">
                    <span>明主评议</span>
                </div>
                <div>
                    <img src="../../assets/live_icon5.png" alt="">
                    <span>流动党员找组织</span>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    import liveHeader from '../../components/header_component'
  export default {
    name: "index",
    components:{
      liveHeader
    },
    data(){
      return{
        title:'掌上组织生活',
        title2:'政治学习'
      }
    },
    methods:{
      skipToStudy(){
        this.$router.push('/political_study')
      }
    }
  }
</script>

<style scoped lang="scss">
.live-wrapper{
    position: relative;
    .live-img{
        height: 186px;
        margin-top: 43px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .main-content{
        .content-item1{
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
            div{
                width: 85px;
                height: 116px;
                text-align: center;
                img{
                    width: 85px;
                    margin-bottom: 10px;
                }
                span{
                    font-size: 14px;
                    line-height: 20px;
                    color: #888;
                }
            }
        }
        .content-item2{
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
            div{
                width: 85px;
                height: 116px;
                text-align: center;
                img{
                    width: 85px;
                    margin-bottom: 10px;
                }
                span{
                    font-size: 14px;
                    line-height: 20px;
                    color: #888;
                }
            }
        }
    }
}
</style>