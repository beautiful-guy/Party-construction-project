<template>
    <div class="allwrapper">
        <div v-if="appear" class="hidePage">
            <div class="main-content">
                <textarea name="" id="T-area" cols="30" rows="10" v-model="content">
                </textarea>
                <div class="twobtn">
                    <mt-button type="primary" @click="release">发布</mt-button>
                    <mt-button type="danger" @click="hide">取消</mt-button>
                </div>
            </div>
        </div>
        <interaction_header :title="title"></interaction_header>
        <div>
            <div class="interaction-wrapper"  v-infinite-scroll="loadMore"  :infinite-scroll-disabled="isloading"
                 infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
                <div class="interaction-item" v-for="item in allUserinfo">
                    <div class="outer">
                        <div class="outer-left">
                            <img class="avatar" :src="item.header" alt="">
                            <div class="userMsg">
                                <p class="username" v-text="item.username">test1</p>
                                <p class="upTime">
                                    <img class="img1" src="../../assets/time.png" alt="">
                                    <span v-text="item.currentTime">2018-10-19 15:24:43</span>
                                    <img class="img2" src="../../assets/laba.png" alt="">
                                    <span>公开</span>
                                </p>
                            </div>
                        </div>
                        <p class="interact">党员互动</p>
                    </div>
                    <div class="desc">
                        <p v-text="item.content">西瓜皮</p>
                    </div>
                    <div class="reply clearfix">
                        <div @click="skipToInteractionDetail(item.header,item.username,item.currentTime,item.content)">
                            <img src="../../assets/talk.png" alt="">
                            <span>回复</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loading-box tc" v-if="loadingMore">
                <mt-spinner type="snake" class="loading-more"></mt-spinner>
                <p class="loading-more-txt">加载中...</p>
            </div>
            <div class="addstory" @click="appearHide">
                <img src="../../assets/add.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import interaction_header from '../../components/header_component';
    import { Spinner,InfiniteScroll,Button ,Toast } from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.component(Spinner.name, Spinner)
    Vue.use(InfiniteScroll);
  export default {
    name: "index",
    components:{
      interaction_header,
    },
    data(){
      return{
        title:'党员云互动',
        allUserinfo:[],
        isloading:false,
        loadingMore:false,
        page:1,
        total:'',
        appear:false,
        content:'',
      }
    },
    methods:{
      getListData(){
        this.$axios.get(`/forum/forumList.do?page=${this.page}&rows=10&type=0&cates=0`).then(res=>{
          if(res.code == 1){
            this.allUserinfo.push(...res.rows)
            this.total = res.total
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      loadMore(){
        this.isloading = true;
        this.loadingMore = true;
        setTimeout(()=>{
          let num = Math.ceil(this.total/10)
          this.page = this.page + 1;
          if(this.page <= num){
            this.getListData();
            this.isloading = false;
          }else {
            this.isloading = true
          }
        },2000)
      },
      appearHide(){
        this.appear = true
      },
      hide(){
        this.appear = false
      },
      release(){
        let formdata = new FormData();
        formdata.append('type',1);
        formdata.append('content',this.content)
        if(!this.content){
          Toast({
            message: '帖子内容不能为空',
            position: 'top',
            duration: 1500
          });
        }else {
          this.$axios.post('/forum/saveForum.do',formdata).then(res=>{
            if(res.code == 1){
              Toast({
                message: res.msg,
                position: 'top',
                duration: 1500
              });
              this.allUserinfo.unshift(res.data)
              this.appear = false;
            }else {
              Toast({
                message: '发布失败，请检查网络是否正常',
                position: 'top',
                duration: 1500
              });
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      },
      skipToInteractionDetail(header,username,currentTime,content){
        this.$router.push({
          name:'interactionDetail',
          params:{
            header:header,
            username:username,
            currentTime:currentTime,
            content:content
          }
        })
      }
    },
    created(){
      this.getListData();
    }
  }
</script>

<style scoped lang="scss">
.allwrapper{
    position: relative;
    .hidePage{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1005;
        background-color: rgba(1,1,1,.3);
        .main-content{
            padding: 10px;
            background-color: #f1f1f1;
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            textarea{
                height: 92px;
                width: 100%;
                padding: 4px;
                outline: none;
                border-color: #ccc;
            }
            .twobtn{
                display: flex;
                justify-content: space-between;
            }
        }
    }
    .interaction-wrapper{
        margin-top: 43px;
        .interaction-item{
            padding: 16px;
            border-bottom: 10px solid #efeff4;
            .outer{
                display: flex;
                justify-content: space-between;
                .outer-left{
                    display: flex;
                    .avatar{
                        width: 33.33px;
                        height: 33.33px;
                    }
                    .userMsg{
                        margin: 0 0 5px 10px;
                        .username{
                            font-size: 18px;
                            padding-bottom: 3px;
                        }
                        .upTime{
                            img{
                                width: 12px;
                                height: 14px;
                                vertical-align: top;
                            }
                            .img1{
                                margin-right: 5px;
                            }
                            .img2{
                                margin: 0 5px;
                            }
                            span{
                                font-size: 12px;
                            }
                        }
                    }
                }
                .interact{
                    width: 48px;
                    height: 20px;
                    padding: 2px 8px;
                    font-size: 12px;
                    color: red;
                    border: 1px solid red;
                    border-radius: 15px;
                }
            }
            .desc{
                padding: 10px 0;
                font-size: 16px;
            }
            .reply{
                div{
                    float: right;
                    font-size: 14px;
                    img{
                        width: 16px;
                        height: 18px;
                        vertical-align: top;
                    }
                }
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
    .addstory{
        position: fixed;
        right: 10px;
        bottom: 60px;
        img{
            width: 56px;
            height: 61px;
        }
    }
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
}
</style>