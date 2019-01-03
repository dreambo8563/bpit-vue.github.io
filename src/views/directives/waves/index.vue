<template>
  <div class="hoveranimation-page">
    <div>
      <pre class="code-container language-javascript">
                <code>
                    import { Waves } from "@bpit/vue";
                </code>
            </pre>
    </div>
    <br>
    <br>
    <el-row type="flex">
      <el-button v-Waves>水波纹来了</el-button>
      <div v-Waves class="frameX">div方块</div>
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
  </div>
</template>
<script>
import Prism from "prismjs";
import { Waves } from "@bpit/vue";
export default {
  data() {
    return {
      tpl: `
      <el-button v-Waves>水波纹来了</el-button>
      <div v-Waves class="frameX">div方块</div>
            `,
      jscode: `
            directives: {
                Waves
            },  
            `
    };
  },
  directives: {
    Waves
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
