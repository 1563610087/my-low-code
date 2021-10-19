<template>
  <div class="home">
    <Header />
    <div class="content">
      <ComponentBox />
      <ViewBox/>
      <ConfigBox/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header";
import ComponentBox from "@/components/componentBox";
import ConfigBox from "@/components/configBox/index.jsx";
import ViewBox from "@/components/viewBox";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    ComponentBox,
    ViewBox,
    ConfigBox
  },
  watch: {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.home {
  height: 100%;

  .content {
    display: flex;
    height: calc(100% - 51px) ;
  }
}
</style>