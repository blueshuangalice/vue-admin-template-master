<template>
  <div>
    <el-card style="margin: 20px 0px">
      <CategorySelect
        @getCategoryId="getCategoryId"
        :isShowTable="!isShowTable"
      ></CategorySelect>
    </el-card>
    <el-card>
      <div v-show="scene == 0">
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addSpu"
          >添加SPU</el-button
        >
        <el-table :data="records" style="width: 100%" border>
          <el-table-column type="index" align="center" label="序号" width="80">
          </el-table-column>
          <el-table-column prop="spuName" label="spu名称"> </el-table-column>
          <el-table-column prop="description" label="spu描述">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="{ row, $index }">
              <hint-button
                type="success"
                icon="el-icon-plus"
                size="mini"
                title="添加spu"
              ></hint-button>
              <hint-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
                title="修改spu"
                @click="updateSpu(row)"
              ></hint-button>
              <hint-button
                type="info"
                icon="el-icon-info"
                size="mini"
                title="查看当前spu全部sku列表"
              ></hint-button>
              <hint-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                title="删除spu"
              ></hint-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-align: center"
          layout="prev, pager, next,jumper, ->,sizes,total"
          :total="total"
          :current-page="page"
          :page-size="limit"
          :page-sizes="[3, 5, 10]"
          @current-change="this.getSpuList"
          @size-change="handleSizeChange"
        >
        </el-pagination>
      </div>
      <SpuForm v-show="scene == 1" />
      <SkuForm v-show="scene == 2" />
    </el-card>
  </div>
</template>

<script>
import SpuForm from "./SpuForm";
import SkuForm from "./SkuForm";
export default {
  name: "spuAnage",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      isShowTable: true,
      page: 1,
      limit: 3,
      records: [],
      total: 0,
      scene: 1,
    };
  },
  components: {
    SpuForm,
    SkuForm,
  },
  methods: {
    getCategoryId({ categoryId, level }) {
      if (level == 1) {
        this.category1Id = categoryId;
        this.category2Id = "";
        this.category3Id = "";
      } else if (level == 2) {
        this.category2Id = categoryId;
        this.category3Id = "";
      } else {
        this.category3Id = categoryId;
        this.getSpuList();
      }
    },
    async getSpuList(pages = 1) {
      this.page = pages;
      const { page, limit, category3Id } = this;
      let result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      console.log(result);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    },
    handleSizeChange(size) {
      this.limit = size;
      this.getSpuList();
    },
    addSpu() {
      this.scene = 1;
    },
    updateSpu(row) {
      this.scene = 1;
    },
  },
};
</script>

<style>
</style>