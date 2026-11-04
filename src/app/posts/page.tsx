import { getArticleList } from '@/app/api/posts/posts';
import Link from 'next/link';

export default async function Posts() {
  const { list } = await getArticleList();
  return (
    <div className="flex justify-around flex-wrap gap-4 p-4">
      {list.map((item) => (
        <article className="card w-96 max-w-full bg-base-100 shadow-xl" key={item.id}>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <Link className="btn btn-primary" href={'/posts/' + item.id}>Read</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
