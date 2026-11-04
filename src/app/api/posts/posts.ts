import { about, posts } from '@/content/posts';

export async function getArticleList() {
  return { list: posts };
}

export async function getArticleInfo(id: string) {
  const info = id === about.id ? about : posts.find((post) => post.id === id);
  return info ? { info } : undefined;
}
