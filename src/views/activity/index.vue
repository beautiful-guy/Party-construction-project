<template>
    <div class="activity-wrapper">
        <activity_header :title="this.title"></activity_header>
        <activity_list :title2="this.title" :type="this.type"></activity_list>
    </div>
</template>

<script>
  import activity_header from '../../components/header_component';
  import activity_list from '../../components/list_component';
  export default {
    name: "index",
    components:{
      activity_header,
      activity_list
    },
    data(){
      return{
        title:'特色活动',
        type:1
      }
    }
  }
</script>

<style scoped lang="scss">

</style>