
<template>
  <div class="labelinput-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
                import { LabelInput } from "@bpit/vue";
          </code>
        </pre>
    </div>
    <br>
    <br>
    <el-row class="demo-container">
      <LabelInput v-model="msg" label="Name" :effects="1"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="2"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="3"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="4"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="5"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="6"></LabelInput>
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
    <h2> LabelInput 属性:</h2>
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
import { LabelInput } from "@bpit/vue";
export default {
  data() {
    return {
      msg: "",
      tpl: `
      <LabelInput v-model="msg" label="Name" :effects="1"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="2"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="3"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="4"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="5"></LabelInput>
      <LabelInput v-model="msg" label="Name" :effects="6"></LabelInput>
      `,
      tableData: [
        {
          name: "label",
          desc: "label",
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
          default: "1"
        }
      ]
    };
  },
  components: {
    LabelInput
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
</style>
