const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // Eslint false -> 단일 단어 컴포넌트 사용 가능
  lintOnSave : false
})
