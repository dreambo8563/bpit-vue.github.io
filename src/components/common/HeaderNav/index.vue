<template>
    <el-row type="flex" justify="center">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/install">How to Install</el-menu-item>
            <el-menu-item index="/components/flockbutton">Components</el-menu-item>
        </el-menu>
    </el-row>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
      if (key.startsWith("/components")) {
        this.activeIndex = "/components/flockbutton";
        return;
      }
      this.activeIndex = key;
    }
  },
  created() {
    this.handleSelect(this.$route.path);
  }
};
</script>
 <style lang="scss" scoped>
</style>
