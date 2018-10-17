<template>
    <div class="today-wrapper">
        <today_header :title="this.title"></today_header>
    </div>
</template>

<script>
    import today_header from '../../components/header_component';
  export default {
    name: "index",
    components:{
      today_header
    },
    data(){
      return{
        title:'党史上的今天'
      }
    }
  }
</script>

<style scoped>

</style>