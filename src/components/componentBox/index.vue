<template>
  <div class="component">
    <el-tabs type="card">
      <el-tab-pane label="表单">
        <!-- <el-scrollbar> -->
        <div class="component-wrapper">
          <div
            class="component-group"
            v-for="item in formComponents"
            :key="item.type"
          >
            <div class="component-title">{{ item.type }}</div>
            <div class="component-item">
              <div
                v-for="(item2, index) in item.componentList"
                :key="index"
                :draggable="true"
                @dragstart="onStart(item2)"
                @dragend="onEnd(item2)"
                @click="addComponent(item2)"
              >
                {{ item2.config.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- </el-scrollbar> -->
      </el-tab-pane>
      <el-tab-pane label="表格">Task</el-tab-pane>
      <el-tab-pane label="模板">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import {
  tableComponents,
  inputComponents,
  selectComponents,
} from "@/common/config";
import emitter from "@/common/utils.js";
export default {
  data() {
    return {
      tableComponents,
      formComponents: [
        {
          type: "输入型组件",
          componentList: inputComponents,
        },
        {
          type: "选择型组件",
          componentList: selectComponents,
        },
      ],
    };
  },
  methods: {
    //开始拖拽事件
    onStart(data) {
      console.log(data, 2222);
    },
    //拖拽结束事件
    onEnd(data) {
      console.log(data, 2222);
    },
    addComponent(data) {
      emitter.emit("addComponent", data);
    },
  },
};
</script>
<style scoped lang='scss'>
.component {
  flex: 0 0 280px;

  &-wrapper{
    width: 100%;
  }

  &-group {
    padding: 0 10px 10px;
  }

  &-title {
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    font-size: 14px;
    color: #606266;
  }

  &-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    cursor: move;
    div {
      flex: 0 0 120px;
      margin:5px 0;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #909399;
      background-color: #f6f7ff;
      box-sizing: border-box;
      &:hover {
        border: 1px dashed #909399;
      }
    }
  }
}
</style>