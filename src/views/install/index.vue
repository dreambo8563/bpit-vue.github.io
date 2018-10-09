
<template>
  <div class="install-page">
    <headebar :class="isCollapse?'mobileHeader':''"></headebar>
    <section>
      <h3>From npm</h3>
      <code>
        npm install @bpit/vue --save
      </code>
    </section>
    <br>
    <hr>
    <section>
      <h3>Import on demand</h3>
      <li>install Babel Plugin ->
        <pre class="language-javascript">
        <code>
          npm install babel-plugin-import --save-dev
        </code>
        </pre>
      </li>
      <li>
        config webpack babel.config.js ->
        <pre class="language-javascript">
          <code>
           
          plugins: [
            [
              "import",
              {
                libraryName: "@bpit/vue",
                camel2DashComponentName: false,
                customName: name => {
                  return `@bpit/vue/src / components / ${ name } `
                }
              }
            ]
          ]
        </code>
       </pre>
      </li>
    </section>
    <br>
    <hr>
    <section>
      <h3>Basic Usage</h3>
      <pre class="language-javascript">

       <code>
         import { FlockBanner, FAB, FlockButton } from "@bpit/vue"
          const FABItem = FAB.FABItem
          const FABTrigger = FAB.FABTrigger
          const FABContainer = FAB.FABContainer
       </code>
     </pre>
      <br>
      <pre class="language-javascript">
       <code>
          {{jscode}}
       </code>
     </pre>
      <br>
      <pre class="language-javascript">
       <code>
          {{tpl}}
       </code>
     </pre>
    </section>
  </div>
</template>
<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      isCollapse: window.innerWidth < 875,
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
`
    };
  },
  components: {
    headebar: () => import("@/components/common/HeaderNav/index.vue")
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
.install-page {
  padding: 0 20px;
}
</style>
