import PostList, { pageCount } from '@/app/components/post-list';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

// Always at least one param: with few posts only /posts/page/1 exists,
// which keeps output:export builds valid. /posts/page/2 etc. appear
// automatically once there are more than POSTS_PER_PAGE posts.
export function generateStaticParams() {
  return Array.from({ length: pageCount() }, (_, i) => ({ page: String(i + 1) }));
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 1 || n > pageCount()) notFound();
  return <PostList page={n} />;
}
