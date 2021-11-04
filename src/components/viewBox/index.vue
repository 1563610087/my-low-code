<template>
  <div class="flex-1 view-box">
    <Menu />
    <div class="content" v-if="drawList.length !== 0">
      <el-form size="mini">
        <el-row>
          <FormItem
            v-for="(item, index) in drawList"
            :data="item"
            :key="`${item.label}${index}`"
          >
          </FormItem>
        </el-row>
      </el-form>
    </div>
    <el-empty v-else description="从左侧拖入或点选组件进行表单设计"></el-empty>
  </div>
</template>
<script>
import Menu from "./menu.vue";
import emitter, { getId } from "@/common/utils.js";
import FormItem from "./formItem.vue";
import lodash from "lodash";
export default {
  data() {
    return {
      drawList: [],
      currentItem: {},
      index: null,
    };
  },
  components: {
    Menu,
    FormItem,
  },
  mounted() {
    emitter.on("addComponent", (data) => {
      const componentData = lodash.cloneDeep(data);
      componentData.id = getId();
      this.drawList.push(componentData);
      this.currentItem = componentData;
      this.index = this.drawList.length - 1;
    });
    emitter.on("changeComponent", (data) => {
      this.currentItem = data;
      this.drawList.splice(this.index, 1, data);
    });
  },
  watch: {
    currentItem: {
      handler: function (val) {
        emitter.emit("setComponent", val);
      },
      deep: true,
    },
  },
  methods: {
    clear() {
      this.drawList = [];
      this.currentItem = {};
      this.index = null;
    },
  },
};
</script>
<style scoped lang='scss'>
.view-box {
  border-left: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    padding: 20px;
  }
}

/deep/ .el-form-item {
  margin-bottom: 0 !important;
}
</style>