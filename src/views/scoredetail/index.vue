<template>
    <div class="detail-warpper">
        <detail_header :title="title"></detail_header>
        <div class="interaction-wrapper"  v-infinite-scroll="loadMore"  :infinite-scroll-disabled="isloading"
             infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
            <div class="all-detail">
                <div class="detail-item" v-for="item in allDetail">
                    <div>
                        <span v-text="item.typeName">互动发帖</span>
                        <span>+{{item.singleDesc}}</span>
                    </div>
                    <p v-text="item.timeFormat">2018-10-19 21:01:04</p>
                </div>
            </div>
        </div>
        <div class="loading-box tc" v-if="loadingMore">
            <mt-spinner type="snake" class="loading-more"></mt-spinner>
            <p class="loading-more-txt">加载中...</p>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import detail_header from '../../components/header_component';
    import { Indicator } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';

    Vue.use(InfiniteScroll);
  export default {
    name: "detail",
    components:{
      detail_header
    },
    data(){
      return{
        title:'积分明细',
        page:1,
        allDetail:[],
        isloading:false,
        loadingMore:false,
        total:''
      }
    },
    methods:{
      getAllDetail(){
        this.$axios.get(`/integral/integralList.do?page=${this.page}&rows=10`).then(res=>{
          if(res.code == 1){
            this.allDetail.push(...res.rows)
            this.total = res.total
          }
        })
      },
      loadMore(){
        this.isloading = true;
        this.loadingMore = true;
        setTimeout(()=>{
          let num = Math.ceil(this.total/10)
          this.page = this.page + 1;
          if(this.page <= num){
            this.getAllDetail();
            this.isloading = false;
          }else {
            this.isloading = true
          }
        },2000)
      }
    },
    created(){
      this.getAllDetail();
    }
  }
</script>

<style scoped lang="scss">
.detail-warpper{
    position: relative;
    .all-detail{
        margin-top: 43px;
        .detail-item{
            padding:16px;
            border-bottom: 1px solid #ccc;
            div{
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;
                span:nth-of-type(1){
                    font-size: 18px;
                }
                span:nth-of-type(2){
                    font-size: 16px;
                    color: red;
                }
            }
            p{
                font-size: 14px;
            }
        }
    }
    .loading-box{
        text-align: center;
        .loading-more{
            display: inline-block;
            vertical-align: middle;
        }

    }
}
</style>