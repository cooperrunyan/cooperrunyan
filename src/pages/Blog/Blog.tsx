import style from './Blog.module.scss';
import { Link, Portfolio, Nav, Center, Footer } from '~/components';
import Head from 'next/head';
import Image from 'next/image';
import { sortBlogs } from '~/lib';

export function Blog({ pages, data }: { pages: string[]; data: any }) {
  return (
    <Portfolio>
      <Head>
        <title>Blog</title>

        {pages.map((page) => (
          <link rel="prefetch" href={data[page].preview} key={data[page].preview} />
        ))}
      </Head>
      <Nav />
      <Center>
        <div className={style.section}>
          <h2>Blog</h2>
          <div className={style.content}>
            {sortBlogs(pages, data).map((page) => (
              <Link key={page} href={page} className={style.Card}>
                <div>
                  <Image layout="responsive" width={4000} height={2400} src={data[page]?.preview} alt="Preview image" />
                </div>
                <p>{data[page]?.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </Center>
      <Footer />
    </Portfolio>
  );
}