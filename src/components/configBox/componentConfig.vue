<template>
  <div class="com-config">
    <el-form ref="form" label-width="80px" size="mini" v-if="currentData.id!==undefined">
      <el-form-item label="标签名:">
        <el-input v-model="currentData.config.label"/>
      </el-form-item>
      <el-form-item label="占位提示:">
        <el-input />
      </el-form-item>
      <el-form-item label="字段名:">
        <el-input />
      </el-form-item>
      <el-form-item label="表单栅格:">
        <el-slider :max="24" :marks="{ 12: '' }"></el-slider>
      </el-form-item>
      <el-form-item label="显示标签:">
        <el-switch />
      </el-form-item>
      <el-form-item label="是否必填:">
        <el-switch />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import emitter from "@/common/utils.js";
export default {
  data() {
    return {
      currentData: {},
    };
  },
  watch: {
    currentData: {
      handler: function () {
        this.changeConfig();
      },
      deep: true,
    },
  },
  mounted() {
    emitter.on("setComponent", (data) => {
      this.currentData = data;
    });
  },
  methods: {
    changeConfig() {
      emitter.emit("changeComponent", this.currentData);
    },
  },
};
</script>
<style lang='scss' scoped>
.com-config {
  padding: 10px 20px 10px 10px;
}
</style>