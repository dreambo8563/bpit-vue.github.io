<template>
    <el-container>
        <el-aside width="200px">
            <navbar></navbar>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
  components: {
    navbar: () => import("../components/common/Navbar/index.vue")
  }
};
</script>
<style lang="scss" scoped>
</style>
