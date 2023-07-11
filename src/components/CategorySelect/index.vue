<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" :model="cForm">
      <el-form-item label="一级分类">
        <el-select
          placeholder="请选择"
          v-model="cForm.category1Id"
          @change="handler1"
          :disabled="isShowTable"
        >
          <el-option
            :label="c1.name"
            :value="c1.id"
            v-for="c1 in CategoryListC1"
            :key="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          placeholder="请选择"
          v-model="cForm.category2Id"
          @change="handler2"
          :disabled="isShowTable"
        >
          <el-option
            :label="c2.name"
            :value="c2.id"
            v-for="c2 in CategoryListC2"
            :key="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          placeholder="请选择"
          v-model="cForm.category3Id"
          @change="handler3"
          :disabled="isShowTable"
        >
          <el-option
            :label="c3.name"
            :value="c3.id"
            v-for="c3 in CategoryListC3"
            :key="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  data() {
    return {
      CategoryList: [],
      CategoryListC1: [],
      CategoryListC2: [],
      CategoryListC3: [],
      cForm: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
      },
    };
  },
  props: ["isShowTable"],
  mounted() {
    this.getCategoryListC1();
  },
  methods: {
    async getCategoryListC1() {
      let result = await this.$API.attr.reqCategortListC1();
      if (result.code == 200) {
        this.CategoryListC1 = result.data;
      }
    },
    async handler1() {
      this.CategoryListC2 = [];
      this.CategoryListC3 = [];
      this.cForm.category2Id = "";
      this.cForm.category3Id = "";
      let { category1Id } = this.cForm;
      this.$emit("getCategoryId", { categoryId: category1Id, level: 1 });
      let result = await this.$API.attr.reqCategortListC2(category1Id);
      if (result.code == 200) {
        this.CategoryListC2 = result.data;
      }
    },
    async handler2() {
      this.CategoryListC3 = [];
      this.cForm.category3Id = "";
      let { category2Id } = this.cForm;
      this.$emit("getCategoryId", { categoryId: category2Id, level: 2 });

      let result = await this.$API.attr.reqCategortListC3(category2Id);
      if (result.code == 200) {
        this.CategoryListC3 = result.data;
      }
    },
    handler3() {
      let { category3Id } = this.cForm;
      this.$emit("getCategoryId", { categoryId: category3Id, level: 3 });
    },
  },
};
</script>

<style>
</style>