
<template>
  <div class="flockbutton-page">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="Show Code" name="1">
        <pre class="code-container language-javascript">
          <code>
            {{ jscode }}
          </code>
        </pre>
        <pre class="code-container language-markup">
          <code>
            {{code}}
          </code>
        </pre>
      </el-collapse-item>
      <FlockButton>Submit</FlockButton>
      <FlockButton :disabled="true">Submit</FlockButton>
      <FlockButton type="secondary">Submit</FlockButton>
      <FlockButton type="destructive">Submit</FlockButton>
      <FlockButton :invert="true">Submit</FlockButton>
      <FlockButton :loading="true">Submit</FlockButton>
      <FlockButton size="half">Submit</FlockButton>
      <FlockButton size="full">Submit</FlockButton>
    </el-collapse>
  </div>

</template>
<script>
import Prism from "prismjs";
import { FlockButton } from "@bpit/vue";

export default {
  data() {
    return {
      activeNames: [],
      code: `
    <FlockButton>Submit</FlockButton>
    <FlockButton :disabled="true">Submit</FlockButton>
    <FlockButton type="secondary">Submit</FlockButton>
    <FlockButton type="destructive">Submit</FlockButton>
    <FlockButton :invert="true">Submit</FlockButton>
    <FlockButton :loading="true">Submit</FlockButton>
    <FlockButton size="half">Submit</FlockButton>
    <FlockButton size="full">Submit</FlockButton>`,
      jscode: `
    import { FlockButton } from "@bpit/vue";

    export default {
      data() {
        return {
        };
      },
      components: {
        FlockButton
      }
    };
    `
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
<style scoped>
</style>
