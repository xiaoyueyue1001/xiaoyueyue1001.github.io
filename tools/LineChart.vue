<template>
  <Chart :option="chartOption"></Chart>
</template>
<script>
import Chart from '@/components/Chart';
export default {
  components: { Chart },
  props: {
    value: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  computed: {
    chartOption () {
      let chartOption = {
        tooltip: {
          backgroundColor: 'rgba(27,45,61,0.8)',
          textStyle: {
            fontSize: 12,
            color: '#fff'
          },
          padding: 10,
          trigger: 'axis'
        },
        dataZoom: [
          {
            type: 'inside',
            minValueSpan: 10
          },
          {
            show: false,
            type: 'slider',
            bottom: 60,
            minValueSpan: 10
          }
        ],
        axisPointer: {
          lineStyle: {
            color: '#126439'
          }
        },
        grid: {
          top: 20,
          left: 50,
          bottom: 30
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#05587f'
            }
          },
          axisLabel: {
            color: '#a4b3cb'
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: 'red'
            }
          },
          data: [
            '10-23周日',
            '10-24周一',
            '10-25周二',
            '10-26周三',
            '10-27周四',
            '10-28周五',
            '10-29周六'
          ]
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 60,
          splitNumber: 5,
          minInterval: 15,
          maxInterval: 15,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#a4b3cb'
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#024668'
            }
          }
        },
        series: [
          {
            name: '给水管道增长趋势',
            type: 'line',
            data: [
              ['10-23周日', 15],
              ['10-24周一', 10],
              ['10-25周二', 23],
              ['10-26周三', 40],
              ['10-27周四', 55],
              ['10-28周五', 50],
              ['10-29周六', 34]
            ],
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            animationEasing: 'quadraticIn',
            animationDuration: 2000,
            itemStyle: {
              color: '#0c9711'
            }
          }
        ]
      };
      chartOption.xAxis.data = this.value.map(item => item.label);
      chartOption.series[0].data = this.value.map(item => [item.label, item.value]);
      return chartOption;
    }
  }
};
</script>
