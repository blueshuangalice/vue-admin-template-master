<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  mounted() {
    console.log(this.$refs);
    let lineCharts = echarts.init(this.$refs.charts);

    lineCharts.setOption({
      xAxis: {
        show: false,
        type: "category",
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "bar",
          data: [10, 7, 30, 20, 40, 5, 10, 3, 7],
        },
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltip: {},
    });
  },
};
</script>

<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>