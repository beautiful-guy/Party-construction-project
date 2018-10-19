<template>
    <div class="userinfo-detail">
        <div class="userinfo-header">
            <span>我的党建</span>
        </div>
        <div class="userinfo-avatar">
            <div>
                <img :src="this.userData.header?this.userData.header:''" alt="">
                <img v-if="this.isloading" src="../../assets/hh_bg.png" alt="">
            </div>
            <p>{{this.userData.username?this.userData.username:this.desc}}</p>
        </div>
        <div class="userinfo-list">
            <div class="list-item" @click="skipToPersonDetail">
                <img class="list-icon" src="../../assets/list_icon1.png" alt="">
                <span>个人信息</span>
                <img class="list-arrow" src="../../assets/list_arrow1.png" alt="">
            </div>
            <div class="list-item">
                <img class="list-icon" src="../../assets/list_icon2.png" alt="">
                <span>个人量化积分</span>
                <img class="list-arrow" src="../../assets/list_arrow1.png" alt="">
            </div>
            <div class="list-item">
                <img class="list-icon" src="../../assets/list_icon3.png" alt="">
                <span>修改密码</span>
                <img class="list-arrow" src="../../assets/list_arrow1.png" alt="">
            </div>
            <div class="list-item">
                <img class="list-icon" src="../../assets/list_icon4.png" alt="">
                <span>党费缴纳</span>
                <img class="list-arrow" src="../../assets/list_arrow1.png" alt="">
            </div>
        </div>
        <div v-if="userData.header" @click="logout">
            <mt-button type="danger" size="large">退出登录</mt-button>
        </div>
        <footerItem></footerItem>
    </div>
</template>

<script>
  import footerItem from '../../components/footer';
  import {Button} from 'mint-ui'
  export default {
    name: "index",
    components:{
      footerItem
    },
    data(){
      return{
        userData:{},
        desc:'您还没登录，请先登录',
        param:'',
        isloading:true
      }
    },
    methods:{
      getUserinfoData(){
        this.$axios.get('/user/userInfo.do').then(res=>{
          if(res.code == 1){
            this.userData = res.data
          }
          if(this.userData.header){
            this.isloading = false
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      logout(){
        this.$store.commit('ACCOUNT_INFOR',this.param);
        this.isloading = true
        this.$router.push('/login');
      },
      skipToPersonDetail(){
          this.$router.push('/personal_detail')
      }
    },
    created(){
      this.getUserinfoData()
    }
  }
</script>

<style scoped lang="scss">
.userinfo-detail{
    position: relative;
    .userinfo-header{
        height: 43px;
        padding:0 10px;
        background-color:#c50206;
        text-align: center;
        line-height: 43px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
    }
    .userinfo-avatar{
        background-color:#c50206;
        height: 140.5px;
        text-align: center;
        div{
            height: 105px;
            img{
                width: 62.5px;
                height: 62.5px;
                border-radius: 50%;
                margin-top: 36.5px;
            }
        }
        p{
            color: #fff;
        }
    }
    .userinfo-list{
        margin-bottom: 50px;
        .list-item{
            border-bottom: 1px solid #ccc;
            position: relative;
            display: flex;
            height: 54px;
            color: #666;
            .list-icon{
                width: 32px;
                height: 32px;
                margin: 10px 0 0 11px;
            }
            span{
                width: 267px;
                height: 20px;
                font-size: 16px;
                margin: 16px 0 0 11px;
            }
            .list-arrow{
                height: 12px;
                margin: 20px 0 0 30px;
            }
        }
    }
}
</style>