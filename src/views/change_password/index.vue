<template>
    <div class="change-wrapper">
        <changepwd_header :title="title"></changepwd_header>
        <div class="main-item">
            <mt-field label="旧密码:" class="item" placeholder="请输入旧密码" v-model="oldpassword"></mt-field>

            <mt-field label="新密码:" class="item" placeholder="请输入新密码" v-model="newpassword"></mt-field>

            <mt-field label="确认密码:" class="item" placeholder="请再次输入新密码" v-model="newpassword"></mt-field>

            <mt-button type="danger" class="item" size="large">确认</mt-button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import changepwd_header from '../../components/header_component';
    import { Field } from 'mint-ui';
    import { Button } from 'mint-ui';

    Vue.component(Button.name, Button);
    Vue.component(Field.name, Field);
  export default {
    name: "index",
    components:{
      changepwd_header
    },
    data(){
      return{
        title:'修改密码',
        oldpassword:'',
        newpassword:''
      }
    }
  }
</script>

<style scoped lang="scss">
.change-wrapper{
    position: relative;
    .main-item{
        margin-top: 43px;
        padding: 40px 20px 0;
        .item{
            margin-top: 30px;
        }
    }
}
</style>