<template>
    <div class="study-wrapper">
        <study_header :title="this.title"></study_header>
        <study_list :title2="this.title" :type="this.type"></study_list>
    </div>
</template>

<script>
    import study_header from '../../components/header_component';
    import study_list from '../../components/list_component';
  export default {
    name: "index",
    components:{
      study_header,
      study_list
    },
    data(){
      return{
        title:'随时随地学',
        type:6
      }
    }
  }
</script>

<style scoped lang="scss">

</style>