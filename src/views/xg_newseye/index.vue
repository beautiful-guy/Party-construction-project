<template>
    <div class="newseye-wrapper">
        <newseye :title="this.title"></newseye>
        <newslist :title2="this.title" :type="this.type"></newslist>
    </div>
</template>

<script>
    import newseye from '../../components/header_component';
    import newslist from '../../components/list_component';
  export default {
    name: "index",
    components: {
      newseye,
      newslist
    },
    data() {
      return {
        title: '信工新闻眼',
        type: 0
      }
    }
  }
</script>

<style scoped lang="scss">
.newseye-wrapper{
    position: relative;
}
</style>