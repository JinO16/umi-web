import routes from "../src/router";
import { defineConfig } from "umi";

const isProduction = (env: string | undefined) => {
  const envs = ['test', 'production'];
  return env && envs.includes(env);
}

export default defineConfig({
  routes: routes,
  npmClient: 'pnpm',
  base: '/',
  publicPath: isProduction(process.env.NODE_ENV) ? '/ekpsj16/portal/new-portal-test/' : '/',
  history: {
    type: 'hash'
  },
  hash: true
});
