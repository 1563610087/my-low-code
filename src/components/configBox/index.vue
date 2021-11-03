<template>
  <div class="config-box">
    <el-tabs type="card">
      <el-tab-pane label="组件配置">
        <componentConfig/>
      </el-tab-pane>
      <el-tab-pane label="表单配置">表单</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import componentConfig from "./componentConfig";
export default {
  data() {
    return {
      currentItem: {},
    };
  },
  components: {
    componentConfig,
  }
};
</script>
<style lang='scss' scoped>
.config-box {
  flex: 0 0 300px;
}
</style>