<template>
  <el-card>
    <div slot="header">
      <div class="category-header">
        <span>销售比</span>
        <el-radio-group v-model="value" size="small">
          <el-radio-button label="全部渠道"></el-radio-button>
          <el-radio-button label="线上" disabled></el-radio-button>
          <el-radio-button label="门店"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="charts" ref="charts"></div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "",
  data() {
    return {
      value: "全部渠道",
    };
  },
  mounted() {
    console.log(this.$refs);
    let pieCharts = echarts.init(this.$refs.charts);
    pieCharts.setOption({
      title: {
        text: "Search Engine",
        subtext: 1048,
        left: "center",
        top: "center",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "outside",
          },

          labelLine: {
            show: true,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    });
    pieCharts.on("mouseover", (params) => {
      console.log(params);
      const { name, value } = params.data;
      pieCharts.setOption({
        title: {
          text: name,
          subtext: value,
        },
      });
    });
  },
};
</script>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.charts {
  height: 300px;
  width: 100%;
}
</style>