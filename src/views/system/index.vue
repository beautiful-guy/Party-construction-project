<template>
    <div class="system">
        <system_header :title="this.title"></system_header>
        <system_list :title2="this.title" :type="this.type"></system_list>
    </div>
</template>

<script>
  import system_header from '../../components/header_component';
  import system_list from '../../components/list_component';
  export default {
    name: "index",
    components:{
      system_header,
      system_list
    },
    data(){
      return{
        title:'制度建设',
        type:4
      }
    }
  }
</script>

<style scoped lang="scss">

</style>