<template>
    <div class="edit-wrapper">
        <edit_header :title="title"></edit_header>
        <div class="edit-personal" @click="updateInfo" >保存</div>
        <div class="personal-list">
            <div class="list-item">
                <p class="item-text">头像</p>
                <div>
                    <img :src="formData.header" alt="">
                    <input type="file" @change="upload_img">
                </div>
            </div>
            <div class="list-item">
                <p class="item-text">姓名</p>
                <input class="item-text input-item" type="text"  v-model="formData.username">
            </div>
            <div class="list-item">
                <p class="item-text">身份证</p>
                <input class="item-text input-item" type="text" disabled  v-model="formData.idCard" >
            </div>
            <div class="list-item">
                <p class="item-text">家庭住址</p>
                <input class="item-text input-item" type="text" v-model="formData.hometown" >
            </div>
            <div class="list-item">
                <p class="item-text">工作住址</p>
                <input class="item-text input-item" type="text" v-model="formData.address" >
            </div>
            <div class="list-item">
                <p class="item-text">民族</p>
                <input class="item-text input-item" type="text" v-model="formData.nation" >
            </div>
            <div class="list-item">
                <p class="item-text">微信号</p>
                <input class="item-text input-item" type="text" v-model="formData.wxNum" >
            </div>
            <div class="list-item">
                <p class="item-text">QQ号</p>
                <input class="item-text input-item" type="text" v-model="formData.qqNum" >
            </div>
            <div class="list-item">
                <p class="item-text">性别</p>
                <input class="item-text input-item" type="text" v-model="formData.sex" >
            </div>
            <div class="list-item">
                <p class="item-text">最高学历</p>
                <input class="item-text input-item" type="text" v-model="formData.education" >
            </div>
            <div class="list-item">
                <p class="item-text">职称</p>
                <input class="item-text input-item" type="text" v-model="formData.jobRank" >
            </div>
            <div class="list-item">
                <p class="item-text">薪资水平</p>
                <input class="item-text input-item" type="text" v-model="formData.salary" >
            </div>
            <div class="list-item">
                <p class="item-text">入党时间</p>
                <input class="item-text input-item" type="text" v-model="formData.joinPartyTime" >
            </div>
            <div class="list-item">
                <p class="item-text">党费最后缴纳时间</p>
                <input class="item-text input-item" type="text" v-model="formData.lastPayTime" >
            </div>
            <div class="list-item">
                <p class="item-text">当前身份</p>
                <input class="item-text input-item" type="text" v-model="formData.partyIdentity" >
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import edit_header from '../../components/header_component';
    import { DatetimePicker } from 'mint-ui';

    Vue.component(DatetimePicker.name, DatetimePicker);
  export default {
    name: "index",
    components:{
      edit_header
    },
    data(){
      return{
        title:'修改个人信息',
        imgData: {
          accept: 'image/gif, image/jpeg, image/png, image/jpg',
        },
        formData:{
          header:'',
          username:'',
          idCard:'',
          hometown:'',
          address:'',
          nation:'',
          wxNum:'',
          qqNum:'',
          sex:'',
          education:'',
          jobRank:'',
          salary:'',
          joinPartyTime:'',
          lastPayTime:'',
          partyIdentity:''
        },
      }
    },
    methods:{
      getPersonalData(){
        this.$axios.get('/user/userInfo.do').then(res=>{
          if(res.code == 1){
            this.formData = res.data
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      upload_img(event){
        let reader = new FileReader();
        let img1 = event.target.files[0];
        let type = img1.type;
        let size = img1.size;
        console.log(reader)
        if(this.imgData.accept.indexOf(type) == -1){
          alert('请换一种图片格式！');
          return false;
        }
        if(size > 3145728){
          alert('请选择3M以内的图片!');
          return false
        }
        let form = new FormData();
        form.append('myFile',img1);
        this.$axios.post('/image/uploadBase64.do',form,{
          headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            this.formData.header = res.url
        }).catch(err=>{
          console.log(err)
        })
      },
      updateInfo(){
        let formdata = new FormData();
        formdata.append('username',this.formData.username);
        formdata.append('hometown',this.formData.hometown);
        formdata.append('address',this.formData.address);
        formdata.append('nation',this.formData.nation);
        formdata.append('wxNum',this.formData.wxNum);
        formdata.append('qqNum',this.formData.qqNum);
        formdata.append('sex',this.formData.sex);
        formdata.append('education',this.formData.education);
        formdata.append('jobRank',this.formData.jobRank);
        formdata.append('salary',this.formData.salary);
        formdata.append('joinPartyTime',this.formData.joinPartyTime);
        formdata.append('lastPayTime',this.formData.lastPayTime);
        formdata.append('partyIdentity',this.formData.partyIdentity);
        this.$axios.post('/user/modifyInfo.do',formdata).then(res=>{
          console.log(res)
        })
      },
    },
    created(){
      this.getPersonalData()
    }
  }
</script>

<style scoped lang="scss">
.edit-wrapper{
    position: relative;
    .edit-personal{
        font-size: 17px;
        color: #fff;
        font-weight: 400;
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
            .item-text{
                font-size: 14px;
                color: rgb(68,68,68);
            }
            img{
                width: 28px;
                height: 28px;
            }
            .input-item{
                border: none;
                outline: none;
                background: transparent;
                text-align: right;
            }
        }
    }
}
</style>