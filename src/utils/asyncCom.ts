import loadingCom from "@/components/common/Loading/index.vue";
// import error from "@/components/common/Error/index.vue";
export const AsyncComp = (com: Promise<any>) => () => ({
  // 需要加载的组件。应当是一个 Promise
  component: com,
  // 加载中应当渲染的组件
  loading: loadingCom,
  // 出错时渲染的组件
  // error: error,
  // 渲染加载中组件前的等待时间。默认：200ms。
  delay: 0
  // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
  // timeout: 3000
});
