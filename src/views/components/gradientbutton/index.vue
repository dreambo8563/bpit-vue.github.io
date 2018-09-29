
<template>
  <div class="gradientbutton-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
                import { GradientButton } from "@bpit/vue";
          </code>
        </pre>
    </div>
    <br>
    <el-row class="demo-container">
      <GradientButton>Submit</GradientButton>
      <GradientButton :disabled="true">Submit</GradientButton>
      <GradientButton type="1">Submit</GradientButton>
      <GradientButton type="2">Submit</GradientButton>
      <GradientButton type="3">Submit</GradientButton>
      <GradientButton type="4">Submit</GradientButton>
      <GradientButton type="5">Submit</GradientButton>
      <GradientButton type="6">Submit</GradientButton>
      <GradientButton type="7">Submit</GradientButton>
      <GradientButton type="8">Submit</GradientButton>
      <GradientButton @click="log" type="9">Submit</GradientButton>
    </el-row>
    <br>
    <el-collapse>
      <el-collapse-item title="Show Code">
        <pre class="code-container language-markup">
          <code>
            {{tpl}}
          </code>
        </pre>
      </el-collapse-item>
    </el-collapse>
    <br>
    <h2> GradientButton 属性:</h2>
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

    <br>
    <h2> GradientButton 事件:</h2>
    <el-table :data="tableData2" style="width: 100%">
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
import { GradientButton } from "@bpit/vue";
export default {
  data() {
    return {
      tableData: [
        {
          name: "disabled",
          desc: "是否不可用状态",
          type: "Boolean",
          values: "true/false",
          default: "false"
        },
        {
          name: "type",
          desc: "过渡颜色枚举",
          type: "string",
          values: "1-9",
          default: "1"
        }
      ],
      tableData2: [
        {
          name: "click",
          desc: "点击事件",
          type: "Function",
          values: "-",
          default: "-"
        }
      ],
      tpl: `
      <GradientButton>Submit</GradientButton>
      <GradientButton :disabled="true">Submit</GradientButton>
      <GradientButton type="1">Submit</GradientButton>
      <GradientButton type="2">Submit</GradientButton>
      <GradientButton type="3">Submit</GradientButton>
      <GradientButton type="4">Submit</GradientButton>
      <GradientButton type="5">Submit</GradientButton>
      <GradientButton type="6">Submit</GradientButton>
      <GradientButton type="7">Submit</GradientButton>
      <GradientButton type="8">Submit</GradientButton>
      <GradientButton type="9">Submit</GradientButton>
      `
    };
  },
  components: {
    GradientButton
  },
  mounted() {
    Prism.highlightAll();
  },
  methods: {
    log() {
      console.log("log");
    }
  }
};
</script>
<style scoped>
</style>
