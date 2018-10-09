<template>
    <el-container>
        <el-header :class="isCollapse?'mobileHeader':''">
            <headebar></headebar>
        </el-header>
        <el-container>
            <el-aside style="width:20%;max-width:200px">
                <navbar></navbar>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  components: {
    navbar: () => import("@/components/common/Navbar/index.vue"),
    headebar: () => import("@/components/common/HeaderNav/index.vue")
  },
  mounted() {
    if (window.innerWidth > 875) {
      this.isCollapse = false;
    }
  }
};
</script>
<style lang="scss" >
</style>
