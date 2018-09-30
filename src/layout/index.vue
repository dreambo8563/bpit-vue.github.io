<template>
    <el-container>
        <el-header>
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
  components: {
    navbar: () => import("@/components/common/Navbar/index.vue"),
    headebar: () => import("@/components/common/HeaderNav/index.vue")
  }
};
</script>
<style lang="scss" scoped>
</style>
