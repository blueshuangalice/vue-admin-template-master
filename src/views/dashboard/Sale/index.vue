<template>
  <el-card class="box-card">
    <!--   @tab-click="handleClick" -->
    <div class="flexLayout">
      <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visit"></el-tab-pane>
      </el-tabs>
      <div class="right">
        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span>
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          class="date"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="20">
          <div class="charts" ref="charts"></div>
        </el-col>
        <el-col :span="4" class="rank">
          <h5>门店{{ title }}排行榜排名</h5>
          <ul>
            <li>
              <span class="rindex">0</span>
              <span>肯德基</span>
              <span class="rvalue">12345</span>
            </li>
            <li>
              <span class="rindex">1</span>
              <span>肯德基</span>
              <span class="rvalue">12345</span>
            </li>
            <li>
              <span class="rindex">2</span>
              <span>肯德基</span>
              <span class="rvalue">12345</span>
            </li>
            <li>
              <span class="rindex">3</span>
              <span>肯德基</span>
              <span class="rvalue">12345</span>
            </li>
            <li>
              <span class="rindex">4</span>
              <span>肯德基</span>
              <span class="rvalue">12345</span>
            </li>
            <li>
              <span class="rindex">5</span>
              <span>肯德基</span>
              <span class="rvalue">12345</span>
            </li>
            <li>
              <span class="rindex">6</span>
              <span>肯德基</span>
              <span class="rvalue">12345</span>
            </li>
            <li>
              <span class="rindex">7</span>
              <span>肯德基</span>
              <span class="rvalue">12345</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import dayjs from "dayjs";
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      activeName: "sale",
      mycharts: null,
      date: [],
    };
  },

  mounted() {
    this.mycharts = echarts.init(this.$refs.charts);
    this.mycharts.setOption({
      title: {
        text: this.title + "趋势",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [],
        },
      ],
    });
  },
  computed: {
    title() {
      return this.activeName == "sale" ? "销售额" : "访问量";
    },
    ...mapState({
      listState: (state) => state.home.list,
    }),
  },
  watch: {
    title() {
      this.mycharts.setOption({
        title: {
          text: this.title,
        },
        xAxis: {
          data:
            this.title == "销售额"
              ? this.listState.orderFullYearAxis
              : this.listState.userFullYearAxis,
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data:
              this.title == "销售额"
                ? this.listState.orderFullYear
                : this.listState.userFullYear,
          },
        ],
      });
    },
    listState() {
      this.mycharts.setOption({
        title: {
          text: this.title + "趋势",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.listState.orderFullYearAxis,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data: this.listState.orderFullYear,
          },
        ],
      });
    },
  },

  methods: {
    setDay() {
      const day = dayjs().format("YYYY-MM-DD");
      this.date = [day, day];
    },
    setWeek() {
      const startW = dayjs().day(1).format("YYYY-MM-DD");
      const endW = dayjs().day(7).format("YYYY-MM-DD");
      this.date = [startW, endW];
    },
    setMonth() {
      const startM = dayjs().startOf("month").format("YYYY-MM-DD");
      const endM = dayjs().endOf("month").format("YYYY-MM-DD");
      this.date = [startM, endM];
    },
    setYear() {
      const startY = dayjs().startOf("year").format("YYYY-MM-DD");
      const endY = dayjs().endOf("year").format("YYYY-MM-DD");
      this.date = [startY, endY];
    },
  },
};
</script>

<style scoped>
.box-card {
  margin: 20px 0;
}
.flexLayout {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0;
}
.date {
  width: 250px;
  margin: 0 20px;
}
.right span {
  margin: 0px 10px;
}
/* 图表 */
.charts {
  width: 100%;
  height: 300px;
}
.rank {
  margin-top: 20px;
}
ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0;
}
ul li {
  height: 8%;
}
ul li span {
  margin: 0px 10px;
}
.rIndex {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  color: white;
  text-align: center;
}
.rvalue {
  float: right;
}
</style>