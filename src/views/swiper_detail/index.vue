<template>
    <div class="swiper-detail">
        <div class="login-header">
            <img src="../../assets/left_arrow2.png" @click="skipToIndex" >
            <span>随时随地学</span>
        </div>
        <div class="detail-main">
            <p>{{detailData.title}}</p>
            <div class="detail-content" v-html="detailData.content"></div>
        </div>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: "index",
    data(){
      return{
        detailData:{}
      }
    },
    methods:{
      skipToIndex(){
        this.$router.push('/index')
      },
      getDetailData(){
        let id = this.$route.query.id
        this.$axios.get(`news/newsContent.do?newsId=${id}`).then(res=>{
          if(res.code == 1){
            this.detailData = res.data
          }else {
            Toast({
              message:'数据请求失败!',
              position:'top',
              duration:1500
            });
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
    .login-header{
        width: 100%;
        height: 43px;
        text-align: center;
        color: #fff;
        line-height: 43px;
        font-size: 18px;
        font-weight: 500;
        background-color: #c50206;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        img{
            float: left;
            width: 25px;
            margin-top: 8px;
        }
    }
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