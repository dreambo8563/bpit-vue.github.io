
<template>
  <div class="Navbar-page">
    <el-row>
      <el-col>
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item @click="nav('/components/flockbutton')" index="1">
            <span slot="title">FlockButton</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">导航四</span>
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
