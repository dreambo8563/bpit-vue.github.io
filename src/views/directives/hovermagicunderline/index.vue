<template>
    <div class="hovermagicunderline-page">
        <div>
            <pre class="code-container language-javascript">
                <code>
                    import { HoverMagicUnderline } from "@bpit/vue";
                </code>
            </pre>
        </div>
        <el-row class="demo-container">
            <h2>Wow this one is super incredibly cool, and this
                <span v-HoverMagicUnderline="{leftColor: 'black',rightColor: 'blue'}">
                    one is on Multiple Lines!
                </span>
                I wish I had found this like thirty projects ago when I was representing the lollipop guild.
            </h2>
            <h1>
                Look At This
                <span v-HoverMagicUnderline="{leftColor: '#84fab0',rightColor: '#8fd3f4'}">
                    Pretty
                </span>
                Underline
            </h1>
        </el-row>
        <el-collapse>
            <el-collapse-item title="Show Code" name="1">
                <pre class="code-container language-markup">
                    <code>
                        {{tpl}}
                    </code>
                </pre>
                <br>
                <pre class="code-container language-javascript">
                    <code>
                        {{js}}
                    </code>
                </pre>
            </el-collapse-item>
        </el-collapse>
        <br>
        <h2> HoverMagicUnderline 参数:</h2>
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
import { HoverMagicUnderline } from "@bpit/vue";
export default {
  data() {
    return {
      tableData: [
        {
          name: "leftColor",
          desc: "左侧开始的颜色",
          type: "string",
          values: "字面颜色red或者16进制",
          default: "-"
        },
        {
          name: "rightColor",
          desc: "右侧过渡结束的颜色",
          type: "string",
          values: "字面颜色red或者16进制",
          default: "-"
        }
      ],
      tpl: `
             <h2>Wow this one is super incredibly cool, and this
                <span v-HoverMagicUnderline="{leftColor: 'black',rightColor: 'blue'}">
                    one is on Multiple Lines!
                </span>
                I wish I had found this like thirty projects ago when I was representing the lollipop guild.
            </h2>
            <h1>
                Look At This
                <span v-HoverMagicUnderline="{leftColor: '#84fab0',rightColor: '#8fd3f4'}">
                    Pretty
                </span>
                Underline
            </h1>
            `,
      js: `
             directives: {
                ...HoverMagicUnderline
            }`
    };
  },
  directives: {
    ...HoverMagicUnderline
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style lang="scss" scoped>
</style>
