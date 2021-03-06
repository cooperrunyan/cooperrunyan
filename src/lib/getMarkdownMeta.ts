import type { GetStaticPropsContext } from 'next';
import fs from 'fs';
import matter from 'gray-matter';

export function getMarkdownMeta({ img, full }: Props) {
  return async (ctx: GetStaticPropsContext) => {
    const pages = fs
      .readdirSync(full)
      .map(page => ({ meta: matter(fs.readFileSync(`${full}/${page}`)).data, page }))
      .map(
        ({ meta, page }) =>
          ({
            preview: `${img}/${page.replace('.mdx', '').replace('.md', '')}.${meta.image || 'svg'}`,
            slug: page.replace('.mdx', '').replace('.md', ''),
            ...meta,
          } as any),
      )
      .sort((a, b) => {
        if (!a.timestamp || !b.timestamp) return 1;
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      })
      .filter(page => {
        if (process.env.NODE_ENV === 'production') return !page.hidden;
        return true;
      });

    return {
      props: {
        pages,
      },
    };
  };
}

interface Props {
  img: string;
  access: string; // '/blog'
  full: string; // './src/pages/blog/pages'
}
