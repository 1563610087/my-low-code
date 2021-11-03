<template>
  <div class="item-box">
    <div class="item-btn">
      <el-icon>
        <Delete></Delete>
      </el-icon>
      <el-icon>
        <Plus></Plus>
      </el-icon>
    </div>
    <el-col :span="config.span">
      <el-form-item
        :label-width="labelWidth"
        :label="config.showLabel ? config.label : ''"
        :required="config.required"
      >
        <Render :data="this.data" />
      </el-form-item>
    </el-col>
  </div>
</template>
<script>
import Render from "./render";
import { Delete,Plus } from "@element-plus/icons";
export default {
  data() {
    return {};
  },
  components: {
    Render,
    Delete,
    Plus
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

  .item-btn {
    position: absolute;
    right: 0;
  }
}
</style>