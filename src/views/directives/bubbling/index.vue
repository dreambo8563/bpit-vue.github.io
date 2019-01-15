<template>
  <div class="hoveranimation-page">
    <div>
      <pre class="code-container language-javascript">
                <code>
                    import { Bubbling } from "@bpit/vue";
                </code>
            </pre>
    </div>
    <br>
    <br>
    <el-row type="flex">
      <el-button v-Bubbling="{color:'red'}">水波纹来了</el-button>
      <div v-Bubbling="{color:'green'}" class="frameX">div方块</div>
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
        <br>
        <pre class="code-container language-css">
                    <code>
                        {{css}}
                    </code>
                </pre>
      </el-collapse-item>
    </el-collapse>
    <br>
    <h2>Bubbling 参数:</h2>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="参数"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="values" label="可选值"></el-table-column>
      <el-table-column prop="default" label="默认值"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import Prism from "prismjs";
import { Bubbling } from "@bpit/vue";
export default {
  data() {
    return {
      tpl: `
      <el-button v-Bubbling="{color:'red'}">水波纹来了</el-button>
      <div v-Bubbling="{color:'green'}" class="frameX">div方块</div>
            `,
      jscode: `
            directives: {
                Bubbling
            },  
            `,
      css: `
      // 控制气泡高度
        <style>
            @keyframes fadeOutUp {
                from {
                    opacity: 1;
                }

                to {
                    opacity: 0;
                    transform: translate3d(0, -1600%, 0);
                }
            }
        </style>
        `,
      tableData: [
        {
          name: "color",
          desc: "气泡的颜色",
          type: "string",
          values: "字面颜色red或者16进制",
          default: "#fff"
        }
      ]
    };
  },
  directives: {
    Bubbling
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style lang="scss" scoped>
.frameX {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: solid 1px gold;
  background: pink;
}
</style>
<style>
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -1600%, 0);
  }
}
</style>
