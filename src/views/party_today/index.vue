<template>
    <div class="today-wrapper">
        <today_header :title="this.title"></today_header>
        <div class="main-content">
            <div v-html="this.HtmlData"></div>
        </div>
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
        title:'党史上的今天',
        HtmlData:''
      }
    },
    methods:{
      getHtmlData(){
        this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70504%2Findex.html').then(res=>{
          if(res){
            this.HtmlData = res
          }
        })
      }
    },
    created(){
      this.getHtmlData();
    }
  }
</script>

<style  lang="scss">
.today-wrapper{
    position: relative;
    padding: 10px;
    .top01,.top02,.top03{
        display: none;
    }
    .p1_content{
        margin-top: 43px;
        .p1_01{
            display: none;
        }
        .p1_02{
            .red{
                font-size: 24px;
                font-weight: 500;
            }
            h2{
                font-size: 20px;
                font-weight: 500;
                line-height: 24px;
                margin: 10px 0;
            }
            p{
                font-size: 14px;
                font-weight: 400;
                line-height: 28px;
                margin-bottom: 10px;
            }
        }
    }

}
.clear{
    display: none;
}
</style>