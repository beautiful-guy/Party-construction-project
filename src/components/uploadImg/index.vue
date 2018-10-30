<template>
    <label class="upload-wrap">
        <img  class="image"  :src="imgurl">
        <input type="file"  style="display: none" @change="upload">
    </label>
</template>
<script>
  export default {
    name: "upImg",
    props:{
      value:{
        type: String
      }
    },
    data(){
      return {
        imgurl:this.value,
        that:this
      }
    },
    methods:{
      upload(event){
        let file = event.target.files[0]
        let imgFile = new FileReader();
        imgFile.readAsDataURL(file);
        imgFile.onload = (e)=>{
          let imgData = e.target.result.replace(/data:image\/jpeg;base64,/g,'');
          this.imgurl = e.target.result;
          let formData = new FormData()
          formData.append('myFile',imgData)
          this.$axios.post('/image/uploadBase64.do',formData).then( res => {
            let header = res.url
            this.$emit('img',header) //E://
          })
        }
      }
    },
    watch:{
      value(val){
        this.imgurl = val
      }
    }
  }
</script>

<style scoped lang="scss">
    .upload-wrap{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        input{
            outline: none;
        }
        img{
            width: 0.5rem;
            height: 0.5rem;
        }
    }
</style>