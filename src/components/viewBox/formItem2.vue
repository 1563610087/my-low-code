<template>
  <div>
    {{data.label}}
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type:Object,
      required:true
    }
  },
  data() {
    return {};
  },
  watch: {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>