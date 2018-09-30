
<template>
  <div class="bouncingloader-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
              import { BouncingLoader } from "@bpit/vue";
          </code>
        </pre>
    </div>
    <el-row class="demo-container">
      <BouncingLoader></BouncingLoader>
      <BouncingLoader color="red"></BouncingLoader>
      <BouncingLoader color="green"></BouncingLoader>
      <BouncingLoader color="#cc99cd"></BouncingLoader>
      <BouncingLoader color="black"></BouncingLoader>
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
    <br>
    <h2> BouncingLoader 属性:</h2>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="参数">
      </el-table-column>
      <el-table-column prop="desc" label="说明">
      </el-table-column>
      <el-table-column prop="type" label="类型">
      </el-table-column>
      <el-table-column prop="values" label="可选值">
      </el-table-column>
      <el-table-column prop="default" label="默认值">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { BouncingLoader } from "@bpit/vue";
import Prism from "prismjs";
export default {
  data() {
    return {
      tableData: [
        {
          name: "color",
          desc: "主色",
          type: "String",
          values: "各种表示颜色的字符串",
          default: "#8385aa"
        }
      ],
      tpl: `
      <BouncingLoader></BouncingLoader>
      <BouncingLoader color="red"></BouncingLoader>
      <BouncingLoader color="green"></BouncingLoader>
      <BouncingLoader color="#cc99cd"></BouncingLoader>
      <BouncingLoader color="black"></BouncingLoader>
      `
    };
  },
  components: {
    BouncingLoader
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
</style>
