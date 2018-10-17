<template>
    <div class="study-wrapper">
        <study_header :title="this.title"></study_header>
        <list_component :type="this.type" :title2="this.title"></list_component>
    </div>
</template>

<script>
    import study_header from '../../components/header_component';
    import list_component from '../../components/list_component';
  export default {
    name: "index",
    components:{
      study_header,
      list_component
    },
    data(){
      return{
        title:'政治学习',
        type:8
      }
    }
  }
</script>

<style scoped lang="scss">
.study-wrapper{
    position: relative;
}
</style>