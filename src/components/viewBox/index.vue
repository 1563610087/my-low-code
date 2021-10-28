<template>
  <div class="flex-1 view-box">
    <Menu/>
    <div class="conntent" v-if="drawList.length !== 0">
      <div>
        <FormItem
        v-for="(item,index) in drawList"
        :data="item"
        :key="`${item.label}${index}`"
        >
        </FormItem>
      </div>
    </div>
    <div class="enpty-info" v-else>从左侧拖入或点选组件进行表单设计</div>
  </div>
</template>
<script>
import Menu from "./menu.vue";
import emitter from "@/common/utils.js";
import FormItem from './formItem.jsx'
export default {
  data() {
    return {
      drawList: [],
    };
  },
  components: {
    Menu,
    FormItem
  },
  mounted() {
    emitter.on("addComponent", (data) => {
      this.drawList.push(data)
    });
  },
  watch: {},
  methods: {
    clear(){
      this.drawList=[]
    }
  },
};
</script>
<style scoped lang='scss'>
.view-box {
  border-left: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  display: flex;
  flex-direction: column;

  .enpty-info {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #ccb1ea;
  }
}
</style>