<template>
  <div class="menu">
    <el-button type="primary" size="mini" plain>预览</el-button>
    <el-button type="success" size="mini" plain @click="dialogVisible = true"
      >导出vue文件</el-button
    >
    <el-button type="warning" size="mini" plain>复制代码</el-button>
    <el-button type="primary" size="mini" plain>查看json</el-button>
    <el-button type="danger" size="mini" plain @click="clearData"
      >清空</el-button
    >
  </div>
  <!-- 对话框 -->
  <el-dialog
    v-model="dialogVisible"
    title="导出文件"
    width="400px"
    :before-close="handleClose"
    @open="onOpen"
    center
  >
    <el-form :model="formData" size="medium">
      <el-form-item label="文件名">
        <el-input
          v-model="formData.fileName"
          placeholder="请输入文件名"
        ></el-input>
      </el-form-item>
      <el-form-item label="生成类型">
        <el-radio v-model="formData.type" label="page">页面</el-radio>
        <el-radio v-model="formData.type" label="dialog">弹窗</el-radio>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  emits: ["generate"],
  data() {
    return {
      dialogVisible: false,
      formData: {
        fileName: "",
        type: "page",
      },
    };
  },
  watch: {},
  methods: {
    clearData() {
      this.$confirm("确定要清空所有组件吗？", "提示", { type: "warning" }).then(
        () => {
          this.$parent.clear();
        }
      );
    },
    handleClose() {
      this.dialogVisible = false;
      this.formData = {
        fileName: "",
        type: "page",
      };
    },
    confirm() {
      this.$emit('generate',this.formData)
      this.dialogVisible = false;
    },
    onOpen(){
      this.formData.fileName = `${+new Date()}.vue`
    }
  },
};
</script>
<style scoped lang='scss'>
.menu {
  flex: 0 0 40px;
  line-height: 40px;
  padding: 0 20px;
  text-align: right;
  border-bottom: 1px solid #dcdfe6;
}
</style>