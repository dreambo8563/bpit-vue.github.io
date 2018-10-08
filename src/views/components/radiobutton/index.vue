
<template>
  <div class="radiobutton-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
                import { RadioButton, RadioGroup } from "@bpit/vue";
          </code>
        </pre>
    </div>
    <el-row class="demo-container">
      <RadioGroup v-model="radioG">
        <RadioButton style="color:red" label="1"></RadioButton>
        <RadioButton label="2"></RadioButton>
        <RadioButton style="color:#359be8" label="3">This is in the slot</RadioButton>
        <RadioButton label="4"></RadioButton>
      </RadioGroup>
      <RadioButton :disabled="true" v-model="radio1" label="1">Disabled</RadioButton>
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
    <h2> RadioButton 属性:</h2>
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
    <h2> RadioGroup 属性:</h2>
    <el-table :data="tableData1" style="width: 100%">
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
import { RadioButton, RadioGroup } from "@bpit/vue";
export default {
  data() {
    return {
      radio1: "4",
      radioG: "3",
      tpl: `
      <RadioGroup v-model="radioG">
        <RadioButton style="color:red" label="1"></RadioButton>
        <RadioButton label="2"></RadioButton>
        <RadioButton style="color:#359be8" label="3">This is in the slot</RadioButton>
        <RadioButton label="4"></RadioButton>
      </RadioGroup>

      <RadioButton :disabled="true" v-model="radio1" label="1">Disabled</RadioButton>
      `,
      tableData: [
        {
          name: "disabled",
          desc: "是否不可用状态",
          type: "Boolean",
          values: "true/false",
          default: "false"
        },
        {
          name: "label",
          desc: "the value",
          type: "String",
          values: "-",
          default: "-"
        },
        {
          name: "value",
          desc: "when using v-model",
          type: "String",
          values: "-",
          default: "-"
        }
      ],
      tableData1: [
        {
          name: "disabled",
          desc: "是否不可用状态",
          type: "Boolean",
          values: "true/false",
          default: "false"
        },
        {
          name: "value",
          desc: "when using v-model",
          type: "String",
          values: "-",
          default: "-"
        }
      ]
    };
  },
  components: { RadioButton, RadioGroup },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
</style>
