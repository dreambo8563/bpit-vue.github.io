
<template>
  <div class="fab-page">
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
      <FABContainer :expand="expand">
        <FABItem @click="expand=!expand" class="google" tooltip="Google+"></FABItem>
        <FABItem class="twitter"></FABItem>
        <FABItem class="fb"></FABItem>
        <FABTrigger @click="expand=!expand" class="trigger" tooltip="share"></FABTrigger>
      </FABContainer>
    </el-collapse>
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
      expand: false,
      jscode: `
import { FAB } from "@bpit/vue"
const FABContainer = FAB.FABContainer
const FABItem = FAB.FABItem
const FABTrigger = FAB.FABTrigger
export default {
  data() {
    return {
      expand: false,
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
