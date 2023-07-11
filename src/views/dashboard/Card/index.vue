<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card>
        <Detail title="总销售额" count="￥ 126560">
          <template slot="charts">
            <span
              >周同比 56.67%<svg
                t="1688538361685"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6563"
                width="16"
                height="16"
              >
                <path
                  d="M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z"
                  fill="#d81e06"
                  p-id="6564"
                ></path></svg
            ></span>
            <span
              >日同比 19.96%
              <svg
                t="1688538317865"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5446"
                width="16"
                height="16"
              >
                <path
                  d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                  fill="#1afa29"
                  p-id="5447"
                ></path>
              </svg>
            </span>
          </template>
          <template slot="footer">
            <span>日销售额 ￥ 12423</span>
          </template>
        </Detail>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <Detail title="访问量" count="88460">
          <template slot="charts">
            <lineCharts></lineCharts>
          </template>
          <template slot="footer">
            <span>日访问量 1234</span>
          </template>
        </Detail>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <Detail title="支付笔数" count="88460">
          <template slot="charts">
            <barCharts></barCharts>
          </template>
          <template slot="footer">
            <span>转化率64%</span>
          </template>
        </Detail>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <Detail title="运营活动效果" count="78%">
          <template slot="charts">
            <progressChart></progressChart>
          </template>
          <template slot="footer">
            <span
              >周同比 56.67%<svg
                t="1688538361685"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6563"
                width="16"
                height="16"
              >
                <path
                  d="M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z"
                  fill="#d81e06"
                  p-id="6564"
                ></path></svg
            ></span>
            <span
              >日同比 19.96%
              <svg
                t="1688538317865"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5446"
                width="16"
                height="16"
              >
                <path
                  d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                  fill="#1afa29"
                  p-id="5447"
                ></path>
              </svg>
            </span>
          </template>
        </Detail>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Detail from "./Detail";
import lineCharts from "./lineChart";
import barCharts from "./barChart";
import progressChart from "./progressChart";
export default {
  name: "",
  components: {
    Detail,
    lineCharts,
    barCharts,
    progressChart,
  },
};
</script>

<style>
</style>