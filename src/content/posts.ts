export type Post = {
  id: string;
  title: string;
  description: string;
  content: string;
};

// Sample content. Add or edit posts here, then rebuild the site.
export const posts: Post[] = [
  {
    id: 'fh',
    title: '战马',
    description: '这是一篇文章',
    content: '<iframe width="713" height="401" src="https://www.youtube.com/embed/asKQbk7AcJU" title="崔伟立原唱《战马》完整版 歌曲旋律优美，句句入耳入心超好听" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    id: 'welcome',
    title: '欢迎',
    description: '这是一篇示例文章，用于展示博客的文章列表和阅读页面。',
    content: '# 示例文章：欢迎\n\n这是一篇示例文章，不是站长的真实文章。\n\n博客现在使用仓库中的本地内容，不再依赖原作者的服务器。\n\n编辑 `src/content/posts.ts` 可以修改或添加文章，提交后重新部署即可更新网站。',
  },
  {
    id: 'markdown-demo',
    title: '示例文章：Markdown',
    description: '展示标题、列表和代码块。',
    content: '# 示例文章：Markdown\n\n这是一篇格式演示文章。\n\n## 列表\n\n- 支持 **粗体** 和 *斜体*\n- 支持代码块\n- 内容保存在 GitHub 仓库中\n\n```javascript\nconst greeting = "Hello, blog!";\nconsole.log(greeting);\n```',
  },
];

export const about: Post = {
  id: '44',
  title: '关于这个博客',
  description: '本地内容博客的示例介绍。',
  content: '# 关于这个博客\n\n这是一个使用 Next.js 的本地内容博客。\n\n当前文章和本页文字是明确标注的示例内容，不是站长的个人简介。\n\n## 如何更新\n\n在 `src/content/posts.ts` 中编辑文章和介绍，然后提交并重新部署。\n\n无需原作者的 API、登录账号或数据库。',
};
