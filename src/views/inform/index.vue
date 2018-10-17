<template>
    <div class="inform-wrapper">
        <div class="inform-header">
            <span>通知早知道</span>
        </div>
        <div class="main">
            <div class="main-content" v-for="item in informData" @click="skipToSwiperDetail(item.newsId)">
                <div class="icon-item">
                    <img src="../../assets/trumpet.png" alt="">
                </div>
                <div class="example-item">
                    <p>{{item.title}}</p>
                    <span>{{item.currentTime}}</span>
                </div>
            </div>
        </div>
        <div class="finally">
            <span>没有数据啦</span>
        </div>
        <footerItem></footerItem>
    </div>
</template>

<script>
    import footerItem from '../../components/footer';
    import { Toast,Indicator } from 'mint-ui';
  export default {
    name: "index",
    components:{
      footerItem
    },
    data(){
      return{
        informData:[],
        title:'通知早知道'
      }
    },
    methods:{
      getInformData(){
        Indicator.open('加载中...');
        this.$axios.get('/news/newsList.do?page=1&rows=10&type=2').then(res=>{
          if(res.code == 1){
            this.informData = res.rows
            Indicator.close();
          }else {
            Toast({
              message:'数据请求失败!',
              position:'top',
              duration:1500
            });
            Indicator.close();
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      skipToSwiperDetail(id){
        this.$router.push({
          name:'news_detail',
          params:{
            title:this.title,
            id
          }
        })
      }
    },
    created(){
      this.getInformData();
    }
  }
</script>

<style scoped lang="scss">
.inform-wrapper{
    position: relative;
    .inform-header{
        height: 43px;
        padding:0 10px;
        background-color:#c50206;
        text-align: center;
        line-height: 43px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .main{
        margin-top: 53px;
        color: #555;
        .main-content{
            display: flex;
            padding: 10px;
            border-bottom: 1px solid #ccc;
            .icon-item{
                width: 61px;
                height: 61px;
                padding: 5px;
                text-align: center;
                img{
                    width: 40px;
                    margin-top: 10px;
                }
            }
            .example-item{
                p{
                    font-size: 15px;
                    line-height: 20px;
                    margin-top: 10px;
                }
                span{
                    font-size: 12px;
                    line-height: 20px;
                    padding-top: 3px;
                }
            }
        }
    }
    .finally{
        font-size: 14px;
        text-align: center;
        margin-bottom: 80px;
        color: #555;
    }
}
</style>