
<template>
  <div class="Navbar-page">
    <el-row>
      <el-col>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <span>Components</span>
            </template>
            <el-menu-item @click="nav('/components/flockbutton')" index="/components/flockbutton">
              <span slot="title">FlockButton</span>
            </el-menu-item>
            <el-menu-item @click="nav('/components/fab')" index="/components/fab">
              <span slot="title">FAB</span>
            </el-menu-item>
            <el-menu-item @click="nav('/components/gradientbutton')" index="/components/gradientbutton">
              <span slot="title">GradientButton</span>
            </el-menu-item>
            <el-menu-item @click="nav('/components/transformcontainer')" index="/components/transformcontainer">
              <span slot="title">TransformContainer</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>Directives</span>
            </template>
            <el-menu-item @click="nav('/components/hoveranimation')" index="/components/hoveranimation">
              <span slot="title">HoverAnimation</span>
            </el-menu-item>
            <el-menu-item @click="nav('/components/hovermagicunderline')" index="/components/hovermagicunderline">
              <span slot="title">HoverMagicUnderline</span>
            </el-menu-item>
          </el-submenu>

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
