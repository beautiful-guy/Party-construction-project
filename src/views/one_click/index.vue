<template>
    <div class="click-wrapper">
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
        title:'党建一点通',
        type:3
      }
    }
  }
</script>

<style scoped lang="scss">
.click-wrapper{
    position: relative;
}
</style>