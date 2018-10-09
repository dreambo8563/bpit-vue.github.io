
<template>
  <div class="Navbar-page">
    <el-row>
      <el-col>
        <el-menu ref="menu" menu-trigger="click" :default-active="$route.path" :collapse="isCollapse" :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>Components</span>
            </template>
            <el-menu-item index="/components/flockbutton">
              <span slot="title">FlockButton</span>
            </el-menu-item>
            <el-menu-item index="/components/fab">
              <span slot="title">FAB</span>
            </el-menu-item>
            <el-menu-item index="/components/gradientbutton">
              <span slot="title">GradientButton</span>
            </el-menu-item>
            <el-menu-item index="/components/transformcontainer">
              <span slot="title">TransformContainer</span>
            </el-menu-item>
            <el-menu-item index="/components/bouncingloader">
              <span slot="title">BouncingLoader</span>
            </el-menu-item>
            <el-menu-item index="/components/donutspinner">
              <span slot="title">DonutSpinner</span>
            </el-menu-item>
            <el-menu-item index="/components/borderinput">
              <span slot="title">BorderInput</span>
            </el-menu-item>
            <el-menu-item index="/components/labelinput">
              <span slot="title">LabelInput</span>
            </el-menu-item>
            <el-menu-item index="/components/radiobutton">
              <span slot="title">RadioButton</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>Directives</span>
            </template>
            <el-menu-item index="/components/hoveranimation">
              <span slot="title">HoverAnimation</span>
            </el-menu-item>
            <el-menu-item index="/components/hovermagicunderline">
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
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    nav(url) {
      this.$router.push(url);
      this.checkMobile();
      const open = (this.$refs["menu"].openedMenus = []);
      // this.$refs["menu"].isMenuPopup = false
      // console.log(this.$refs["menu"].openedMenus[0], this.$refs["menu"].openedMenus)
      // if (open != undefined) {
      //   this.$refs["menu"].close(open)

      // }
      this.$nextTick(function() {
        this.$refs["menu"].openedMenus = [];
      });
      console.log(this.$refs["menu"]);
    },
    checkMobile() {
      if (window.innerWidth > 875) {
        this.isCollapse = false;
      }
    }
  },
  mounted() {
    // console.log("object")
    this.checkMobile();
  }
};
</script>
<style scoped>
</style>
