
<template>
  <div class="fab-page">
    <div>
      <pre class="code-container language-javascript">
          <code>
                import { FAB } from "@bpit/vue";

                const FABContainer = FAB.FABContainer;
                const FABItem = FAB.FABItem;
                const FABTrigger = FAB.FABTrigger;
          </code>
        </pre>
    </div>
    <FABContainer :expand="expand">
      <FABItem @click="expand=!expand" class="google" tooltip="Google+"></FABItem>
      <FABItem class="twitter"></FABItem>
      <FABItem class="fb"></FABItem>
      <FABTrigger @click="expand=!expand" class="trigger" tooltip="share"></FABTrigger>
    </FABContainer>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="Show Code" name="1">
        <pre class="code-container language-javascript">
          <code>
            {{ jscode }}
          </code>
        </pre>
        <pre class="code-container language-markup">
          <code>
            {{ tpl }}
          </code>
        </pre>
        <pre class="code-container language-css">
        <code class=" language-css" >
            {{css}}
        </code>
        </pre>
      </el-collapse-item>
    </el-collapse>
    <br>
    <h2> FABContainer 属性:</h2>
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
    <h2> FABTrigger 事件:</h2>
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

    <br>
    <h2> FABItem 属性:</h2>
    <el-table :data="tableData3" style="width: 100%">
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
    <h2> FABItem 事件:</h2>
    <el-table :data="tableData4" style="width: 100%">
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
import { FAB } from "@bpit/vue";
import Prism from "prismjs";

const FABContainer = FAB.FABContainer;
const FABItem = FAB.FABItem;
const FABTrigger = FAB.FABTrigger;
export default {
  data() {
    return {
      activeNames: [],
      tableData: [
        {
          name: "expand",
          desc: "控制菜单是否展开",
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
      tableData3: [
        {
          name: "tooltip",
          desc: "hover的时候会显示提示信息",
          type: "String",
          values: "-",
          default: "-"
        }
      ],
      tableData4: [
        {
          name: "click",
          desc: "点击事件",
          type: "Function",
          values: "-",
          default: "-"
        }
      ],
      expand: true,
      jscode: `
        export default {
          data() {
            return {
              expand: true,
            }
          },
          components: {
            FABContainer, FABItem, FABTrigger
          }
        };
`,
      tpl: `
      <FABContainer :expand="expand">
        <FABItem @click="expand=!expand" class="google" tooltip="Google+"></FABItem>
        <FABItem class="twitter"></FABItem>
        <FABItem class="fb"></FABItem>
        <FABTrigger @click="expand=!expand" class="trigger" tooltip="share"></FABTrigger>
      </FABContainer>
`,
      css: `
  .google {
    background-image: url("https://cbwconline.com/IMG/Google%20Plus.svg");
    background-size: contain;
  }
  .twitter {
    background-image: url("https://cbwconline.com/IMG/Twitter-Flat.png");
    background-size: contain;
  }
  .fb {
    background-image: url("https://cbwconline.com/IMG/Facebook-Flat.png");
    background-size: contain;
  }
  .trigger {
    background-image: url("https://cbwconline.com/IMG/Share.svg");
    background-size: contain;
  }
`
    };
  },
  components: {
    FABContainer,
    FABItem,
    FABTrigger
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style scoped>
.google {
  background-image: url("https://cbwconline.com/IMG/Google%20Plus.svg");
  background-size: contain;
}
.twitter {
  background-image: url("https://cbwconline.com/IMG/Twitter-Flat.png");
  background-size: contain;
}
.fb {
  background-image: url("https://cbwconline.com/IMG/Facebook-Flat.png");
  background-size: contain;
}
.trigger {
  background-image: url("https://cbwconline.com/IMG/Share.svg");
  background-size: contain;
}
</style>
