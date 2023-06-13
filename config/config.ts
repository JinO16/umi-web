import routes from "../src/router";
import { defineConfig } from "umi";

const isProduction = (env: string | undefined) => {
  const envs = ['test', 'prod'];
  return env && envs.includes(env);
}

const baseUrl = 'ekpsj16/portal/new-portal-test';
export default defineConfig({
  routes: routes,
  npmClient: 'pnpm',
  base: '/',
  publicPath: isProduction(process.env.UMI_ENV) ? `/${baseUrl}/` : '/',
  history: {
    type: 'hash'
  },
  hash: true,
  // headScripts: [
  //   { src: '/js/umi.js', defer: true },
  // ],
  // scripts: [
  //   {
  //     src: isProduction(process.env.UMI_ENV) ? `/${baseUrl}/js/umi.js` : '/js/umi.js'
  //   }
  // ],
  chainWebpack: (config, { webpack }) => {
    // 将js文件打包到dist/js文件中
    config.output.filename('js/[name].[hash:8].js');
    config.output.chunkFilename('js/[name].[hash:8]..async.js');

    // 将css文件打包到dist/css文件中
    config.plugin('mini-css-extract-plugin').tap((args) => [
      {
        ...args[0],
        filename: 'css/[name].[hash:8]..css',
        chunkFilename: 'css/[name].[hash:8]..chunk.css'
      }
    ])
    // 更改生成的html模板配置
    // config.plugin('html').tap(args => {
    //   args[0].template = './public/index.html'; // 指定 HTML 模板文件
    //   // args[0].scriptLoading = 'defer'; // 将所有 script 标签的 loading 属性设置为 defer
    //   return args;
    // })
  },
  // 配置全局变量，透传
  define: {
    "process.env.UMI_ENV": process.env.UMI_ENV
  }
});
