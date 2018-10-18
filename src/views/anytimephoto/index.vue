<template>
    <div class="photo-wrapper">
        <photo_header :title="this.title"></photo_header>
        <div class="all-table">
            <div class="table-item" v-for="item in tableData" @click="skipToPhotoDetail(item.newsId)">
                <img :src="item.pic" alt="">
                <div>
                    <span v-text="item.title"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import photo_header from '../../components/header_component';
  export default {
    name: "index",
    components:{
      photo_header
    },
    data(){
      return{
        title:'随时随地拍',
        tableData:[]
      }
    },
    methods:{
      getTableData(){
        this.$axios.get('/news/newsList.do?page=1&rows=10&type=7').then(res=>{
          if (res.code == 1){
            this.tableData = res.rows;
          }
        })
      },
      skipToPhotoDetail(id){
        this.$router.push(`/news_detail?title=${this.title}&id=${id}`)
      },
    },
    created(){
      this.getTableData();
    }
  }
</script>

<style scoped lang="scss">
.photo-wrapper{
    .all-table{
        width: 100%;
        margin-top: 43px;
        .table-item{
            padding: 16px;
            width: 155.5px;
            float: left;
            img{
                width: 155.5px;
                height: 116.5px;
            }
            span{
                display:-webkit-box;
                -webkit-line-clamp:1;
                -webkit-box-orient:vertical;
                overflow:hidden;
                font-size: 13px;
                line-height: 19.5px;
            }
        }
    }
}
</style>