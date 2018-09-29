
<template>
  <div class="flockbutton-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
                import { FlockButton } from "@bpit/vue";
          </code>
        </pre>
    </div>
    <el-row class="demo-container">
      <FlockButton>Submit</FlockButton>
      <FlockButton :disabled="true">Submit</FlockButton>
      <FlockButton type="secondary">Submit</FlockButton>
      <FlockButton type="destructive">Submit</FlockButton>
      <FlockButton :invert="true">Submit</FlockButton>
      <FlockButton :loading="true">Submit</FlockButton>
      <FlockButton size="half">Submit</FlockButton>
      <FlockButton size="full">Submit</FlockButton>
    </el-row>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="Show Code" name="1">
        <pre class="code-container language-markup">
          <code>
            {{code}}
          </code>
        </pre>
      </el-collapse-item>
    </el-collapse>
    <br>
    <h2> FlockButton 属性:</h2>
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
    <h2> FlockButton 事件:</h2>
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
import { FlockButton } from "@bpit/vue";

export default {
  data() {
    return {
      activeNames: [],
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
          desc: "内置类型",
          type: "string",
          values: "primary/secondary/destructive",
          default: "primary"
        },
        {
          name: "invert",
          desc: "是否反色",
          type: "Boolean",
          values: "true/false",
          default: "false"
        },
        {
          name: "size",
          desc: "尺寸",
          type: "string",
          values: "half/full",
          default: "-"
        },
        {
          name: "loading",
          desc: "是否加载中状态",
          type: "Boolean",
          values: "true/false",
          default: "false"
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
      code: `
    <FlockButton>Submit</FlockButton>
    <FlockButton :disabled="true">Submit</FlockButton>
    <FlockButton type="secondary">Submit</FlockButton>
    <FlockButton type="destructive">Submit</FlockButton>
    <FlockButton :invert="true">Submit</FlockButton>
    <FlockButton :loading="true">Submit</FlockButton>
    <FlockButton size="half">Submit</FlockButton>
    <FlockButton size="full">Submit</FlockButton>`
    };
  },
  components: {
    FlockButton
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
