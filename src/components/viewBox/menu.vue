<template>
  <div class="menu">
    <el-button type="primary" size="mini">预览</el-button>
    <el-button type="primary" size="mini">导出vue文件</el-button>
    <el-button type="primary" size="mini">复制代码</el-button>
    <el-button type="primary" size="mini">查看json</el-button>
    <el-button type="primary" size="mini" @click="clearData">清空</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {
    clearData(){
      this.$confirm('确定要清空所有组件吗？', '提示', { type: 'warning' }).then(
        () => {
          this.$parent.clear()
        }
      )
    }
  },
};
</script>
<style scoped lang='scss'>
.menu {
  flex: 0 0 40px;
  line-height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid #dcdfe6;
}
</style>