<template>
  <div>
    <canvas :width="width" :height="height" id="map-canvas"></canvas>
    <img src="../assets/timg.jpg" alt="" id="img-canvas">
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 825
    },
    height: {
      type: Number,
      default: 220
    },
    // 经纬度坐标
    coordinateList: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  computed: {
    // 获取缩放拉伸的方向（为了计算拉伸系数）
    direction () {
      let DeltaX = this.getMaxLongitude(this.coordinateList) - this.getMinLongitude(this.coordinateList);
      let DeltaY = this.getMaxLatitude(this.coordinateList) - this.getMinLatitude(this.coordinateList);
      return DeltaX / DeltaY > this.width / this.height ? 'horizontal' : 'vertical';
    },
    coordinateListToCanvas () {
      return this.coordinateList.map(item => this.computedGeographicCoordinatesToCanvasCoordinates(item));
    }
  },
  watch: {
    coordinateListToCanvas (val) {
      if (val.length) {
        this.draw();
      }
    }
  },
  methods: {
    // 获得最大维度
    getMaxLatitude (coordinateList) {
      return Math.max(...coordinateList.map(item => item.latitude));
    },
    // 获得最小维度
    getMinLatitude (coordinateList) {
      return Math.min(...coordinateList.map(item => item.latitude));
    },
    // 获得最大经度
    getMaxLongitude (coordinateList) {
      return Math.max(...coordinateList.map(item => item.longitude));
    },
    // 获得最小经度
    getMinLongitude (coordinateList) {
      return Math.min(...coordinateList.map(item => item.longitude));
    },
    draw () {
      let cvs = document.querySelector('#map-canvas');
      let ctx = cvs.getContext('2d');
      ctx.beginPath();
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      ctx.moveTo(...this.coordinateListToCanvas[0]);
      for (let i = 1; i < this.coordinateListToCanvas.length; i++) {
        ctx.lineTo(...this.coordinateListToCanvas[i]);
      }
      let img = document.querySelector('#img-canvas');
      let pat = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = pat;
      ctx.fill();
    },
    // 坐标系转换中间A->B->C  其中含有过渡坐标系B 为canvas正中心为（0,0）原点  方向与浏览器相同 拉伸系数为地理坐标在canvas容器里的最大拉伸系数
    // 将地理坐标系转换成canvas坐标系
    computedGeographicCoordinatesToCanvasCoordinates (coordinate) {
      let coefficient = 0; // 缩放系数
      // 获得地图canvas中心点对应的经纬度坐标
      let center = {
        longitude: (this.getMaxLongitude(this.coordinateList) + this.getMinLongitude(this.coordinateList)) / 2,
        latitude: (this.getMaxLatitude(this.coordinateList) + this.getMinLatitude(this.coordinateList)) / 2
      };
      // 计算拉伸系数
      if (this.direction === 'horizontal') {
        coefficient = (this.getMaxLongitude(this.coordinateList) - this.getMinLongitude(this.coordinateList)) / this.width;
      } else {
        coefficient = (this.getMaxLatitude(this.coordinateList) - this.getMinLatitude(this.coordinateList)) / this.height;
      }

      coordinate = [
        (coordinate.longitude - center.longitude) / coefficient,
        -(coordinate.latitude - center.latitude) / coefficient
      ];
      return [coordinate[0] + this.width / 2, coordinate[1] + this.height / 2];
    },
    // 将canvas坐标系转换成地理坐标系
    computedCanvasCoordinatesToGeographicCoordinates (coordinate) {
      let coordinateToCenter = [coordinate[0] - this.width / 2, coordinate[1] - this.height / 2];
      let coefficient = 0;

      // 获得地图canvas中心点对应的经纬度坐标
      let center = {
        longitude: (this.getMaxLongitude(this.coordinateList) + this.getMinLongitude(this.coordinateList)) / 2,
        latitude: (this.getMaxLatitude(this.coordinateList) + this.getMinLatitude(this.coordinateList)) / 2
      };
      // 计算拉伸系数
      if (this.direction === 'horizontal') {
        coefficient = (this.getMaxLongitude(this.coordinateList) - this.getMinLongitude(this.coordinateList)) / this.width;
      } else {
        coefficient = (this.getMaxLatitude(this.coordinateList) - this.getMinLatitude(this.coordinateList)) / this.height;
      }

      return [coordinateToCenter[0] * coefficient + center.longitude, -coordinateToCenter[1] * coefficient + center.latitude];
    }
  }

};
</script>
<style lang="less" scoped>
canvas{
  vertical-align: top;
}
img{
  display: none;
}
</style>
