
<template>
  <div class="donutspinner-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
                import { DonutSpinner } from "@bpit/vue";
          </code>
        </pre>
    </div>
    <el-row class="demo-container">
      <DonutSpinner></DonutSpinner>
      <DonutSpinner style="color:red"></DonutSpinner>
      <DonutSpinner style="color:pink"></DonutSpinner>
    </el-row>
    <br>
    <el-collapse>
      <el-collapse-item title="Show Code" name="1">
        <pre class="code-container language-markup">
          <code>
            {{tpl}}
          </code>
        </pre>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>
<script>
import { DonutSpinner } from "@bpit/vue";
import Prism from "prismjs";
export default {
  data() {
    return {
      tpl: `
    <DonutSpinner></DonutSpinner>
    <DonutSpinner style="color:red"></DonutSpinner>
    <DonutSpinner style="color:pink"></DonutSpinner>
      `
    };
  },
  components: {
    DonutSpinner
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
</style>
