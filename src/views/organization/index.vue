<template>
    <div class="organization-wrapper">
        <org_header :title="this.title"></org_header>
        <div class="map" id="map">

        </div>
    </div>
</template>

<script>
    import org_header from '../../components/header_component';
  export default {
    name: "index",
    components:{
      org_header
    },
    data(){
      return{
        title:'流动党员找组织'
      }
    },
    methods:{
      createMap(){
        const BMap = window.BMap;
        const map = new BMap.Map("map");          // 创建地图实例
        const point = new BMap.Point(116.404,39.915);  // 创建北京坐标
        const point2 = new BMap.Point(114.02,32.98);
        const marker = new BMap.Marker(point);
        const marker2 = new BMap.Marker(point2);
        const content = '信息工程学院学生流动党支部 支部书记：高洋 电话：13526395588';
        const content2 = '信息工程学院学生党支部 支部书记：杨鑫 电话0396-285032  信息工程学院党总支，总支书记：柳晓阳 电话0396-285032';
        const label = new BMap.Label(content,{
          position:point
        });
        const label2 = new BMap.Label(content2,{
          position:point2
        });
        map.centerAndZoom(point, 5);                 // 初始化地图，设置中心点坐标和地图级别
        map.addControl(new BMap.NavigationControl({
          anchor:BMAP_ANCHOR_TOP_LEFT
        }));
        map.addControl(new BMap.GeolocationControl());
        map.addOverlay(marker);
        map.addOverlay(marker2);
        map.addOverlay(label);
        map.addOverlay(label2);
      }
    },
    mounted(){
      this.createMap();
    }
  }
</script>

<style scoped lang="scss">
.organization-wrapper{
    position: relative;
    .map{
        margin-top: 43px;
        width: 100%;
        height: 624px;
    }
}
</style>