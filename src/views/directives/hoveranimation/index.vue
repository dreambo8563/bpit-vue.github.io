<template>
    <div class="hoveranimation-page">
        <div>
            <pre class="code-container language-javascript">
                <code>
                    import { HoverAnimation } from "@bpit/vue";
                </code>
            </pre>
        </div>
        <br>
        <br>
        <el-row type="flex">
            <el-col>
                <a v-HoverAnimation="{textColor: '#e85a19', backgroundColor: '#f5ce62',foregroundColor:'blue'}"> became hover animate</a>
            </el-col>
            <el-col>
                <span v-HoverAnimation="{textColor: 'black', backgroundColor: '#c92918',foregroundColor:'#e74c3c'}">
                    span hover animate
                </span>
            </el-col>
        </el-row>
        <br>
        <br>
        <br>
        <el-collapse>
            <el-collapse-item title="Show Code">
                <pre class="code-container language-markup">
                    <code>
                        {{tpl}}
                    </code>
                </pre>
                <br>
                <pre class="code-container language-javascript">
                    <code>
                        {{jscode}}
                    </code>
                </pre>
            </el-collapse-item>
        </el-collapse>
        <br>
        <h2> HoverAnimation 参数:</h2>
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
import { HoverAnimation } from "@bpit/vue";
export default {
  data() {
    return {
      tableData: [
        {
          name: "textColor",
          desc: "文字的颜色,hover后是白色",
          type: "string",
          values: "字面颜色red或者16进制",
          default: "-"
        },
        {
          name: "foregroundColor",
          desc: "hover后前景色",
          type: "string",
          values: "字面颜色red或者16进制",
          default: "-"
        },
        {
          name: "backgroundColor",
          desc: "hover后背景色",
          type: "string",
          values: "字面颜色red或者16进制",
          default: "-"
        }
      ],
      tpl: ` <a v-HoverAnimation="{textColor: '#e85a19', backgroundColor: '#f5ce62',foregroundColor:'blue'}"> became hover animate</a>
            
            <span v-HoverAnimation="{textColor: 'black', backgroundColor: '#c92918',foregroundColor:'#e74c3c'}">
                span hover animate
            </span>
            `,
      jscode: `
            directives: {
                ...HoverAnimation
            },  
            `
    };
  },
  directives: {
    ...HoverAnimation
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style lang="scss" scoped>
</style>
