
<template>
  <div class="filters-page">
    <headebar :class="isCollapse?'mobileHeader':''"></headebar>
    <section>
      <h3>From npm</h3>
      <code>npm install @bpit/vue --save</code>
    </section>
    <br>
    <hr>
    <section>
      <el-collapse accordion>
        <el-collapse-item title="Placeholder">
          <div>
            Sample:
            <span>{{name | placeholder('未知')}}</span>
          </div>
          <pre class="language-javascript">
            <code>
          import placeholder from "@bpit/vue/src/components/Filters/placeholder"

            filters: {
              placeholder
            },
            {{placeholderTpl}}
            </code>
          </pre>
        </el-collapse-item>
      </el-collapse>
    </section>
  </div>
</template>
<script>
import Prism from "prismjs";
import placeholder from "@bpit/vue/src/components/Filters/placeholder";
export default {
  data() {
    return {
      isCollapse: window.innerWidth < 875,
      name: "",
      placeholderTpl: `
      <span>{{name |placeholder('未知')}}</span>
      `
    };
  },
  components: {
    headebar: () => import("@/components/common/HeaderNav/index.vue")
  },
  filters: {
    placeholder
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
.filters-page {
  padding: 0 20px;
}
</style>
