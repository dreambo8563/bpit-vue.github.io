
<template>
  <div class="Navbar-page">
    <el-row>
      <el-col>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
          <el-menu-item @click="nav('/components/flockbutton')" index="/components/flockbutton">
            <span slot="title">FlockButton</span>
          </el-menu-item>
          <el-menu-item @click="nav('/components/fab')" index="/components/fab">
            <span slot="title">FAB</span>
          </el-menu-item>
          <el-menu-item @click="nav('/components/gradientbutton')" index="/components/gradientbutton">
            <span slot="title">GradientButton</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    nav(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style scoped>
</style>
