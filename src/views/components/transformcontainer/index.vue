
<template>
  <div class="transformcontainer-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
                import { TransformContainer } from "@bpit/vue";
          </code>
        </pre>
    </div>
    <br>
    <TransformContainer defaultClass="transform" openClass="openDialog" :open="expand">
      <div class="button-copy" v-if="!expand" @click="expand = true">
        Add Product
      </div>
      <div v-else class="cancel ">
        <span @click="expand=false">
          Cancel
        </span>
      </div>
    </TransformContainer>
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
        <pre class="code-container language-css">
          <code>
            {{css}}
          </code>
        </pre>
      </el-collapse-item>
    </el-collapse>
    <br>
    <h2> TransformContainer 属性:</h2>
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
    <el-alert title="属性只传入布局样式,具体内容样式由里面的内容处理.变化内容基本为 v-if ... v-else 模式" type="info">
    </el-alert>
  </div>
</template>
<script>
import { TransformContainer } from "@bpit/vue";
import Prism from "prismjs";

export default {
  data() {
    return {
      tableData: [
        {
          name: "defaultClass",
          desc: "变化前的布局,注意只是布局",
          type: "String",
          values: "-",
          default: "-"
        },
        {
          name: "openClass",
          desc: "变化后的布局,注意只是布局",
          type: "String",
          values: "-",
          default: "-"
        },
        {
          name: "open",
          desc: "是否变形",
          type: "Boolean",
          values: "true/false",
          default: "false"
        }
      ],
      expand: false,
      tpl: `
    <TransformContainer defaultClass="transform" openClass="openDialog" :open="expand">
      <div class="button-copy" v-if="!expand" @click="expand = true">
        Add Product
      </div>
      <div v-else class="cancel ">
        <span @click="expand=false">
          Cancel
        </span>
      </div>
    </TransformContainer>
      `,
      css: `
  .button-copy {
    text-align: center;
    line-height: 144px;
    text-transform: uppercase;
    font-weight: bold;
    color: #f7f7f7;
  }

  .transform {
    background-color: #ffc145;
    height: 144px;
    width: 144px;
    border-radius: 72px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;
  }
  .openDialog {
    background-color: #fafafa;
    padding: 18px 32px;
    border-radius: 5px;
    width: 420px;
    height: 398px;
    cursor: default;
  }
      `
    };
  },
  components: {
    TransformContainer
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
.button-copy {
  text-align: center;
  line-height: 144px;
  text-transform: uppercase;
  font-weight: bold;
  color: #f7f7f7;
}

.transform {
  background-color: #ffc145;
  height: 144px;
  width: 144px;
  border-radius: 72px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
}
.openDialog {
  background-color: #fafafa;
  padding: 18px 32px;
  border-radius: 5px;
  width: 420px;
  height: 398px;
  cursor: default;
}
</style>
