<template>
  <el-col :span="24" class="item-box" @mouseenter="display" @mouseleave="disappear">
    <el-form-item
      :label-width="labelWidth"
      :label="config.showLabel ? config.label : ''"
      :required="config.required"
    >
      <Render :data="this.data" />
    </el-form-item>
    <div></div>
    <div class="item-btn" v-if="buttonVisible">     
      <el-icon color="#409EFC"><Plus></Plus></el-icon>
      <el-icon color="#F56C6C" @click="deleteItem"><Delete></Delete></el-icon>
    </div>
  </el-col>
</template>
<script>
import Render from "./render";
import { Delete, Plus } from "@element-plus/icons";
export default {
  data() {
    return {
      buttonVisible:false
    };
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
    index:{
      type:Number,
      required: true,
    }
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
  methods: {
    deleteItem(){
      this.$attrs.onDeleteItem(this.index)
    },
    display(){
      this.buttonVisible=true;
    },
    disappear(){
      this.buttonVisible=false
    }
  },
};
</script>
<style lang='scss' scoped>
.item-box {
  box-sizing: border-box;
  position: relative;
  height: 50px;
  padding: 10px 5px 0 5px;

  &:hover{
    border: 1px dashed #f56c6c;
    background-color: #fef0f0;
    cursor: move;
  }
}

.item-btn {
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 2px;
  z-index: 20;

  i{
    cursor: pointer;
    margin:0 5px;
  }
}
</style>