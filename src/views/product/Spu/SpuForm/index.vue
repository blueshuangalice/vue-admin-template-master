<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称">
        <el-input placeholder="请输入SPU名称"></el-input>
      </el-form-item>
      <el-form-item label="品牌">
        <el-select placeholder="请选择品牌" value="">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SPU描述">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入SPU描述"
        ></el-input>
      </el-form-item>
      <el-form-item label="SPU图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>

      <el-form-item label="销售属性">
        <el-select placeholder="还有3未选择" value="">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-plus">添加销售属性</el-button>
        <el-table style="width: 100%">
          <el-table-column
            prop="date"
            label="序号"
            type="index"
            width="80"
            align="center"
            border
          >
          </el-table-column>
          <el-table-column prop="name" label="属性名"> </el-table-column>
          <el-table-column prop="address" label="属性值名称列表">
          </el-table-column>
          <el-table-column prop="address" label="操作"> </el-table-column>
        </el-table>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SpuForm",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
</style>