const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
    proxy: {
      '/api': {
        target: 'http://localhost:44395', 
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
);
