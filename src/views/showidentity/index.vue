<template>
    <div class="identity-wrapper">
        <study_header :title="this.title"></study_header>
        <list_component :title2="this.title" :type="this.type"></list_component>
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
        title:'党员亮身份',
        type:5
      }
    }
  }
</script>

<style scoped lang="scss">
.identity-wrapper{
    position: relative;
}
</style>