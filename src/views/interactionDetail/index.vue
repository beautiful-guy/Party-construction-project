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
                            <span v-text="usersData.currentTime">2018-10-19 15:24:43</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="desc">
                <p v-text="usersData.content">西瓜皮</p>
            </div>
        </div>
    </div>
</template>

<script>
    import interactionDetail_header from '../../components/header_component'
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
        }]
      }
    },
    methods:{
      getCurrentUser(){
        this.usersData.header = this.$route.params.header;
        this.usersData.username = this.$route.params.username;
        this.usersData.timeFormat = this.$route.params.currentTime;
        this.usersData.content = this.$route.params.content;
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
        height: 576px;
        background-color:#efeff4;
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
    }
</style>