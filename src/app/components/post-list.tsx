import { posts } from '@/content/posts';
import Link from 'next/link';

export const POSTS_PER_PAGE = 6;

export function pageCount() {
  return Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
}

export default function PostList({ page }: { page: number }) {
  const total = pageCount();
  const start = (page - 1) * POSTS_PER_PAGE;
  const list = posts.slice(start, start + POSTS_PER_PAGE);
  return (
    <div>
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
      {total > 1 && (
        <div className="join flex justify-center p-4">
          {page > 1 && (
            <Link className="join-item btn" href={page - 1 === 1 ? '/posts' : '/posts/page/' + (page - 1)}>Prev</Link>
          )}
          <span className="join-item btn btn-disabled">Page {page} / {total}</span>
          {page < total && (
            <Link className="join-item btn" href={'/posts/page/' + (page + 1)}>Next</Link>
          )}
        </div>
      )}
    </div>
  );
}
