<template>
  <el-col :span="24" class="item-box">
    <el-form-item
      :label-width="labelWidth"
      :label="config.showLabel ? config.label : ''"
      :required="config.required"
    >
      <Render :data="this.data" />
    </el-form-item>
    <div></div>
    <div class="item-btn">     
      <el-icon><Plus></Plus></el-icon>
      <el-icon><Delete></Delete></el-icon>
    </div>
  </el-col>
</template>
<script>
import Render from "./render";
import { Delete, Plus } from "@element-plus/icons";
export default {
  data() {
    return {};
  },
  components: {
    Render,
    Delete,
    Plus,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    config: function () {
      return this.data.config;
    },
    labelWidth: function () {
      const { config } = this.data;
      const width = config.labelWidth ? `${config.labelWidth}px` : null;
      return width;
    },
  },

  watch: {},
  methods: {},
};
</script>
<style lang='scss' scoped>
.item-box {
  position: relative;
  height: 50px;
  padding-top: 10px;
  padding-right: 40px;

  &:hover{
    border: 1px dashed #909399;
    cursor: move;
  }
}

.item-btn {
  position: absolute;
  top: 15px;
  right: 2px;
  z-index: 20;

  i{
    cursor: pointer;
  }
}
</style>