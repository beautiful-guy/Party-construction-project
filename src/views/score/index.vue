<template>
    <div class="score-wrapper">
        <score_header :title="title"></score_header>
        <div class="score-top">
            <div class="score-img">
                <img src="../../assets/score_top.png" alt="">
                <p v-text="totalScore"></p>
            </div>
        </div>
        <div class="score-detail" @click="skipToScoredetail">
            <div class="detail-l">
                <img src="../../assets/score_detail.png" alt="">
                <span>积分明细</span>
            </div>
            <div class="detail-r">
                <img src="../../assets/right_arrow.png" alt="">
            </div>
        </div>
        <div class="score-rule">
            <div class="rule-head">
                <span>积分规则</span>
                <img src="../../assets/question.png" alt="">
            </div>
            <div class="rule-main">
                <p>登录APP</p>
                <span>5</span>
            </div>
            <div class="rule-main">
                <p>完善个人信息</p>
                <span>2</span>
            </div>
            <div class="rule-main">
                <p>查看积分</p>
                <span>1</span>
            </div>
            <div class="rule-main">
                <p>按时交纳党费</p>
                <span>10</span>
            </div>
            <div class="rule-main">
                <p>查看通知</p>
                <span>2</span>
            </div>
            <div class="rule-main">
                <p>了解学院工作动态</p>
                <span>5</span>
            </div>
            <div class="rule-main">
                <p>上交思想汇报经审核通过</p>
                <span>5</span>
            </div>
            <div class="rule-main">
                <p>主动学习相关文件</p>
                <span>10</span>
            </div>
            <div class="rule-main">
                <p>认真撰写心得总结并上交，经审核通过</p>
                <span>5</span>
            </div>
            <div class="rule-main">
                <p>提交个人总结，并参与评议</p>
                <span>2</span>
            </div>
            <div class="rule-main">
                <p>积极参与互动</p>
                <span>5</span>
            </div>
            <div class="rule-main">
                <p>学习党建知识</p>
                <span>5</span>
            </div>
            <div class="rule-main">
                <p>学习党史</p>
                <span>10</span>
            </div>
            <div class="rule-main">
                <p>创先争优事迹</p>
                <span>10</span>
            </div>
            <div class="rule-main">
                <p>学党章，学习近平总书记系列讲话</p>
                <span>10</span>
            </div>
            <div class="rule-main">
                <p>用镜头记录两学一做过程中令人感动的人和事</p>
                <span>3</span>
            </div>
            <div class="rule-main">
                <p>关注并积极参与特色活动</p>
                <span>5</span>
            </div>
            <div class="rule-main">
                <p>制度化、常态化建设</p>
                <span>5</span>
            </div>
        </div>
        <div class="footer">
        </div>
    </div>
</template>

<script>
    import score_header from '../../components/header_component';
  export default {
    name: "index",
    components:{
      score_header
    },
    data(){
      return{
        title:'个人量化积分',
        totalScore:''
      }
    },
    methods:{
      getUserData(){
        this.$axios.get('/user/userInfo.do').then(res=>{
          if(res.code == 1){
            this.totalScore = res.data.totalScore
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      skipToScoredetail(){
        this.$router.push('/scoredetail')
      }
    },
    created(){
      this.getUserData()
    }
  }
</script>

<style scoped lang="scss">
.score-wrapper{
    position: relative;
    .score-top{
        margin-top: 43px;
        position: relative;
        height: 145px;
        img{
            width: 100%;
            height: 100%;
        }
        p{
            font-size: 20px;
            color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
    .score-detail{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        border: 1px solid #ccc;
        .detail-l{
            img{
                width: 32px;
                height: 32px;
                vertical-align: middle;
            }
            span{
                padding-left: 10px;
                font-size: 16px;
            }
        }
        .detail-r{
            img{
                height: 12px;
                width: 7.6px;
                vertical-align: middle;
            }
        }
    }
    .score-rule{
        margin-bottom: 50px;
        .rule-head{
            display: flex;
            justify-content: space-between;
            padding: 8px 15px;
            border-bottom: 1px solid #ccc;
            background-color: #eee;
            span{
                font-size: 14px;
            }
            img{
                width: 18px;
                height: 18px;
            }
        }
        .rule-main{
            display: flex;
            justify-content: space-between;
            padding: 8px 15px;
            border-bottom: 1px solid #ccc;
            font-size: 14px;
            p{
                color: #aaa;
            }
            span{
                color: red;
            }
        }
    }
    .footer{
        height: 50px;
        background-color: #efeff4;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
    }
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
}
</style>