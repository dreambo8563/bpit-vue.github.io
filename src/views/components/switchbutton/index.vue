<template>
    <div class="switchbutton-page">
        <div>
            <pre class="code-container language-javascript">
                <code>
                        import { SwitchButton } from "@bpit/vue";
                </code>
            </pre>
        </div>
        <el-row class="demo-container">
            <SwitchButton :type="1" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="2" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="3" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="4" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="5" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="6" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="7" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="8" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="9" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="10" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="11" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="12" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="13" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="14" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="15" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="16" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="17" v-model="checked">
            </SwitchButton>
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
        <h2> SwitchButton 属性:</h2>
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
import { SwitchButton } from "@bpit/vue";
export default {
  data() {
    return {
      checked: false,
      tpl: `
            <SwitchButton :type="1" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="2" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="3" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="4" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="5" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="6" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="7" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="8" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="9" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="10" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="11" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="12" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="13" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="14" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="15" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="16" v-model="checked">
            </SwitchButton>
            <SwitchButton :type="17" v-model="checked">
            </SwitchButton>
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
          name: "type",
          desc: "style number",
          type: "Number",
          values: "1-17",
          default: "1"
        },
        {
          name: "value",
          desc: "checked status",
          type: "Boolean",
          values: "true/false",
          default: "false"
        }
      ]
    };
  },
  components: {
    SwitchButton
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style lang="scss" scoped>
</style>
