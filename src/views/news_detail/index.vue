<template>
    <div class="swiper-detail">
        <header_component :title="this.title"></header_component>
        <div class="detail-main">
            <p>{{detailData.title}}</p>
            <div class="detail-content" v-html="detailData.content"></div>
        </div>
    </div>
</template>

<script>
  import { Toast,Indicator } from 'mint-ui';
  import header_component from '../../components/header_component';
  export default {
    name: "index",
    components:{
      header_component
    },
    data(){
      return{
        detailData:{},
        title:''
      }
    },
    methods:{
      getDetailData(){
        let id = this.$route.query.id;
        this.title = this.$route.query.title;
        Indicator.open('加载中...');
        this.$axios.get(`news/newsContent.do?newsId=${id}`).then(res=>{
          if(res.code == 1){
            this.detailData = res.data;
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
      }
    },
    created(){
      this.getDetailData();
    }
  }
</script>

<style scoped lang="scss">
.swiper-detail{
    position: relative;
    .detail-main{
        width:355px;
        margin:53px auto 10px ;
        p{
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 10px;
        }
        .detail-content{
            font-size: 18px;
            line-height: 36px;
            /deep/ h4{
                font-weight: 500;
            }
            /deep/ img{
                width: 100%;
                margin: 0 auto 20px;
            }
        }
    }
}
</style>