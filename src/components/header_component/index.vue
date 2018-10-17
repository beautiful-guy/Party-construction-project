<template>
    <div class="header-wrapper">
        <div class="header-outer">
            <img src="../../assets/left_arrow2.png" @click="skipToIndex" >
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    props:{
      title:String
    },
    methods:{
      skipToIndex(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
.header-wrapper{
    .header-outer{
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
        z-index: 1000;
        img{
            float: left;
            width: 25px;
            margin-top: 8px;
        }
    }
}
</style>