<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <div class="search-header">
        <span>线上热门搜索</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="clearfix">
      <el-row :gutter="10">
        <el-col :span="12">
          <LineCharts></LineCharts>
        </el-col>
        <el-col :span="12">
          <LineCharts></LineCharts>
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="排名" width="80" type="index">
        </el-table-column>
        <el-table-column label="搜索关键字"> </el-table-column>
        <el-table-column label="用户数" sortable width="180"> </el-table-column>
        <el-table-column label="周涨幅" sortable width="180"> </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        class="pagination"
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </el-card>
</template>

<script>
import LineCharts from "./LineCharts";
export default {
  name: "",
  data() {
    return {
      tableData: [{}],
    };
  },
  components: {
    LineCharts,
  },
};
</script>

<style>
.search-header {
  display: flex;
  justify-content: space-between;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.pagination {
  float: right;
}
</style>