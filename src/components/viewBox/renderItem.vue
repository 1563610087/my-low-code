<template>
  <div v-html="this.renderTag()"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    renderTag() {
      // const { config } = this.data;
      return '<el-input>22</el-input>'
      // return `<${config.tag}>
      //   </${config.tag}>`;
    },
  },
};
</script>
<style lang='scss' scoped>
</style>