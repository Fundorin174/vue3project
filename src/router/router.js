import Main from '@/pages/Main';
import PostsPage from '@/pages/PostsPage';
import PostPage from '@/pages/PostPage';
import AboutPage from '@/pages/AboutPage';
import { createRouter, createWebHistory } from 'vue-router';
import PostsPageWithStore from '@/pages/PostsPageWithStore';
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/posts/:id',
    component: PostPage,
  },
  {
    path: '/store',
    component: PostsPageWithStore,
  },
  {
    path: '/composition',
    component: PostsPageCompositionApi,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;