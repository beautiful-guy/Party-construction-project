<template>
    <div class="interactionDetail-wapper">
        <interactionDetail_header :title="title"></interactionDetail_header>
        <div class="interaction-item">
            <div class="outer">
                <div class="outer-left">
                    <img class="avatar" :src="usersData.header" alt="">
                    <div class="userMsg">
                        <p class="username" v-text="usersData.username">test1</p>
                        <p class="upTime">
                            <img class="img1" src="../../assets/time.png" alt="">
                            <span v-text="usersData.timeFormat">2018-10-19 15:24:43</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="desc">
                <p v-text="usersData.content">西瓜皮</p>
            </div>
        </div>
        <div class="interaction-item newStyle" v-for="item in newData">
            <div class="outer">
                <div class="outer-left">
                    <img class="avatar" :src="item.header" alt="">
                    <div class="userMsg">
                        <p class="username" v-text="item.username">test1</p>
                        <p class="upTime">
                            <img class="img1" src="../../assets/time.png" alt="">
                            <span v-text="item.timeFormat">2018-10-19 15:24:43</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="desc">
                <p v-text="item.comment">西瓜皮</p>
            </div>
        </div>
        <div class="comment">
            <input type="text" placeholder="评论内容" v-model="commentContent">
            <span @click="addCommon">评论</span>
        </div>
    </div>
</template>

<script>
    import interactionDetail_header from '../../components/header_component'
    import {Toast} from 'mint-ui';
  export default {
    name: "index",
    components:{
      interactionDetail_header
    },
    data(){
      return{
        title:'党员云互动',
        usersData:[{
          header:'',
          username:'',
          timeFormat:'',
          comment:''
        }],
        commentContent:'',
        newData:[]
      }
    },
    methods:{
      getCurrentUser(){
        this.usersData.header = this.$route.params.header;
        this.usersData.username = this.$route.params.username;
        this.usersData.timeFormat = this.$route.params.currentTime;
        this.usersData.content = this.$route.params.content;
      },
      addCommon(){
        let formdata = new FormData();
        formdata.append('comment',this.commentContent);
        formdata.append('forum_id',undefined);
        this.$axios.post('/forum/addComment.do',formdata).then(res=>{
          if(res.code == 1){
            this.newData.unshift(res.data)
            Toast({
              message:res.msg,
              position:top,
              duration:1500
            });
          }
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    created(){
      this.getCurrentUser();
    }
  }
</script>

<style scoped lang="scss">
    .interactionDetail-wapper{
        width: 100%;
        height: 86vh;
        background-color:#efeff4;
        position: relative;
        .interaction-item{
            margin-top: 43px;
            padding: 16px 16px 30px;
            background-color: #fff;
            .outer {
                display: flex;
                justify-content: space-between;
                .outer-left {
                    display: flex;
                    .avatar {
                        width: 33.33px;
                        height: 33.33px;
                    }
                    .userMsg {
                        margin: 0 0 5px 10px;
                        .username {
                            font-size: 18px;
                            padding-bottom: 3px;
                        }
                        .upTime {
                            img {
                                width: 12px;
                                height: 14px;
                                vertical-align: top;
                            }
                            .img1 {
                                margin-right: 5px;
                            }
                            .img2 {
                                margin: 0 5px;
                            }
                            span {
                                font-size: 12px;
                            }
                        }
                    }
                }
                .desc {
                    padding: 10px 0;
                    font-size: 16px;
                }
            }
        }
        .newStyle{
            margin-top: 20px;
        }
        .comment{
            position: fixed;
            left: 0;
            bottom: 0;
            right: 0;
            text-align: center;
            margin-bottom: 5px;
            line-height: 35px;
            z-index: 1000;
            input{
                height: 20px;
                width: 80%;
                padding: 5px;
                outline: none;
                border-color: red;
            }
            span{
                width: 40px;
                height: 35px;
                display: inline-block;
                color:#fff;
                background-color: red;
                margin-left: 5px;
            }
        }
    }
</style>