import { getArticleInfo } from '@/app/api/posts/posts';
import { transformMarkdown } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getArticleInfo(slug);
  if (!data) notFound();
  const html = await transformMarkdown(data.info.content);
  return (
    <div className="p-2 m-auto w-full md:w-3/5">
      <section className="md-editor-preview default-theme md-editor-scrn" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
