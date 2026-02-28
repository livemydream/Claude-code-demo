import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  npmClient: 'npm',
  hash: true,
  fastRefresh: true,
  theme: {
    'primary-color': '#1890ff',
  },
  alias: {
    '@': './src',
  },
});
