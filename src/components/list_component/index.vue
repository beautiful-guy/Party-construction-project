<template>
    <div class="newseye-wrapper">
        <div class="page-loadmore-wrapper">
            <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottomLoadingText="loadingMsg" ref="loadmore">
                <div class="newseye-outer">
                    <div class="newseye-main" v-for="item in listData" @click="skipToDetail(item.newsId)">
                        <div class="main-content">
                            <div class="picture">
                                <img :src="item.pic" alt="">
                            </div>
                            <div class="intro">
                                <p v-text="item.title"></p>
                                <div class="time">
                                    <span v-text="item.currentTime"></span>
                                    <div class="looknums">
                                        <img src="../../assets/looknum_icon.png" alt="">
                                        <span v-text="item.count"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </mt-loadmore>
            <div class="bottomMsg" v-if="isMore">
                <p>到底了哦...</p>
            </div>
        </div>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  export default {
    name: "index",
    props:{
      type:Number,
      title2:String
    },
    data(){
      return{
        listData:[],
        page:1,
        allLoaded:false,
        count:0,
        isMore:false,
        loadingMsg:'',
      }
    },
    methods:{
      skipToIndex(){
        this.$router.push('/index');
      },
      skipToDetail(id){
        this.$router.push({
          name:'news_detail',
          params:{
            title:this.title2,
            id
          }
        })
      },
      getListData(){
        let type = this.type;
        this.$axios.get(`/news/newsList.do?page=${this.page}&rows=10&type=${type}`).then(res=>{
          if(res.code == 1){
            this.listData.push(...res.rows);
            this.count = Math.ceil(res.total/10);
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
      },
      loadBottom(){
        if(this.page<this.count){
          this.page = this.page + 1;
          this.getListData();
          this.$refs.loadmore.onBottomLoaded();
        }else {
          this.allLoaded=true;
          this.isMore = true;
        }
      },
    },
    created(){
      this.getListData();
    },
  }
</script>

<style scoped lang="scss">
    .newseye-wrapper{
        position: relative;
        .page-loadmore-wrapper{
            height: auto;
            overflow: scroll;
            z-index: -1;
            .newseye-outer{
                margin-top: 43px;
                .newseye-main{
                    border-bottom: 1px solid #aaa;
                    padding: 10px;
                    .main-content{
                        display: flex;
                        .picture{
                            img{
                                width: 80px;
                                height: 80px;
                            }
                        }
                        .intro{
                            margin-left: 10px;
                            p{
                                height: 48px;
                                font-size: 16px;
                                line-height: 24px;
                                font-weight: 500;
                                //设置文本超过两行后隐藏并显示省略号
                                display:-webkit-box;
                                -webkit-line-clamp:2;
                                -webkit-box-orient:vertical;
                                overflow:hidden;
                            }
                            .time{
                                display: flex;
                                justify-content: space-between;
                                margin-top: 16px;
                                .looknums{
                                    img{
                                        width: 20px;
                                        height: 16px;
                                        vertical-align: top;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .bottomMsg{
                height: 40px;
                line-height: 40px;
                text-align: center;
                line-height: 40px;
                font-size: 16px;
            }
        }
    }
</style>