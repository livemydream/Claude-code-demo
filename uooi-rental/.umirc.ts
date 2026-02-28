import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/grocery-cover', component: '@/pages/grocery-cover' },
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
