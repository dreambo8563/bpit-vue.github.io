module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      {
        libraryName: "@bpit/vue",
        camel2DashComponentName: false,
        customName: name => {
          return `@bpit/vue/src/components/${name}`;
        }
      }
    ]
  ]
};
