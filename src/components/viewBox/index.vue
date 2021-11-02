<template>
  <div class="flex-1 view-box">
    <Menu />
    <div class="content" v-if="drawList.length !== 0">
      <div>
        <el-row>
          <el-form>
            <FormItem
              v-for="(item, index) in drawList"
              :data="item"
              :key="`${item.label}${index}`"
            >
            </FormItem>
          </el-form>
        </el-row>
      </div>
    </div>
    <el-empty v-else description="从左侧拖入或点选组件进行表单设计"></el-empty>
  </div>
</template>
<script>
import Menu from "./menu.vue";
import emitter from "@/common/utils.js";
import FormItem from "./formItem.jsx";
export default {
  data() {
    return {
      drawList: [],
    };
  },
  components: {
    Menu,
    FormItem,
  },
  mounted() {
    emitter.on("addComponent", (data) => {
      this.drawList.push(data);
    });
  },
  watch: {},
  methods: {
    clear() {
      this.drawList = [];
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
</style>