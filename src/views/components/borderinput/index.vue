
<template>
  <div class="borderinput-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
                import { BorderInput } from "@bpit/vue";
          </code>
        </pre>
    </div>
    <el-row class="demo-container">
      <BorderInput :effects="1"></BorderInput>
      <BorderInput v-model="msg" :effects="2"></BorderInput>
      <BorderInput :effects="3"></BorderInput>
      <BorderInput :effects="4"></BorderInput>
      <BorderInput :effects="5"></BorderInput>
      <BorderInput :effects="6"></BorderInput>
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
    <h2> BorderInput 属性:</h2>
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
import Prism from "prismjs";
import { BorderInput } from "@bpit/vue";
export default {
  data() {
    return {
      msg: "hello",
      tpl: `
      <BorderInput :effects="1"></BorderInput>
      <BorderInput v-model="msg" :effects="2"></BorderInput>
      <BorderInput :effects="3"></BorderInput>
      <BorderInput :effects="4"></BorderInput>
      <BorderInput :effects="5"></BorderInput>
      <BorderInput :effects="6"></BorderInput>
      `,
      tableData: [
        {
          name: "placeholder",
          desc: "占位字符",
          type: "String",
          values: "-",
          default: "-"
        },
        {
          name: "type",
          desc: "native input的类型",
          type: "String",
          values: "text/email...",
          default: "text"
        },
        {
          name: "value",
          desc: "默认值",
          type: "String",
          values: "",
          default: ""
        },
        {
          name: "effects",
          desc: "效果枚举值",
          type: "Number",
          values: "1/2/3/4/5/6",
          default: "1vue"
        }
      ]
    };
  },
  components: {
    BorderInput
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
</style>
