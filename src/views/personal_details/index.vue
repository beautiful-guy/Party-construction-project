<template>
    <div class="personal-wrapper">
        <personal_header :title="this.title"></personal_header>
        <div class="edit-personal" @click="skipToEdit">编辑</div>
        <div class="personal-list">
            <div class="list-item">
                <p>头像</p>
                <img :src="personalData.header" alt="">
            </div>
            <div class="list-item">
                <p>姓名</p>
                <p v-text="personalData.username"></p>
            </div>
            <div class="list-item">
                <p>身份证</p>
                <p v-text="personalData.idCard"></p>
            </div>
            <div class="list-item">
                <p>家庭住址</p>
                <p v-text="personalData.hometown"></p>
            </div>
            <div class="list-item">
                <p>工作住址</p>
                <p v-text="personalData.address"></p>
            </div>
            <div class="list-item">
                <p>民族</p>
                <p v-text="personalData.nation"></p>
            </div>
            <div class="list-item">
                <p>微信号</p>
                <p v-text="personalData.wxNum"></p>
            </div>
            <div class="list-item">
                <p>QQ号</p>
                <p v-text="personalData.qqNum"></p>
            </div>
            <div class="list-item">
                <p>性别</p>
                <p v-text="personalData.sex == 1 ? '男': '女'"></p>
            </div>
            <div class="list-item">
                <p>最高学历</p>
                <p v-text="personalData.education"></p>
            </div>
            <div class="list-item">
                <p>职称</p>
                <p v-text="personalData.jobRank"></p>
            </div>
            <div class="list-item">
                <p>薪资水平</p>
                <p v-text="personalData.salary"></p>
            </div>
            <div class="list-item">
                <p>入党时间</p>
                <p v-text="personalData.joinPartyTime"></p>
            </div>
            <div class="list-item">
                <p>党费最后缴纳时间</p>
                <p v-text="personalData.lastPayTime"></p>
            </div>
            <div class="list-item">
                <p>当前身份</p>
                <p v-text="personalData.partyIdentity"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import personal_header from '../../components/header_component';
  export default {
    name: "index",
    components:{
      personal_header
    },
    data(){
      return{
        personalData:{},
        title:'个人信息'
      }
    },
    methods:{
      getPersonalData(){
        this.$axios.get('/user/userInfo.do').then(res=>{
          if(res.code == 1){
            this.personalData = res.data;
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      skipToEdit(){
        this.$router.push('/editPersonal')
      }
    },
    created(){
      this.getPersonalData()
    }
  }
</script>

<style scoped lang="scss">
    .personal-wrapper{
        position: relative;
        .edit-personal{
            font-size: 17px;
            color: #fff;
            font-weight: 300;
            position: fixed;
            right: 10px;
            top: 10px;
            z-index: 1001;
        }
        .personal-list{
            margin-top: 43px;
            .list-item{
                height: 28px;
                line-height: 28px;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                border-bottom: 2px solid #ddd;
                p{
                    font-size: 14px;
                    color: rgb(68,68,68);
                }
                img{
                    width: 28px;
                    height: 28px;
                }
            }
        }
    }
</style>